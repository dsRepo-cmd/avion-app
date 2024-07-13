"use client";
import Button from "@/components/shared/Button/Button";
import Typography from "@/components/shared/Typography/Typography";
import { useEffect, useState } from "react";
import XIcon from "@/components/icons/XIcon";
import DeliveryIcon from "@/components/icons/DeliveryIcon";

const banner = {
  icon: <DeliveryIcon size={20} className=" min-w-[20px] min-h-[20px]" />,
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
        {banner.icon}
        <Typography color="white" fontFamily="primary" size="14px" tag="span">
          {banner.text}
        </Typography>
      </div>
      <div className=" flex justify-end">
        <Button title="close" onClick={handleClose} variant="clear">
          <XIcon size={20} />
        </Button>
      </div>
    </div>
  );
}

export default Banner;
