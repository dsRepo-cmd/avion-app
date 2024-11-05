import dynamic from "next/dynamic";
import Container from "@/components/shared/Container/Container";
import Page from "@/components/shared/Page/Page";
import SortPanel from "./sortPanel";
import Title from "./title";
import type { SearchParams } from "@/types/product";
import ListingSkeleton from "./listing-skeleton";

const Listing = dynamic(() => import("./listing"), {
  ssr: false,
  loading: () => <ListingSkeleton />,
});

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
