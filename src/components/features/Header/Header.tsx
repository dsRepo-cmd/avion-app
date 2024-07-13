import React from "react";
import Divider from "../../shared/Divider/Divider";
import Navbar from "../Navbar/Navbar";
import { getCart } from "@/lib/cart";
import CategoryLinks from "@/components/shared/CategoryLinks/CategoryLinks";
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
