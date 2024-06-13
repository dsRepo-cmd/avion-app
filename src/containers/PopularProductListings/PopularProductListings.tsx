import HomeListings from "@/components/Listings/Listings";
import { Product } from "@/data/home";
import dbConnect from "@/lib/dbConnect";
import ProductModel, { IProduct } from "@/models/Product";

export async function getNewProducts(): Promise<Product[] | undefined> {
  await dbConnect();
  try {
    const newProducts = await ProductModel.find()
      .sort({ views: 1 })
      .limit(4)
      .lean();

    const formattedProducts = newProducts.map((product: IProduct) => ({
      _id: product._id.toString(),
      name: product.name,
      price: product.price,
      imageSrc: product.imageSrc,
      isPhotoBig: product.isPhotoBig,
    })) as Product[];

    let countBigPhotos = formattedProducts.filter(
      (product) => product.isPhotoBig
    ).length;
    if (countBigPhotos > 1) {
      for (const product of formattedProducts) {
        if (product.isPhotoBig) {
          product.isPhotoBig = false;
          countBigPhotos--;
          if (countBigPhotos <= 1) break;
        }
      }
    }

    return formattedProducts;
  } catch (error) {
    console.log(error);
  }
}

async function PopularProductListings() {
  const newProducts = await getNewProducts();

  if (!newProducts || newProducts.length === 0) return null;

  return <HomeListings title="Popular products" products={newProducts} />;
}

export default PopularProductListings;
