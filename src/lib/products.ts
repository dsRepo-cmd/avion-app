import {
  ProductListing,
  SearchParams,
  SortBy,
  SortOrder,
} from "@/app/product/types";
import ProductModel from "@/models/Product";

export const getProducts = async (searchParams: SearchParams) => {
  const {
    category,
    productType,
    brand,
    maxPrice,
    minPrice,
    sortBy,
    sortOrder,
  } = searchParams;

  //   filter
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

  //   sort
  let sort: any = { dateAdded: -1 }; // Default sort by dateAdded

  if (sortBy === SortBy.price) {
    sort = { price: sortOrder === SortOrder.asc ? 1 : -1 };
  } else if (sortBy === SortBy.dateAdded) {
    sort = { dateAdded: sortOrder === SortOrder.asc ? 1 : -1 };
  }
  // get products from DB
  const products = await ProductModel.find(filter)
    .sort(sort)
    .select("_id name price imageSrc isPhotoBig")
    .exec();

  const formattedProducts = products.map(
    (product) =>
      ({
        _id: product._id.toString(),
        name: product.name,
        price: product.price,
        imageSrc: product.imageSrc,
        isPhotoBig: product.isPhotoBig,
      } as ProductListing)
  );
  return formattedProducts;
};
