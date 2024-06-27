import AppLink from "@/components/AppLink/AppLink";
import Container from "@/components/Container/Container";
import Typography from "@/components/Typography/Typography";
import { homeHero } from "@/data/home";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <Container className=" lg:p-0">
      <div className=" relative flex w-full ">
        <div className=" flex flex-col gap-10 justify-between w-[60%] bg-darkPrimary  p-[60px] lg:w-full  lg:pt-10 lg:px-4 ">
          <div className=" flex flex-col gap-10 items-start ">
            <Typography
              tag="h2"
              size="32px"
              color="white"
              fontFamily="secondary"
              className=" max-w-[480px] lg:w-full"
            >
              {homeHero.title}
            </Typography>

            <AppLink
              href={"/product"}
              variant="filled"
              bgColor="light"
              className=" lg:hidden "
            >
              {homeHero.button}
            </AppLink>
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

          <AppLink
            href={"/product"}
            variant="filled"
            bgColor="light"
            className=" hidden lg:inline-block"
          >
            {homeHero.button}
          </AppLink>
        </div>

        <div className=" w-[40%] lg:hidden">
          <Image
            src={homeHero.imgSrc}
            alt="hero-image"
            width={520}
            height={584}
            className="object-cover w-full h-full    "
            priority
          />
        </div>
      </div>
    </Container>
  );
}

export default Hero;
