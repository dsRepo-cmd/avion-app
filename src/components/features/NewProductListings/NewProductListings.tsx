import Listings from "@/components/shared/Listings/Listings";
import { SortBy } from "@/lib/enums";
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
