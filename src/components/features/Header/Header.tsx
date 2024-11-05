import CategoryLinks from "@/components/shared/CategoryLinks/CategoryLinks";
import Divider from "../../shared/Divider/Divider";
import Navbar from "../Navbar/Navbar";
import { getCart } from "@/lib/cart";
import { headers } from "next/headers";
import { isMobile } from "@/lib/isMobile/isMobile";

async function Header() {
  const userAgent = headers().get("user-agent") || "";
  const mobileCheck = isMobile(userAgent);

  const cart = await getCart();
  const cartItemsCount = cart?.products.length;
  return (
    <header id="header" className=" w-full px-4 relative  ">
      <Navbar isMobile={mobileCheck} cartItemsCount={cartItemsCount} />
      <Divider />
      <div className=" flex justify-center items-center py-5 md:hidden">
        <CategoryLinks />
      </div>
    </header>
  );
}

export default Header;
