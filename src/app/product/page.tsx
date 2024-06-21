import Listing from "@/components/Listing/Listing";
import { SearchParams } from "./types";
import { getProducts } from "@/lib/products";
import Container from "@/components/Container/Container";
import Typography from "@/components/Typography/Typography";
import Page from "@/components/Page/Page";
import SortPanel from "./sortPanel";
import Title from "./title";
import { isMobileDevice } from "@/lib/isMobileDevice";

interface Props {
  searchParams: SearchParams;
}

async function Products({ searchParams }: Props) {
  const { page = "1", limit = "12" } = searchParams;
  const products = await getProducts({ ...searchParams, page, limit });
  if (!products) null;
  const mobile = await isMobileDevice();

  return (
    <Page>
      <Title category={searchParams.category} />

      <div className=" self-start w-full p-4">
        <SortPanel isMobile={mobile} searchParams={searchParams} />
      </div>

      <Container className="py-10">
        <div className=" w-full">
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
      </Container>
    </Page>
  );
}

export default Products;
