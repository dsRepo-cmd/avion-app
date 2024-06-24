"use client";

import CartIcon from "@/assets/shopping-cart.svg";
import SearchIcon from "@/assets/search.svg";
import UserAvatarIcon from "@/assets/user-avatar.svg";
import Typography from "../../components/Typography/Typography";
import AppLink from "../../components/AppLink/AppLink";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import SignInIcon from "@/assets/sign-in.svg";
import SignUpIcon from "@/assets/sign-up.svg";
import SignOutIcon from "@/assets/sign-out.svg";
import ProfileIcon from "@/assets/user-avatar.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import useIsMobile from "@/lib/useIsMobile";
import Dropdown, { DropdownItem } from "@/components/Dropdown/Dropdown";
import { useCart } from "@/lib/CartContext";

interface Props {
  isMobile?: boolean;
}

function Navbar({ isMobile }: Props) {
  const { productCount } = useCart();

  const session = useSession();

  const isMobileClient = useIsMobile();

  const isShowMobile = isMobile || isMobileClient;

  const items: DropdownItem[] = session.data
    ? [
        {
          id: "1",
          content: (
            <Typography tag="span" size="16px" fontFamily="primary">
              Profile
            </Typography>
          ),
          href: "/profile",
          svg: ProfileIcon,
        },
        {
          id: "2",
          content: (
            <Typography tag="span" size="16px" fontFamily="primary">
              Sign Out
            </Typography>
          ),
          onClick: () => signOut({ callbackUrl: "/" }),
          svg: SignOutIcon,
        },
      ]
    : [
        {
          id: "3",
          content: (
            <Typography tag="span" size="16px" fontFamily="primary">
              Sign in
            </Typography>
          ),
          href: "/signin",
          svg: SignInIcon,
        },
        {
          id: "4",
          content: (
            <Typography tag="span" size="16px" fontFamily="primary">
              Sign up
            </Typography>
          ),
          href: "/signup",
          svg: SignUpIcon,
        },
      ];

  return (
    <nav className=" relative flex justify-between items-center py-5  bg-white z-50">
      <div>
        <button
          className=" md:hidden duration-200 hover:scale-[1.2] active:scale-[1]"
          title="search"
        >
          <SearchIcon />
        </button>
      </div>

      <AppLink variant="clear" href={"/"}>
        <Typography fontFamily="secondary" size="24px" tag="h3" color="black">
          Avion
        </Typography>
      </AppLink>

      <div className=" flex gap-4 justify-center items-center">
        <Link
          className=" relative duration-200 hover:scale-[1.2] active:scale-[1]"
          href={"/cart"}
          title="cart"
        >
          <span className=" flex items-center justify-center absolute text-[12px] top-[-8px] right-[-8px] rounded-full  bg-borderGrey w-4 h-4">
            {productCount}
          </span>
          <CartIcon />
        </Link>

        <Dropdown
          className=" w-[210px]"
          items={items}
          trigger={
            <>
              {session?.data ? (
                <Image
                  src={session.data.user?.image || ""}
                  alt="user avatar"
                  width={96}
                  height={96}
                  className=" w-5 h-5 rounded-full duration-200 hover:scale-[1.2] active:scale-[1]"
                />
              ) : (
                <UserAvatarIcon />
              )}
            </>
          }
        />

        {isShowMobile && <BurgerMenu />}
      </div>
    </nav>
  );
}

export default Navbar;
