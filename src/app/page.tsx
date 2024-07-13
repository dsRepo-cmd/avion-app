import Features from "@/components/features/Features/Features";
import JoinUs from "@/components/features/JoinUs/JoinUs";
import NewProductListings from "@/components/features/NewProductListings/NewProductListings";
import PopularProductListings from "@/components/features/PopularProductListings/PopularProductListings";
import Page from "@/components/shared/Page/Page";
import Hero from "./hero";
import Info from "./info";

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
