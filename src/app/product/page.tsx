import { headers } from "next/headers";
import Listing from "@/components/Listing/Listing";
import Container from "@/components/Container/Container";
import Typography from "@/components/Typography/Typography";
import Page from "@/components/Page/Page";
import { getProducts } from "@/lib/products";
import { isMobile } from "@/lib/isMobile";
import SortPanel from "./sortPanel";
import Title from "./title";
import Spinner from "@/components/Spinner/Spinner";
import type { SearchParams } from "@/types/product";

interface Props {
  searchParams: SearchParams;
}

async function Products({ searchParams }: Props) {
  const userAgent = headers().get("user-agent") || "";
  const mobileCheck = isMobile(userAgent);

  const { page = "1", limit = "12" } = searchParams;

  const products = await getProducts({ ...searchParams, page, limit });

  if (!products) return <Spinner />;
  return (
    <Page>
      <Title category={searchParams.category} />

      <div className=" self-start w-full p-4">
        <SortPanel isMobile={mobileCheck} searchParams={searchParams} />
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
