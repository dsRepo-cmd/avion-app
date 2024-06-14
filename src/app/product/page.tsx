import { SearchParams } from "./types";
import Listings from "@/components/Listings/Listings";
import { getProducts } from "@/lib/products";

interface Props {
  searchParams: SearchParams;
}

async function Products({ searchParams }: Props) {
  const products = await getProducts(searchParams);

  if (!products) null;

  return (
    <main className="flex  flex-col items-center justify-between  max-w-[1440px] m-auto">
      <Listings title="" products={products} />
    </main>
  );
}

export default Products;
