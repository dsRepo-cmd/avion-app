import Container from "@/components/shared/Container/Container";
import Page from "@/components/shared/Page/Page";
import SortPanel from "./sortPanel";
import Title from "./title";
import Listing from "./listing";
import type { SearchParams } from "@/types/product";

interface Props {
  searchParams: SearchParams;
}

function Products({ searchParams }: Props) {
  return (
    <Page>
      <Title category={searchParams.category} />
      <SortPanel searchParams={searchParams} />
      <Container className="py-10">
        <Listing searchParams={searchParams} />
      </Container>
    </Page>
  );
}

export default Products;
