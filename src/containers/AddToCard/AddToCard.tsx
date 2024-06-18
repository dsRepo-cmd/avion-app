"use client";
import Button from "@/components/Button/Button";
import Counter from "@/components/Counter/Counter";

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
    const userEmail = session?.data?.user?.email;
    if (!userEmail) {
      alert("Please log in to add items to your cart.");
      return;
    }

    try {
      const response = await fetch("/api/cart/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: userEmail,
          productId: product._id,
          quantity,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Product added to cart!");
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Failed to add product to cart.");
    }
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
