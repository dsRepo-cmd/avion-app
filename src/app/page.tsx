import Features from "@/containers/Features/Features";
import HomeHero from "@/containers/HomeHero/HomeHero";
import HomeInfo from "@/containers/HomeInfo/HomeInfo";
import JoinUs from "@/containers/JoinUs/JoinUs";
import NewProductListings from "@/containers/NewProductListings/NewProductListings";
import PopularProductListings from "@/containers/PopularProductListings/PopularProductListings";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between  max-w-[1440px] m-auto">
      <HomeHero />
      <Features />
      <NewProductListings />
      <PopularProductListings />
      <JoinUs />
      <HomeInfo />
    </main>
  );
}
