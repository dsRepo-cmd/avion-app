import {
  ProductListing,
  SearchParams,
  SortBy,
  SortOrder,
} from "@/app/product/types";
import ProductModel, { IProduct } from "@/models/Product";
import dbConnect from "./dbConnect";

export const getProducts = async (searchParams: SearchParams) => {
  await dbConnect();

  const {
    category,
    productType,
    brand,
    maxPrice,
    minPrice,
    sortBy,
    sortOrder,
    page = 1,
    limit = 12,
  } = searchParams;

  const filter: any = {};
  if (category) filter.category = category;
  if (productType) filter.productType = productType;
  if (brand) filter.brand = brand;
  if (minPrice && maxPrice) {
    filter.price = { $gte: minPrice, $lte: maxPrice };
  } else if (minPrice) {
    filter.price = { $gte: minPrice };
  } else if (maxPrice) {
    filter.price = { $lte: maxPrice };
  }

  let sort: any = { dateAdded: -1 };
  if (sortBy === SortBy.price) {
    sort = { price: sortOrder === SortOrder.asc ? 1 : -1 };
  } else if (sortBy === SortBy.dateAdded) {
    sort = { dateAdded: sortOrder === SortOrder.asc ? 1 : -1 };
  } else if (sortBy === SortBy.views) {
    sort = { views: sortOrder === SortOrder.asc ? 1 : -1 };
  }

  const skip = (page - 1) * limit;

  const products = await ProductModel.find(filter)
    .sort(sort)
    .skip(skip)
    .limit(limit)
    .select("_id name price imageSrc")
    .exec();

  return products.map((product) => ({
    _id: product._id.toString(),
    name: product.name,
    price: product.price,
    imageSrc: product.imageSrc,
  })) as ProductListing[];
};

export async function getPopularProducts(): Promise<
  ProductListing[] | undefined
> {
  await dbConnect();
  try {
    const newProducts = await ProductModel.find({}, "_id name price imageSrc ")
      .sort({ views: 1 })
      .limit(4)
      .lean();

    const formattedProducts = newProducts.map((product: IProduct) => ({
      _id: product._id.toString(),
      name: product.name,
      price: product.price,
      imageSrc: product.imageSrc,
    })) as ProductListing[];

    return formattedProducts;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export async function getNewProducts(): Promise<ProductListing[] | undefined> {
  await dbConnect();
  try {
    const newProducts = await ProductModel.find(
      {},
      "_id name price imageSrc isPhotoBig"
    )
      .sort({ dateAdded: -1 })
      .limit(4)
      .lean();

    const formattedProducts = newProducts.map((product: IProduct) => ({
      _id: product._id.toString(),
      name: product.name,
      price: product.price,
      imageSrc: product.imageSrc,
    })) as ProductListing[];

    return formattedProducts;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
