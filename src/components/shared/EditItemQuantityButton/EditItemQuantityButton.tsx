import { useActionState } from "react";
import { updateQuantity } from "@/lib/cart";
import { cn } from "@/lib/utils/utils";
import type { CartProduct } from "@/types/cart";

import { useFormStatus } from "react-dom";
import LoadingDots from "../LoadingDots/LoadingDots";
import Button from "../Button/Button";
import MinusIcon from "../../icons/MinusIcon";
import PlusIcon from "../../icons/PlusIcon";

interface Props {
  item: CartProduct;
  type: "plus" | "minus";
}

function SubmitButton({ type }: { type: "plus" | "minus" }) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      aria-label={
        type === "plus" ? "Increase item quantity" : "Reduce item quantity"
      }
      aria-disabled={pending}
      variant="clear"
      bgColor="clear"
      className={cn(
        " flex text-grey  items-center justify-center text-xl   min-w-10",
        {
          " cursor-progress": pending,
          "ml-auto": type === "minus",
        }
      )}
    >
      {pending ? (
        <LoadingDots className=" bg-darkPrimary " />
      ) : type === "plus" ? (
        <MinusIcon size={12} />
      ) : (
        <PlusIcon size={12} />
      )}
    </Button>
  );
}

function EditItemQuantityButton({ item, type }: Props) {
  const [messageQty, updateformAction] = useActionState(updateQuantity, null);

  const payload = {
    productId: item.product.id,
    quantity: type === "plus" ? item.quantity + 1 : item.quantity - 1,
  };
  return (
    <form action={updateformAction.bind(null, payload)}>
      <SubmitButton type={type} />
    </form>
  );
}

export default EditItemQuantityButton;
