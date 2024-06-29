"use client";
import Icon from "@/components/Icon/Icon";
import CloseIcon from "@/assets/x.svg";
import DeliveryIcon from "@/assets/delivery.svg";
import Button from "@/components/Button/Button";
import Typography from "@/components/Typography/Typography";
import { useEffect, useState } from "react";

function Banner() {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const isBannerClosed = localStorage.getItem("isBannerClosed");
    if (!isBannerClosed) {
      setIsBannerVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsBannerVisible(false);
    localStorage.setItem("isBannerClosed", "true");
  };

  if (!isBannerVisible) return null;

  return (
    <div className=" flex justify-between bg-darkPrimary items-center w-full text-white p-2 z-50">
      <div className=" flex grow gap-6 self-center justify-center">
        <Icon
          className=" min-w-[20px] min-h-[20px]"
          width={20}
          height={20}
          Svg={DeliveryIcon}
        />
        <Typography color="white" fontFamily="primary" size="14px" tag="span">
          Free delivery on all orders over £50 with code easter checkout
        </Typography>
      </div>
      <div className=" flex justify-end">
        <Button onClick={handleClose} variant="clear">
          <Icon width={20} height={20} Svg={CloseIcon} />
        </Button>
      </div>
    </div>
  );
}

export default Banner;
