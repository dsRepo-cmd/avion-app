import { SortBy } from "@/app/product/types";
import Listings from "@/components/Listings/Listings";
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
