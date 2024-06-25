import AppLink from "@/components/AppLink/AppLink";
import Container from "@/components/Container/Container";
import Typography from "@/components/Typography/Typography";
import { hero } from "@/data/about";
import Image from "next/image";

import React from "react";

function Hero() {
  return (
    <Container>
      <div className=" flex gap-4 h-full ">
        <div className=" flex flex-col justify-between w-full p-16 bg-darkPrimary">
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
            src={"/home-place3.png"}
            alt="/home-place3.png"
            width={630}
            height={478}
          />
        </div>
      </div>
    </Container>
  );
}

export default Hero;
