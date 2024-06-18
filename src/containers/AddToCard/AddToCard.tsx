"use client";
import Button from "@/components/Button/Button";
import Counter from "@/components/Counter/Counter";
import CartModel from "@/models/Cart";
import { IProduct } from "@/models/Product";
import { useSession } from "next-auth/react";

interface Props {
  product: IProduct;
}

let quantity = 1;
function AddToCard({ product }: Props) {
  const session = useSession();
  const getQuantity = (value: number) => {
    quantity = value;
  };

  const handleAddToCart = async (product: IProduct) => {
    if (!session) {
      console.log("You need to signUp");
    }

    try {
      const cart = new CartModel();
      await cart.save();
    } catch (error) {}
  };
  return (
    <>
      <Counter value={quantity} onCountChange={getQuantity} />
      <Button onClick={() => handleAddToCart(product)} variant="filled">
        Add to cart
      </Button>
    </>
  );
}

export default AddToCard;
