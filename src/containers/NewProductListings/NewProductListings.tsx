import Listings from "@/components/Listings/Listings";
import { getNewProducts } from "@/lib/products";

async function NewProductListings() {
  const newProducts = await getNewProducts();

  if (!newProducts || newProducts.length === 0) return null;

  return <Listings title="New products" products={newProducts} />;
}

export default NewProductListings;
