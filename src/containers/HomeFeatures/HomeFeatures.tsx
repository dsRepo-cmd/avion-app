import Container from "@/components/Container/Container";
import Typography from "@/components/Typography/Typography";
import { homeFeatures } from "@/data/home";
import Image from "next/image";

function HomeFeatures() {
  return (
    <Container>
      <div className=" flex items-center justify-center flex-col gap-12">
        <Typography fontFamily="secondary" size="24px" tag="h3">
          {homeFeatures.title}
        </Typography>

        <ul className=" flex items-center justify-between gap-16">
          {homeFeatures.features.map((feature) => (
            <li className=" flex flex-col gap-2" key={feature.id}>
              <Image
                src={feature.iconSrc}
                alt="feature.iconSrc"
                width={24}
                height={24}
              />
              <Typography
                className=" mt-2"
                fontFamily="secondary"
                size="20px"
                tag="h4"
              >
                {feature.title}
              </Typography>
              <Typography fontFamily="primary" size="16px" tag="p">
                {feature.text}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default HomeFeatures;
