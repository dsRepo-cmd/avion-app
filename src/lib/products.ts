import {
  Product,
  ProductCategory,
  ProductListing,
  SearchParams,
  SortBy,
  SortOrder,
} from "@/app/product/types";
import ProductModel, { IProduct } from "@/models/Product";
import dbConnect from "./dbConnect";

const transformProduct = (productModel: IProduct): Product => ({
  id_: productModel._id.toString(),
  name: productModel.name,
  price: productModel.price,
  imageSrc: productModel.imageSrc,
  description: productModel.description,
  designer: productModel.designer,
  productType: productModel.productType,
  category: productModel.category,
  height: productModel.height,
  width: productModel.width,
  depth: productModel.depth,
  brand: productModel.brand,
  views: productModel.views,
  dateAdded: productModel.dateAdded,
});

const transformProductListing = (products: IProduct[]): ProductListing[] => {
  return products.map((product) => ({
    _id: product._id.toString(),
    name: product.name,
    price: product.price,
    imageSrc: product.imageSrc,
    description: product.description,
  }));
};

export const getProducts = async (searchParams: SearchParams) => {
  await dbConnect();

  const {
    category,
    productType,
    brand,
    sortBy,
    sortOrder,
    page = 1,
    limit = 12,
    designer,
    priceRange,
    query,
  } = searchParams;

  // Filtration ==================================================

  try {
    const filter: any = {};
    if (category && category !== ProductCategory.AllProducts) {
      filter.category = category;
    }
    if (productType) filter.productType = { $in: productType.split(",") };
    if (designer) filter.designer = { $in: designer.split(",") };

    if (query) {
      filter.$or = [
        { name: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
        { designer: { $regex: query, $options: "i" } },
        { brand: { $regex: query, $options: "i" } },
      ];
    }

    if (priceRange) {
      const ranges = priceRange.split(",");
      const priceFilters = ranges.map((range) => {
        if (range === "250+") {
          return { price: { $gte: 250 } };
        }

        const [min, max] = range.split("-").map((v) => parseFloat(v));

        if (!isNaN(min) && !isNaN(max)) {
          return { price: { $gte: min, $lte: max } };
        } else if (!isNaN(min)) {
          return { price: { $gte: min } };
        } else if (!isNaN(max)) {
          return { price: { $lte: max } };
        }
        return {};
      });

      if (priceFilters.length > 0) {
        filter.$or = priceFilters;
      }
    }

    if (brand) filter.brand = brand;

    // Sorting ===================================================

    let sort: any = { dateAdded: -1 };
    if (sortBy === SortBy.price) {
      sort = { price: sortOrder === SortOrder.asc ? 1 : -1 };
    } else if (sortBy === SortBy.dateAdded) {
      sort = { dateAdded: sortOrder === SortOrder.asc ? 1 : -1 };
    } else if (sortBy === SortBy.views) {
      sort = { views: sortOrder === SortOrder.asc ? 1 : -1 };
    }

    //  Pagination ===================================================

    const skip = (Number(page) - 1) * Number(limit);

    //  ===================================================
    const products = await ProductModel.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(Number(limit))
      .select("_id name price imageSrc")
      .exec();

    return transformProductListing(products);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export async function getPopularProducts(): Promise<
  ProductListing[] | undefined
> {
  await dbConnect();
  try {
    const newProducts = await ProductModel.find({}, "_id name price imageSrc ")
      .sort({ views: -1 })
      .limit(4)
      .lean();

    return transformProductListing(newProducts);
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export async function getNewProducts(): Promise<ProductListing[] | undefined> {
  await dbConnect();
  try {
    const newProducts = await ProductModel.find({}, "_id name price imageSrc ")
      .sort({ dateAdded: -1 })
      .limit(4)
      .lean();

    return transformProductListing(newProducts);
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export async function getProductsByID(
  id: string
): Promise<Product | undefined | null> {
  await dbConnect();
  try {
    const productModel = await ProductModel.findById(id);

    if (!productModel) {
      return null;
    }

    const product = transformProduct(productModel);

    return product;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
