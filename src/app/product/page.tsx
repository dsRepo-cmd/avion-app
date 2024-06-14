import Listings from "@/components/Listings/Listings";
import dbConnect from "@/lib/dbConnect";
import ProductModel, { IProduct } from "@/models/Product";
import { ProductListing } from "./types";

async function getProducts() {
  dbConnect();

  try {
    const products = await ProductModel.find().lean();
    const formattedProducts = products.map((product: IProduct) => ({
      _id: product._id.toString(),
      name: product.name,
      price: product.price,
      imageSrc: product.imageSrc,
      isPhotoBig: product.isPhotoBig,
    })) as ProductListing[];
    return formattedProducts;
  } catch (error) {
    console.log(error);
  }
}

async function Products() {
  const products = await getProducts();

  if (!products || products.length === 0) return null;

  return (
    <main className="flex  flex-col items-center justify-between  max-w-[1440px] m-auto">
      <Listings title="Products" products={products} />
    </main>
  );
}

export default Products;
