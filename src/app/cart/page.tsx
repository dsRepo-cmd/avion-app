"use client";

import CartMenu from "./menu";
import { ICartBase } from "../product/types";

const cart: ICartBase = {
  id: "1",
  userEmail: "mail",
  products: [
    {
      product: {
        _id: "1",
        name: "name",
        imageSrc: "/vase-set.png",
        price: 100,
      },
      quantity: 3,
    },
    {
      product: {
        _id: "2",
        name: "name",
        imageSrc: "/vase-set.png",
        price: 100,
      },
      quantity: 5,
    },
    {
      product: {
        _id: "3",
        name: "name",
        imageSrc: "/vase-set.png",
        price: 100,
      },
      quantity: 5,
    },
  ],
};
function Cart() {
  return (
    <main className="flex  flex-col items-center justify-between  w-[1440px] ">
      <CartMenu cart={cart} />
    </main>
  );
}

export default Cart;
