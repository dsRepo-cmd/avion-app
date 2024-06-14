import { SearchParams } from "./types";
import Listings from "@/components/Listings/Listings";
import ProductTitle from "@/containers/ProductTitle/ProductTitle";
import { getProducts } from "@/lib/products";

interface Props {
  searchParams: SearchParams;
}

async function Products({ searchParams }: Props) {
  const { page = 1, limit = 12, ...otherParams } = searchParams;

  const products = await getProducts({ page, limit, ...otherParams });

  if (!products) null;

  return (
    <main className="flex  flex-col items-center justify-between  max-w-[1440px] m-auto">
      <ProductTitle category={searchParams.category} />
      <Listings
        products={products}
        currentPage={page}
        limit={limit}
        searchParams={searchParams}
      />
    </main>
  );
}

export default Products;
