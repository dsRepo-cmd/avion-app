import Listings from "@/components/shared/Listings/Listings";
import { SortBy } from "@/lib/enums";
import { getPopularProducts } from "@/lib/products";

async function PopularProductListings() {
  const newProducts = await getPopularProducts();

  if (!newProducts || newProducts.length === 0) return null;

  return (
    <Listings
      title="Popular products"
      href={`/product?sortBy=${SortBy.dateAdded}`}
      products={newProducts}
    />
  );
}

export default PopularProductListings;
