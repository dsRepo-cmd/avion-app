import Listing from "@/components/Listing/Listing";
import { SearchParams } from "./types";
import { getProducts } from "@/lib/products";
import Container from "@/components/Container/Container";
import Typography from "@/components/Typography/Typography";
import Page from "@/components/Page/Page";
import SortPanel from "./sortPanel";
import Title from "./title";

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
    <Page>
      <Title category={searchParams.category} />

      <Container>
        <div className=" grid grid-cols-4 justify-start lg:flex lg:flex-col gap-10">
          <SortPanel
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
    </Page>
  );
}

export default Products;
