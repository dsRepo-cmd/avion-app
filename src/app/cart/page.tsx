"use client";

import useCart from "@/lib/cart";
import CartMenu from "./menu";
import { useSession } from "next-auth/react";
import Page from "@/components/Page/Page";

function Cart() {
  const session = useSession();
  const { cart, setCart } = useCart(session?.data?.user?.email || "");
  if (cart === null) return <>Register</>;

  return (
    <Page>
      <CartMenu cart={cart} />
    </Page>
  );
}

export default Cart;
