"use client";
import useIsMobile from "@/lib/useIsMobile/useIsMobile";
import BurgerMenu from "./BurgerMenu";

interface Props {
  isMobile: boolean;
}
function BurgerMenuWrapper({ isMobile }: Props) {
  const isMobileClient = useIsMobile();

  const isShowMobile = isMobile || isMobileClient;

  return <>{isShowMobile && <BurgerMenu />}</>;
}

export default BurgerMenuWrapper;
