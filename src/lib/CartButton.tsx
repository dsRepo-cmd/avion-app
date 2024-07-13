"use server";
import Link from "next/link";
import { getCart } from "./actions";
import CartIcon from "@/assets/shopping-cart.svg";

export default async function CartButton() {
  let cart;
  const resCart = await getCart();

  if (resCart) {
    cart = resCart;
  }

  if (!cart) {
    return null;
  }

  let cartItemsCount = cart.products.length;
  return (
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

      <CartIcon />
    </Link>
  );
}
