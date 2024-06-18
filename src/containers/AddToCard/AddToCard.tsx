"use client";
import { Product } from "@/app/product/types";
import Button from "@/components/Button/Button";
import Counter from "@/components/Counter/Counter";
import useCart from "@/lib/useCart";
import { useState } from "react";

interface Props {
  product: Product;
}

function AddToCard({ product }: Props) {
  const [loading, setLoading] = useState(false);
  let quantity = 1;

  const getQuantity = (value: number) => {
    quantity = value;
  };

  const { addProductToCart } = useCart();

  return (
    <>
      <Counter value={quantity} onCountChange={getQuantity} />
      <Button
        disabled={loading}
        onClick={() => addProductToCart(product.id_, quantity, setLoading)}
        variant="filled"
      >
        Add to cart
      </Button>
    </>
  );
}

export default AddToCard;
