"use client";
import { Product } from "@/app/product/types";
import Button from "@/components/Button/Button";
import Counter from "@/components/Counter/Counter";
import Typography from "@/components/Typography/Typography";
import useCart from "@/lib/useCart";

interface Props {
  product: Product;
}

function AddToCard({ product }: Props) {
  let quantity = 1;

  const getQuantity = (value: number) => {
    quantity = value;
  };

  const { addProductToCart, loading, message } = useCart();

  return (
    <>
      <Counter
        className=" lg:max-w-full"
        value={quantity}
        onCountChange={getQuantity}
      />

      <Typography tag="p" size="16px" fontFamily="primary">
        {message}
      </Typography>
      <div className=" flex gap-4 mt-9 lg:flex-col">
        <Button
          disabled={loading}
          onClick={() => addProductToCart(product.id_, quantity)}
          variant="filled"
        >
          Add to cart
        </Button>
        <Button variant="filled" bgColor="white">
          Save to favorites
        </Button>
      </div>
    </>
  );
}

export default AddToCard;
