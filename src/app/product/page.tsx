import Listing from "@/components/Listing/Listing";
import { SearchParams } from "./types";
import ProductSortPanel from "@/containers/ProductSortPanel/ProductSortPanel";
import ProductTitle from "@/containers/ProductTitle/ProductTitle";
import { getProducts } from "@/lib/products";
import Container from "@/components/Container/Container";
import Typography from "@/components/Typography/Typography";

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

      <Container>
        <div className=" grid grid-cols-4 justify-start lg:flex lg:flex-col gap-10">
          <ProductSortPanel
            selectedTypes={selectedTypes}
            searchParams={searchParams}
            selectedPriceRanges={selectedPriceRanges}
            selectedDesigners={selectedDesigners}
          />

          <div className=" col-span-3 w-full">
            {products.length === 0 ? (
              <div className=" flex justify-center w-full">
                <Typography tag="h2" size="24px" fontFamily="secondary">
                  Not Found
                </Typography>
              </div>
            ) : (
              <Listing
                products={products}
                currentPage={page}
                limit={limit}
                searchParams={searchParams}
              />
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}

export default Products;
