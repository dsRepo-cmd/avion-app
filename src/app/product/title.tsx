import Image from "next/image";
import Typography from "@/components/shared/Typography/Typography";

interface Props {
  category?: string | undefined;
}

function Title({ category }: Props) {
  return (
    <div className=" relative">
      <Image
        className=" lg:h-[146px]"
        src={"/products-hero.png"}
        alt="products-hero"
        width={1440}
        height={209}
        priority
      />
      <Typography
        className=" absolute z-20  bottom-9 left-20"
        fontFamily="secondary"
        color="white"
        size="32px"
        tag="h1"
      >
        {category ? category : "All products"}
      </Typography>
    </div>
  );
}

export default Title;
