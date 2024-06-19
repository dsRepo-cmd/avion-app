import { SortBy } from "@/app/product/types";
import Listings from "@/components/Listings/Listings";
import { getNewProducts } from "@/lib/products";

async function NewProductListings() {
  const newProducts = await getNewProducts();

  if (!newProducts || newProducts.length === 0) return null;

  return (
    <Listings
      title="New products"
      href={`/product?sortBy=${SortBy.views}`}
      products={newProducts}
    />
  );
}

export default NewProductListings;
