import Features from "@/features/Features/Features";
import JoinUs from "@/features/JoinUs/JoinUs";
import NewProductListings from "@/features/NewProductListings/NewProductListings";
import PopularProductListings from "@/features/PopularProductListings/PopularProductListings";
import Page from "@/components/Page/Page";
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
