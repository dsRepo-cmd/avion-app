import Container from "@/components/shared/Container/Container";
import CheckmarkOutlineIcon from "@/components/icons/CheckmarkOutlineIcon";
import DeliveryIcon from "@/components/icons/DeliveryIcon";
import PurchaseIcon from "@/components/icons/PurchaseIcon";
import SproutIcon from "@/components/icons/SproutIcon";
import Typography from "@/components/shared/Typography/Typography";

export const homeFeatures = {
  title: "What makes our brand different",
  features: [
    {
      id: "1",
      title: "Next day as standard",
      text: "Order before 3pm and get your order the next day as standard",
      icon: <DeliveryIcon size={24} />,
    },
    {
      id: "2",
      title: "Made by true artisans",
      text: "Handmade crafted goods made with real passion and craftmanship",
      icon: <CheckmarkOutlineIcon size={24} />,
    },
    {
      id: "3",
      title: "Unbeatable prices",
      text: "For our materials and quality you won’t find better prices anywhere",
      icon: <PurchaseIcon size={24} />,
    },
    {
      id: "4",
      title: "Recycled packaging",
      text: "We use 100% recycled packaging to ensure our footprint is manageable",
      icon: <SproutIcon size={24} />,
    },
  ],
};

function Features() {
  return (
    <Container>
      <div className=" flex  self-start flex-col gap-12 ">
        <div className="flex  justify-center md:justify-start w-full">
          <Typography fontFamily="secondary" size="24px" tag="h3">
            {homeFeatures.title}
          </Typography>
        </div>

        <ul className=" grid grid-cols-4 items-center justify-between gap-4 xl:grid-cols-2 md:grid-cols-1  ">
          {homeFeatures.features.map((feature) => (
            <li
              className=" flex grow flex-col gap-2 bg-lightGrey p-12 w-full h-full  md:px-6 md:py-9"
              key={feature.id}
            >
              {feature.icon}
              <Typography
                className=" mt-2"
                fontFamily="secondary"
                size="20px"
                tag="h4"
              >
                {feature.title}
              </Typography>
              <Typography fontFamily="primary" size="16px" tag="p">
                {feature.text}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default Features;
