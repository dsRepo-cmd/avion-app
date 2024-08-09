import { useState, useEffect } from "react";

const MOBILE_MAX_WIDTH = 836;

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileWidth = window.innerWidth <= MOBILE_MAX_WIDTH;

      const isMobileUserAgent = /Mobi|Android/i.test(navigator.userAgent);

      setIsMobile(isMobileWidth || isMobileUserAgent);
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
