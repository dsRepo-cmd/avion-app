import AppLink from "@/components/AppLink/AppLink";
import Container from "@/components/Container/Container";
import Typography from "@/components/Typography/Typography";
import { homeHero } from "@/data/home";
import Image from "next/image";
import React from "react";

function HomeHero() {
  return (
    <Container className=" lg:p-0">
      <div className=" relative flex w-full ">
        <div className=" flex flex-col justify-between w-2/3 bg-darkPrimary  p-[60px] lg:w-full  lg:pt-10 lg:px-4 pb-28">
          <div className=" flex flex-col gap-10 items-start ">
            <Typography
              tag="h2"
              size="32px"
              color="white"
              fontFamily="secondary"
              className=" max-w-[480px] lg:w-full lg:pb-20"
            >
              {homeHero.title}
            </Typography>

            <AppLink
              href={"/product"}
              variant="filled"
              bgColor="light"
              className=" lg:w-[calc(100%-48px)] lg:translate-x-[24px] lg:absolute z-40 lg:bottom-6 lg:left-0  "
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
        </div>

        <Image
          src={homeHero.imgSrc}
          alt="hero-image"
          width={520}
          height={584}
          className=" sm:hidden lg:hidden "
          priority
        />
      </div>
    </Container>
  );
}

export default HomeHero;
