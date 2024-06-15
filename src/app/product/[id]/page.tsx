import Features from "@/containers/Features/Features";
import JoinUs from "@/containers/JoinUs/JoinUs";
import ProductMenu from "@/containers/ProductMenu/ProductMenu";
import SimularProductListings from "@/containers/SimularProductListings/SimularProductListings";

interface Props {
  params: { id: string };
}

function Products({ params }: Props) {
  return (
    <main className="flex  flex-col items-center justify-between  max-w-[1440px] m-auto">
      <ProductMenu id={params.id} />
      <SimularProductListings />
      <Features />
      <JoinUs />
    </main>
  );
}

export default Products;
