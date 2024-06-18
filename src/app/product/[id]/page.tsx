import Features from "@/components/Features/Features";
import JoinUs from "@/components/JoinUs/JoinUs";
import Page from "@/components/Page/Page";
import ProductMenu from "@/containers/ProductMenu/ProductMenu";
import SimularProductListings from "@/containers/SimularProductListings/SimularProductListings";

interface Props {
  params: { id: string };
}

function Products({ params }: Props) {
  return (
    <Page>
      <ProductMenu id={params.id} />
      <SimularProductListings />
      <Features />
      <JoinUs />
    </Page>
  );
}

export default Products;
