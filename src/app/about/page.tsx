import Page from "@/components/Page/Page";
import Heading from "./heading";
import Hero from "./hero";
import Info from "./info";
import Features from "@/features/Features/Features";
import JoinUs from "@/features/JoinUs/JoinUs";

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
