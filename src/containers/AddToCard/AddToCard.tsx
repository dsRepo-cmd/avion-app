"use client";
import { Product } from "@/app/product/types";
import Button from "@/components/Button/Button";
import Counter from "@/components/Counter/Counter";

import { useSession } from "next-auth/react";
import { useState } from "react";

interface Props {
  product: Product;
}

let quantity = 1;
function AddToCard({ product }: Props) {
  const session = useSession();

  const [loading, setLoading] = useState(false);

  const getQuantity = (value: number) => {
    quantity = value;
  };

  const handleAddToCart = async (product: Product) => {
    setLoading(true);
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
          productId: product.id_,
          quantity,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setLoading(false);
      } else {
        console.log(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Failed to add product to cart.");
    }
  };

  return (
    <>
      <Counter value={quantity} onCountChange={getQuantity} />
      <Button
        disabled={loading}
        onClick={() => handleAddToCart(product)}
        variant="filled"
      >
        Add to cart
      </Button>
    </>
  );
}

export default AddToCard;
