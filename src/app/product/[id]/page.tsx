import Features from "@/components/Features/Features";
import JoinUs from "@/components/JoinUs/JoinUs";
import Page from "@/components/Page/Page";
import SimularProductListings from "@/components/SimularProductListings/SimularProductListings";
import Menu from "./menu";

interface Props {
  params: { id: string };
}

function Products({ params }: Props) {
  return (
    <Page>
      <Menu id={params.id} />
      <SimularProductListings />
      <Features />
      <JoinUs />
    </Page>
  );
}

export default Products;
