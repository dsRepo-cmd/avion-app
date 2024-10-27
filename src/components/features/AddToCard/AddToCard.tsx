"use client";

import React, { useActionState, useState } from "react";
import Button from "@/components/shared/Button/Button";
import Counter from "@/components/shared/Counter/Counter";
import Typography from "@/components/shared/Typography/Typography";
import { addItemToCart } from "@/lib/cart";
import type { Product } from "@/types/product";
import { useFormStatus } from "react-dom";
import LoadingDots from "@/components/shared/LoadingDots/LoadingDots";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      variant="filled"
      className=" w-40 lg:w-full"
    >
      {pending ? <LoadingDots className=" bg-white " /> : "Add to cart"}
    </Button>
  );
}

interface Props {
  product: Product;
}

function AddToCard({ product }: Props) {
  const [message, formAction] = useActionState(addItemToCart, null);
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
      <Counter className="lg:max-w-full" onCountChange={getQuantity} />
      <form action={action}>
        <div className="relative flex gap-4 mt-9 lg:flex-col">
          <SubmitButton />
          <Button type="button" variant="filled" bgColor="white">
            Save to favorites
          </Button>

          {message && (
            <Typography
              tag="span"
              fontFamily="primary"
              color="light"
              className="absolute left-0 top-[-30px]"
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
