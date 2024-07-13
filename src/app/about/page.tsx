import Features from "@/components/features/Features/Features";
import JoinUs from "@/components/features/JoinUs/JoinUs";
import Page from "@/components/shared/Page/Page";
import Heading from "./heading";
import Hero from "./hero";
import Info from "./info";

function About() {
  return (
    <Page>
      <Heading />
      <Hero />
      <Info />
      <Features />
      <JoinUs />
    </Page>
  );
}

export default About;
