"use client";

import Typography from "../../shared/Typography/Typography";
import AppLink from "../../shared/AppLink/AppLink";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import useIsMobile from "@/lib/useIsMobile";
import Dropdown, {
  type DropdownItem,
} from "@/components/shared/Dropdown/Dropdown";

import Search from "../Search/Search";

import SignOutIcon from "@/components/icons/SignOutIcon";
import SignInIcon from "@/components/icons/SignInIcon";
import SignUpIcon from "@/components/icons/SignUpIcon";
import ShoppingCartIcon from "@/components/icons/ShoppingCartIcon";
import UserAvatarIcon from "@/components/icons/UserAvatarIcon";

interface Props {
  isMobile?: boolean;
  cartItemsCount?: number;
}

function Navbar({ isMobile, cartItemsCount = 0 }: Props) {
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
          svg: <UserAvatarIcon size={20} />,
        },
        {
          id: "2",
          content: (
            <Typography tag="span" size="16px" fontFamily="primary">
              Sign Out
            </Typography>
          ),
          onClick: () => signOut({ callbackUrl: "/" }),
          svg: <SignOutIcon size={20} />,
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
          svg: <SignInIcon size={20} />,
        },
        {
          id: "4",
          content: (
            <Typography tag="span" size="16px" fontFamily="primary">
              Sign up
            </Typography>
          ),
          href: "/signup",
          svg: <SignUpIcon size={20} />,
        },
      ];

  return (
    <nav className=" relative flex justify-between items-center py-5  bg-white z-50">
      <Search />

      <AppLink variant="clear" href={"/"}>
        <Typography fontFamily="secondary" size="24px" tag="h3" color="black">
          Avion
        </Typography>
      </AppLink>

      <div className=" flex gap-4 justify-center items-center">
        <Link
          className=" relative duration-200 hover-hover:hover:scale-[1.2] hover-none:active:scale-[1.2] active:scale-[1]"
          href={"/cart"}
          title="cart"
        >
          {cartItemsCount !== 0 && (
            <span className=" flex items-center justify-center absolute text-[12px] top-[-8px] right-[-8px] rounded-full  bg-borderGrey w-4 h-4">
              {cartItemsCount}
            </span>
          )}

          <ShoppingCartIcon size={18} />
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
                  className=" w-5 h-5 rounded-full duration-200 hover-hover:hover:scale-[1.2] hover-none:active:scale-[1.2] active:scale-[1]"
                />
              ) : (
                <UserAvatarIcon size={16} />
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
