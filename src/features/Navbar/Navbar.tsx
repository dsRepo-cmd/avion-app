"use client";

import SearchIcon from "@/assets/search.svg";
import CartIcon from "@/assets/shopping-cart.svg";
import UserAvatarIcon from "@/assets/user-avatar.svg";
import Typography from "../../components/Typography/Typography";
import AppLink from "../../components/AppLink/AppLink";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import SignInIcon from "@/assets/sign-in.svg";
import SignUpIcon from "@/assets/sign-up.svg";
import SignOutIcon from "@/assets/sign-out.svg";

import Dropdown, { DropdownItem } from "@/components/Dropdown/Dropdown";

import BurgerMenu from "../BurgerMenu/BurgerMenu";
import useIsMobile from "@/lib/useIsMobile";
interface Props {
  isMobile?: boolean;
}
function Navbar({ isMobile }: Props) {
  const session = useSession();

  const isMobileClient = useIsMobile();

  const isShowMobile = isMobile || isMobileClient;

  const items: DropdownItem[] = session.data
    ? [
        {
          id: "1",
          content: (
            <Typography tag="span" size="14px" fontFamily="secondary">
              Sign Out
            </Typography>
          ),
          onClick: () => signOut({ callbackUrl: "/" }),
          svg: SignOutIcon,
        },
      ]
    : [
        {
          id: "2",
          content: (
            <Typography tag="span" size="14px" fontFamily="secondary">
              Sign in
            </Typography>
          ),
          href: "/signin",
          svg: SignInIcon,
        },
        {
          id: "3",
          content: (
            <Typography tag="span" size="14px" fontFamily="secondary">
              Sign up
            </Typography>
          ),
          href: "/signup",
          svg: SignUpIcon,
        },
      ];

  return (
    <nav className=" relative flex justify-between items-center py-5 ">
      <div>
        <button className=" md:hidden" title="search">
          <SearchIcon />
        </button>
      </div>

      <AppLink variant="clear" href={"/"}>
        <Typography fontFamily="secondary" size="24px" tag="h3" color="black">
          Avion
        </Typography>
      </AppLink>

      <div className=" flex gap-4 justify-center items-center">
        <Link href={"/cart"} title="cart">
          <CartIcon />
        </Link>

        <Dropdown
          items={items}
          anchor="bottom"
          trigger={
            <>
              {session?.data ? (
                <Image
                  src={session.data.user?.image || ""}
                  alt="user avatar"
                  width={96}
                  height={96}
                  className=" w-5 h-5 rounded-full"
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
