import Features from "@/components/Features/Features";
import JoinUs from "@/components/JoinUs/JoinUs";
import NewProductListings from "@/components/NewProductListings/NewProductListings";
import PopularProductListings from "@/components/PopularProductListings/PopularProductListings";
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
