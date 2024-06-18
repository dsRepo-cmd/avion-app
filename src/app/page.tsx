import Features from "@/components/Features/Features";
import HomeHero from "@/containers/HomeHero/HomeHero";
import HomeInfo from "@/containers/HomeInfo/HomeInfo";
import JoinUs from "@/components/JoinUs/JoinUs";
import NewProductListings from "@/containers/NewProductListings/NewProductListings";
import PopularProductListings from "@/containers/PopularProductListings/PopularProductListings";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between  max-w-[1440px]">
      <HomeHero />
      <Features />
      <NewProductListings />
      <PopularProductListings />
      <JoinUs />
      <HomeInfo />
    </main>
  );
}
