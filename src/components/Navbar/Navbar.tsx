"use client";
import React from "react";
import SearchIcon from "@/assets/search.svg";
import CartIcon from "@/assets/shopping-cart.svg";
import UserAvatarIcon from "@/assets/user-avatar.svg";
import Typography from "../Typography/Typography";
import AppLink from "../AppLink/AppLink";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import useCart from "@/lib/cart";

function Navbar() {
  const session = useSession();

  const userEmail = session.data?.user?.email || "";

  const { cart, setCart } = useCart(userEmail);

  console.log("cart", cart);

  return (
    <nav className=" flex justify-between items-center py-5">
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

        <button title="user-avatar">
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

        {session?.data ? (
          <Link href={"#"} onClick={() => signOut({ callbackUrl: "/" })}>
            Sign Out
          </Link>
        ) : (
          <Link href={"/signin"}>Sign in</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
