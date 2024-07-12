import React from "react";
import Divider from "../../components/Divider/Divider";
import Navbar from "../Navbar/Navbar";
import CategoryLinks from "@/components/CategoryLinks/CategoryLinks";
import { getCart } from "@/lib/actions";
interface Props {
  isMobile?: boolean;
}
async function Header({ isMobile }: Props) {
  const cart = await getCart();
  const cartItemsCount = cart?.products.length;
  return (
    <header id="header" className=" w-full px-4 relative  ">
      <Navbar isMobile={isMobile} cartItemsCount={cartItemsCount} />
      <Divider />
      <div className=" flex justify-center items-center py-5 md:hidden">
        <CategoryLinks />
      </div>
    </header>
  );
}

export default Header;
