import Features from "@/components/Features/Features";
import HomeHero from "@/containers/HomeHero/HomeHero";
import HomeInfo from "@/containers/HomeInfo/HomeInfo";
import JoinUs from "@/components/JoinUs/JoinUs";
import NewProductListings from "@/containers/NewProductListings/NewProductListings";
import PopularProductListings from "@/containers/PopularProductListings/PopularProductListings";
import Page from "@/components/Page/Page";

export default function Home() {
  return (
    <Page>
      <HomeHero />
      <Features />
      <NewProductListings />
      <PopularProductListings />
      <JoinUs />
      <HomeInfo />
    </Page>
  );
}
