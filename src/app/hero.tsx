import Image from "next/image";
import AppLink from "@/components/shared/AppLink/AppLink";
import Container from "@/components/shared/Container/Container";
import Typography from "@/components/shared/Typography/Typography";

const hero = {
  title: "The furniture brand for the future, with timeless designs",
  button: "View collection",
  text: "A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.",
  imgSrc: "/hero-image.png",
};

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
              {hero.title}
            </Typography>

            <AppLink
              href={"/product"}
              variant="filled"
              bgColor="light"
              className=" lg:hidden "
            >
              {hero.button}
            </AppLink>
          </div>

          <Typography
            tag="p"
            size="18px"
            color="white"
            fontFamily="primary"
            className=" "
          >
            {hero.text}
          </Typography>

          <AppLink
            href={"/product"}
            variant="filled"
            bgColor="light"
            className=" hidden lg:inline-block"
          >
            {hero.button}
          </AppLink>
        </div>

        <div className=" w-[40%] lg:hidden">
          <Image
            src={hero.imgSrc}
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
