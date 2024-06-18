"use client";

import useCart from "@/lib/cart";
import CartMenu from "./menu";
import { useSession } from "next-auth/react";

function Cart() {
  const session = useSession();
  const { cart, setCart } = useCart(session?.data?.user?.email || "");
  if (cart === null) return <>Register</>;

  return (
    <main className="flex  flex-col items-center justify-between  max-w-[1440px] ">
      <CartMenu cart={cart} />
    </main>
  );
}

export default Cart;
