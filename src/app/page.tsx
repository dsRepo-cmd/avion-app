import HomeEmailSignUp from "@/containers/HomeEmailSignUp/HomeEmailSignUp";
import HomeFeatures from "@/containers/HomeFeatures/HomeFeatures";
import HomeHero from "@/containers/HomeHero/HomeHero";
import HomeInfo from "@/containers/HomeInfo/HomeInfo";
import NewProductListings from "@/containers/NewProductListings/NewProductListings";
import PopularProductListings from "@/containers/PopularProductListings/PopularProductListings";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between  max-w-[1440px] m-auto">
      <HomeHero />
      <HomeFeatures />
      <NewProductListings />
      <PopularProductListings />
      <HomeEmailSignUp />
      <HomeInfo />
    </main>
  );
}
