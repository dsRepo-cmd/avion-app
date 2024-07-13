"use client";

import Button from "@/components/Button/Button";
import Counter from "@/components/Counter/Counter";
import Typography from "@/components/Typography/Typography";
import { addItemToCart } from "@/lib/cart";
import type { Product } from "@/types/product";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

interface Props {
  product: Product;
}

function AddToCard({ product }: Props) {
  const [message, formAction] = useFormState(addItemToCart, null);
  const { pending } = useFormStatus();

  const [quantity, setQuantity] = useState(1);

  const getQuantity = (value: number) => {
    setQuantity(value);
  };

  const action = formAction.bind(null, {
    productId: product.id,
    quantity: quantity,
  });

  return (
    <>
      <Counter
        className="lg:max-w-full"
        value={quantity}
        onCountChange={getQuantity}
      />
      <form action={action}>
        <div className=" relative flex gap-4 mt-9 lg:flex-col">
          <Button disabled={pending} type="submit" variant="filled">
            Add to cart
          </Button>
          <Button type="button" variant="filled" bgColor="white">
            Save to favorites
          </Button>

          {message && (
            <Typography
              tag="span"
              fontFamily="primary"
              color="light"
              className=" absolute left-0  top-[-30px]"
            >
              {message.toString()}
            </Typography>
          )}
        </div>
      </form>
    </>
  );
}

export default AddToCard;
