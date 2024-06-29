import Image from "next/image";
import AppLink from "@/components/AppLink/AppLink";
import Container from "@/components/Container/Container";
import Typography from "@/components/Typography/Typography";
import { info } from "./data";

function Info() {
  return (
    <Container className=" bg-lightGrey p-0 lg:p-0">
      <div className=" flex w-full lg:flex-col ">
        <div className=" w-full">
          <Image
            src={info.image.src}
            alt={info.image.alt}
            width={720}
            height={603}
            className=" object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between p-20 w-full gap-10 lg:px-6 lg:py-9">
          <div className=" flex flex-col gap-6">
            <Typography size="24px" fontFamily="secondary" tag="h1">
              {info.title}
            </Typography>
            {info.texts.map((text, index) => (
              <Typography
                className="text-[#505977]"
                key={index}
                size="16px"
                fontFamily="primary"
                tag="p"
              >
                {text}
              </Typography>
            ))}
          </div>
          <AppLink
            className=" self-start md:w-full"
            bgColor="white"
            href={info.link.href}
          >
            {info.link.name}
          </AppLink>
        </div>
      </div>
    </Container>
  );
}

export default Info;
