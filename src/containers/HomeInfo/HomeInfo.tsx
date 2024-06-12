import Button from "@/components/Button/Button";
import Typography from "@/components/Typography/Typography";
import { homeInfo } from "@/data/home";
import Image from "next/image";

function HomeInfo() {
  return (
    <div className=" w-full flex justify-between">
      <div className=" flex flex-col justify-between p-20">
        <div className="flex flex-col gap-6">
          <Typography tag="h3" size="24px" fontFamily="secondary">
            {homeInfo.title}
          </Typography>

          {homeInfo.texts.map((text, index) => (
            <Typography
              tag="p"
              size="16px"
              fontFamily="primary"
              color="light"
              key={index}
            >
              {text}
            </Typography>
          ))}
        </div>
        <Button bgColor="gray" className=" self-start">
          {homeInfo.button}
        </Button>
      </div>

      <Image
        src={"/home-place.png"}
        alt="home-place"
        width={720}
        height={603}
        className=" object-contain"
      />
    </div>
  );
}

export default HomeInfo;
