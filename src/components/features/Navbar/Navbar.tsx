import Typography from "../../shared/Typography/Typography";
import AppLink from "../../shared/AppLink/AppLink";
import Search from "../Search/Search";
import dynamic from "next/dynamic";
import { headers } from "next/headers";
import { isMobile } from "@/lib/isMobile/isMobile";
import UserDropdown from "../UserDropdown/UserDropdown";
import ShoppingCartIcon from "@/components/icons/ShoppingCartIcon";
import BurgerMenuWrapper from "../BurgerMenu/BurgerMenuWrapper";

const CartLink = dynamic(() => import("../CartLink/CartLink"), {
  ssr: false,
  loading: () => <ShoppingCartIcon size={18} />,
});

async function Navbar() {
  const userAgent = headers().get("user-agent") || "";
  const mobileCheck = isMobile(userAgent);

  return (
    <nav className=" relative flex justify-between items-center py-5  bg-white z-50">
      <Search />

      <AppLink variant="clear" href={"/"}>
        <Typography fontFamily="secondary" size="24px" tag="h3" color="black">
          Avion
        </Typography>
      </AppLink>

      <div className=" flex gap-4 justify-center items-center">
        <CartLink />
        <UserDropdown />
        <BurgerMenuWrapper isMobile={mobileCheck} />
      </div>
    </nav>
  );
}

export default Navbar;
