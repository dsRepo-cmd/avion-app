"use client";
import React, { useState } from "react";
import SearchIcon from "@/assets/search.svg";
import CartIcon from "@/assets/shopping-cart.svg";
import UserAvatarIcon from "@/assets/user-avatar.svg";
import Typography from "../../components/Typography/Typography";
import AppLink from "../../components/AppLink/AppLink";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

function Navbar() {
  const session = useSession();
  const [isOpen, setOpen] = useState(false);

  const handleAvatar = () => {
    setOpen((prev) => !prev);
    console.log(isOpen);
  };

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

      <div className=" flex gap-4 items-center">
        <Link href={"/cart"} title="cart">
          <CartIcon />
        </Link>

        <button onClick={handleAvatar} title="user-avatar">
          {session?.data ? (
            <Image
              src={session.data.user?.image || ""}
              alt="user avatar"
              width={96}
              height={96}
              className=" w-6 h-6 rounded-full"
            />
          ) : (
            <UserAvatarIcon />
          )}
        </button>

        <div
          className={cn(
            " duration-300 border p-3 rounded-xl flex flex-col gap-2  bg-lightGrey absolute right-0 top-[-50px] ",
            isOpen && " top-16 "
          )}
        >
          {session?.data ? (
            <Link href={"#"} onClick={() => signOut({ callbackUrl: "/" })}>
              Sign Out
            </Link>
          ) : (
            <>
              <Link href={"/signin"}>Sign in</Link>
              <Link href={"/signup"}>Sign up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
