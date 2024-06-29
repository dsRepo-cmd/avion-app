import Container from "@/components/Container/Container";
import Icon from "@/components/Icon/Icon";
import Typography from "@/components/Typography/Typography";
import { homeFeatures } from "@/data/home";

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
              <Icon
                className=" text-darkPrimary"
                Svg={feature.icon}
                width={24}
                height={24}
              />
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
