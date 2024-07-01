"use client";

import Button from "@/components/Button/Button";
import Counter from "@/components/Counter/Counter";
import Typography from "@/components/Typography/Typography";
import { useCart } from "@/lib/CartContext";
import { Product } from "@/types/product";
import { useCallback, useEffect, useState } from "react";

interface Props {
  product: Product;
}

function AddToCard({ product }: Props) {
  let quantity = 1;

  const getQuantity = (value: number) => {
    quantity = value;
  };

  const { addProductToCart, loading, successMessage, resetSuccessMessage } =
    useCart();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (successMessage) {
      setShowSuccessMessage(true);
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
        resetSuccessMessage();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, resetSuccessMessage]);

  const handleAddToCart = useCallback(() => {
    addProductToCart(product.id_, quantity);
  }, [addProductToCart, product, quantity]);

  return (
    <>
      <Counter
        className="lg:max-w-full"
        value={quantity}
        onCountChange={getQuantity}
      />

      <div className=" relative flex gap-4 mt-9 lg:flex-col">
        <Button disabled={loading} onClick={handleAddToCart} variant="filled">
          Add to cart
        </Button>
        <Button variant="filled" bgColor="white">
          Save to favorites
        </Button>
        {showSuccessMessage && (
          <Typography
            tag="span"
            fontFamily="primary"
            color="light"
            className=" absolute left-0  top-[-30px]"
          >
            {successMessage}
          </Typography>
        )}
      </div>
    </>
  );
}

export default AddToCard;
