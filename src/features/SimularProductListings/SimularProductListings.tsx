import Listings from "@/components/Listings/Listings";
import { getPopularProducts } from "@/lib/products";
import { SortBy } from "@/types/product";

async function SimularProductListings() {
  const simularProducts = await getPopularProducts();

  if (!simularProducts || simularProducts.length === 0) return null;

  return (
    <Listings
      title="You might also love these"
      href={`/product?sortBy=${SortBy.dateAdded}`}
      products={simularProducts}
    />
  );
}

export default SimularProductListings;
