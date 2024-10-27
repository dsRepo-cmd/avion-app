import Features from "@/components/features/Features/Features";
import JoinUs from "@/components/features/JoinUs/JoinUs";
import SimularProductListings from "@/components/features/SimularProductListings/SimularProductListings";
import Page from "@/components/shared/Page/Page";
import Menu from "./menu";

interface Props {
  params: Promise<{ id: string }>;
}

async function Products(props: Props) {
  const params = await props.params;
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
