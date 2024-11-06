import dynamic from "next/dynamic";
import Features from "@/components/features/Features/Features";
import JoinUs from "@/components/features/JoinUs/JoinUs";
import Page from "@/components/shared/Page/Page";
import ListingsSkeleton from "@/components/shared/ListingsSkeleton/ListingsSkeleton";
import ProductSkeleton from "./product-skeleton";

const SimularProductListings = dynamic(
  () =>
    import(
      "@/components/features/SimularProductListings/SimularProductListings"
    ),
  {
    ssr: false,
    loading: () => <ListingsSkeleton />,
  }
);

const Menu = dynamic(() => import("./menu"), {
  ssr: false,
  loading: () => <ProductSkeleton />,
});

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
