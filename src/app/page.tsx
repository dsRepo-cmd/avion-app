import dynamic from "next/dynamic";
import Features from "@/components/features/Features/Features";
import JoinUs from "@/components/features/JoinUs/JoinUs";
import Page from "@/components/shared/Page/Page";
import ListingsSkeleton from "@/components/shared/ListingsSkeleton/ListingsSkeleton";
import Hero from "./hero";
import Info from "./info";

const NewProductListings = dynamic(
  () => import("@/components/features/NewProductListings/NewProductListings"),
  {
    ssr: false,
    loading: () => <ListingsSkeleton />,
  }
);

const PopularProductListings = dynamic(
  () =>
    import(
      "@/components/features/PopularProductListings/PopularProductListings"
    ),
  {
    ssr: false,
    loading: () => <ListingsSkeleton />,
  }
);

export default function Home() {
  return (
    <Page>
      <Hero />
      <Features />
      <NewProductListings />
      <PopularProductListings />
      <JoinUs />
      <Info />
    </Page>
  );
}
