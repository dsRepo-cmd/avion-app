import HomeFeatures from "@/containers/HomeFeatures/HomeFeatures";
import HomeHero from "@/containers/HomeHero/HomeHero";
import HomeListings from "@/containers/HomeListings/HomeListings";
import { homeListingsNew, homeListingsPopular } from "@/data/home";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between  max-w-[1440px] m-auto">
      <HomeHero />
      <HomeFeatures />
      <HomeListings data={homeListingsNew} />
      <HomeListings data={homeListingsPopular} />
    </main>
  );
}
