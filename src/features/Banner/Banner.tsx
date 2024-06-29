"use client";
import Icon from "@/components/Icon/Icon";
import CloseIcon from "@/assets/x.svg";
import DeliveryIcon from "@/assets/delivery.svg";
import Button from "@/components/Button/Button";
import Typography from "@/components/Typography/Typography";
import { useEffect, useState } from "react";

const banner = {
  icon: DeliveryIcon,
  text: " Free delivery on all orders over £50 with code easter checkout",
};

function Banner() {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const isBannerClosed = sessionStorage.getItem("isBannerClosed");
    if (!isBannerClosed) {
      setIsBannerVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsBannerVisible(false);
    sessionStorage.setItem("isBannerClosed", "true");
  };

  if (!isBannerVisible) return null;

  return (
    <div className=" flex justify-between bg-darkPrimary items-center w-full text-white p-2 z-50">
      <div className=" flex grow gap-6 self-center justify-center">
        <Icon
          className=" min-w-[20px] min-h-[20px]"
          width={20}
          height={20}
          Svg={banner.icon}
        />
        <Typography color="white" fontFamily="primary" size="14px" tag="span">
          {banner.text}
        </Typography>
      </div>
      <div className=" flex justify-end">
        <Button title="close" onClick={handleClose} variant="clear">
          <Icon width={20} height={20} Svg={CloseIcon} />
        </Button>
      </div>
    </div>
  );
}

export default Banner;
