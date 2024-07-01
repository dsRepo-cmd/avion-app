import React from "react";
import Divider from "../../components/Divider/Divider";
import Navbar from "../Navbar/Navbar";
import CategoryLinks from "@/components/CategoryLinks/CategoryLinks";
interface Props {
  isMobile?: boolean;
}
function Header({ isMobile }: Props) {
  return (
    <header id="header" className=" w-full px-4 relative  ">
      <Navbar isMobile={isMobile} />
      <Divider />
      <div className=" flex justify-center items-center py-5 md:hidden">
        <CategoryLinks />
      </div>
    </header>
  );
}

export default Header;
