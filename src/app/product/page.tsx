import { headers } from "next/headers";
import Container from "@/components/shared/Container/Container";
import Page from "@/components/shared/Page/Page";
import { isMobile } from "@/lib/isMobile/isMobile";
import SortPanel from "./sortPanel";
import Title from "./title";
import Listing from "./listing";
import type { SearchParams } from "@/types/product";

interface Props {
  searchParams: SearchParams;
}

function Products({ searchParams }: Props) {
  const userAgent = headers().get("user-agent") || "";
  const mobileCheck = isMobile(userAgent);

  return (
    <Page>
      <Title category={searchParams.category} />
      <SortPanel isMobile={mobileCheck} searchParams={searchParams} />
      <Container className="py-10">
        <Listing searchParams={searchParams} />
      </Container>
    </Page>
  );
}

export default Products;
