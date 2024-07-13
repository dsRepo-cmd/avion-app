import Image from "next/image";
import AppLink from "@/components/shared/AppLink/AppLink";
import Container from "@/components/shared/Container/Container";
import Typography from "@/components/shared/Typography/Typography";
import { hero } from "./data";

function Hero() {
  return (
    <Container>
      <div className=" flex gap-4 h-full lg:flex-col ">
        <div className=" flex flex-col justify-between w-full p-16 bg-darkPrimary gap-8 lg:p-8 ">
          <div className=" flex flex-col gap-3">
            <Typography
              size="32px"
              fontFamily="secondary"
              color="white"
              tag="h1"
            >
              {hero.title}
            </Typography>

            <Typography size="18px" fontFamily="primary" color="white" tag="p">
              {hero.text}
            </Typography>
          </div>

          <AppLink
            className=" self-start md:w-full"
            bgColor="light"
            href={hero.link.href}
          >
            {hero.link.name}
          </AppLink>
        </div>
        <div className=" w-full">
          <Image
            className=" object-cover w-full h-full"
            src={hero.image.src}
            alt={hero.image.alt}
            width={630}
            height={478}
          />
        </div>
      </div>
    </Container>
  );
}

export default Hero;
