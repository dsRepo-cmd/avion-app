import Image from "next/image";
import Button from "@/components/shared/Button/Button";
import Typography from "@/components/shared/Typography/Typography";

const info = {
  title: "From a studio in London to a global brand with over 400 outlets",
  texts: [
    "When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.",
    "Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.",
  ],

  button: "Get in touch",
};

function Info() {
  return (
    <div className=" w-full flex justify-between lg:flex-col">
      <div className=" flex flex-col gap-6 justify-between p-20 lg:px-6 lg:py-12 lg:gap-6">
        <div className="flex flex-col gap-6">
          <Typography tag="h3" size="24px" fontFamily="secondary">
            {info.title}
          </Typography>

          {info.texts.map((text, index) => (
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
        <Button bgColor="gray" className=" self-start lg:w-full">
          {info.button}
        </Button>
      </div>

      <Image
        src={"/home-place.png"}
        alt="home-place"
        width={720}
        height={603}
        className=" object-contain w-full"
      />
    </div>
  );
}

export default Info;
