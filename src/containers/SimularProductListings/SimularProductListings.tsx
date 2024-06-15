import { SortBy } from "@/app/product/types";
import Listings from "@/components/Listings/Listings";
import { getPopularProducts } from "@/lib/products";

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
