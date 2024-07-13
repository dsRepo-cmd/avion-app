import { updateQuantity } from "@/lib/cart";
import { cn } from "@/lib/utils/utils";
import type { CartProduct } from "@/types/cart";

import { useFormState, useFormStatus } from "react-dom";
import LoadingDots from "../LoadingDots/LoadingDots";

interface Props {
  item: CartProduct;
  type: "plus" | "minus";
}
function EditItemQuantityButton({ item, type }: Props) {
  const [messageQty, updateformAction] = useFormState(updateQuantity, null);
  const { pending } = useFormStatus();
  const payload = {
    productId: item.product.id,
    quantity: type === "plus" ? item.quantity + 1 : item.quantity - 1,
  };
  return (
    <form action={updateformAction.bind(null, payload)}>
      <button
        type="submit"
        onClick={(e: React.FormEvent<HTMLButtonElement>) => {
          if (pending) e.preventDefault();
        }}
        aria-label={
          type === "plus" ? "Increase item quantity" : "Reduce item quantity"
        }
        aria-disabled={pending}
        className={cn("duration-300 text-grey hover:text-darkPrimary p-3", {
          "cursor-not-allowed": pending,
          "ml-auto": type === "minus",
        })}
      >
        {pending ? (
          <LoadingDots className=" bg-darkPrimary " />
        ) : type === "plus" ? (
          "+"
        ) : (
          "-"
        )}
      </button>
    </form>
  );
}

export default EditItemQuantityButton;
