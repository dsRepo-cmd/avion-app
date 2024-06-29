import Features from "@/features/Features/Features";
import JoinUs from "@/features/JoinUs/JoinUs";
import SimularProductListings from "@/features/SimularProductListings/SimularProductListings";
import Page from "@/components/Page/Page";
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
