import { SearchParams } from "./types";
import Listings from "@/components/Listings/Listings";
import ProductSortPanel from "@/containers/ProductSortPanel/ProductSortPanel";
import ProductTitle from "@/containers/ProductTitle/ProductTitle";
import { getProducts } from "@/lib/products";

interface Props {
  searchParams: SearchParams;
}

async function Products({ searchParams }: Props) {
  const {
    page = "1",
    limit = "12",
    productType,
    priceRange,
    designer,
  } = searchParams;

  const selectedTypes = productType ? productType.split(",") : [];
  const selectedPriceRanges = priceRange ? priceRange.split(",") : [];
  const selectedDesigners = designer ? designer.split(",") : [];

  const products = await getProducts({ ...searchParams, page, limit });

  if (!products) null;

  return (
    <main className="flex  flex-col items-center justify-between  max-w-[1440px] m-auto">
      <ProductTitle category={searchParams.category} />

      <div className=" flex gap-10">
        <div className=" flex p-10 justify-between">
          <ProductSortPanel
            selectedTypes={selectedTypes}
            searchParams={searchParams}
            selectedPriceRanges={selectedPriceRanges}
            selectedDesigners={selectedDesigners}
          />
        </div>
        <div className=" w-full">
          <Listings
            products={products}
            currentPage={page}
            limit={limit}
            isPegination
            searchParams={searchParams}
          />
        </div>
      </div>
    </main>
  );
}

export default Products;
