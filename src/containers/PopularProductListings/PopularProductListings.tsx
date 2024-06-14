import { ProductListing } from "@/app/product/types";
import HomeListings from "@/components/Listings/Listings";
import dbConnect from "@/lib/dbConnect";
import ProductModel, { IProduct } from "@/models/Product";

export async function getPopularProducts(): Promise<
  ProductListing[] | undefined
> {
  await dbConnect();
  try {
    const newProducts = await ProductModel.find(
      {},
      "_id name price imageSrc isPhotoBig"
    )
      .sort({ views: 1 })
      .limit(5)
      .lean();

    const formattedProducts = newProducts.map((product: IProduct) => ({
      _id: product._id.toString(),
      name: product.name,
      price: product.price,
      imageSrc: product.imageSrc,
      isPhotoBig: product.isPhotoBig,
    })) as ProductListing[];

    let resultProducts: ProductListing[] = [];

    // Find indices of products with isPhotoBig=true
    const bigPhotoIndices = formattedProducts
      .map((product, index) => (product.isPhotoBig ? index : -1))
      .filter((index) => index !== -1);

    if (bigPhotoIndices.length > 0) {
      if (bigPhotoIndices[0] <= 2) {
        resultProducts = formattedProducts.slice(0, 3);
      } else if (bigPhotoIndices[0] === 3) {
        // Case 2: Fourth product is big photo
        resultProducts = [
          formattedProducts[0],
          formattedProducts[1],
          formattedProducts[2],
          formattedProducts[4],
        ];
      } else if (bigPhotoIndices.includes(0) && bigPhotoIndices.includes(1)) {
        resultProducts = formattedProducts.slice(0, 2);
      } else {
        resultProducts = formattedProducts.slice(0, 3);
      }
    } else {
      resultProducts = formattedProducts.slice(0, 4);
    }

    return resultProducts;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function PopularProductListings() {
  const newProducts = await getPopularProducts();

  if (!newProducts || newProducts.length === 0) return null;

  return <HomeListings title="Popular products" products={newProducts} />;
}

export default PopularProductListings;
