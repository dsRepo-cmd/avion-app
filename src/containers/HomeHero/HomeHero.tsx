import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Typography from "@/components/Typography/Typography";
import { homeHero } from "@/data/home";
import Image from "next/image";
import React from "react";

function HomeHero() {
  return (
    <Container>
      <div className=" flex w-full ">
        <div className=" flex flex-col justify-between w-2/3 bg-darkPrimary  p-[60px]">
          <div className=" flex flex-col gap-10 items-start ">
            <Typography
              tag="h2"
              size="32px"
              color="white"
              fontFamily="secondary"
              className=" max-w-[480px]"
            >
              {homeHero.title}
            </Typography>

            <Button variant="filled" bgColor="light">
              {homeHero.button}
            </Button>
          </div>

          <Typography
            tag="p"
            size="18px"
            color="white"
            fontFamily="primary"
            className=" "
          >
            {homeHero.text}
          </Typography>
        </div>

        <div className=" w-1/3">
          <Image
            src={homeHero.imgSrc}
            alt="hero-image"
            width={520}
            height={584}
          />
        </div>
      </div>
    </Container>
  );
}

export default HomeHero;
