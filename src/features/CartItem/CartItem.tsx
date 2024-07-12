"use client";
import Button from "@/components/Button/Button";
import Counter from "@/components/Counter/Counter";
import Typography from "@/components/Typography/Typography";
import { removeItemFromCart, updateQuantity } from "@/lib/actions";
import { CartProduct } from "@/types/cart";
import Image from "next/image";
import Link from "next/link";

import DeleteIcon from "@/assets/x.svg";
import { truncateDescription } from "@/lib/cart";
import { useFormState, useFormStatus } from "react-dom";

interface Props {
  cartItem: CartProduct;
}
function CartItem({ cartItem }: Props) {
  const [message, deleteformAction] = useFormState(removeItemFromCart, null);
  const [messageQty, updateformAction] = useFormState(updateQuantity, null);
  const { pending } = useFormStatus();

  console.log(message);

  return (
    <>
      <td className="py-4  flex items-center gap-5">
        <Link
          href={`/product/${cartItem.product.id}`}
          className=" duration-200 hover-hover:hover:scale-[1.04] hover-none:active:scale-[1.04] "
          title="product"
        >
          <Image
            src={cartItem.product.imageSrc}
            alt={cartItem.product.id}
            width={305}
            height={375}
            className="w-[109px] h-[134px] object-cover md:min-w-[133px] md:h-[166px] "
          />
        </Link>
        <div className=" max-w-[250px] flex w-full  flex-col gap-2">
          <Typography tag="h3" size="20px" fontFamily="secondary">
            {cartItem.product.name}
          </Typography>
          <Typography tag="p" size="14px" fontFamily="primary">
            {truncateDescription(cartItem.product.description || "", 60)}
          </Typography>
          <Typography tag="p" size="16px" fontFamily="primary">
            £{cartItem.product.price}
          </Typography>
          <div className=" hidden md:flex w-full  justify-between ">
            <form
              action={updateformAction.bind(null, {
                productId: cartItem.product.id,
                quantity: cartItem.quantity,
              })}
            >
              <Counter
                loading={pending}
                value={cartItem.quantity}
                className="bg-lightGrey "
                onCountChange={(quantity) => {
                  quantity = quantity;
                }}
              />
              <Button type="submit">upd</Button>
            </form>

            <form action={deleteformAction.bind(null, cartItem.product.id)}>
              <Button
                type="submit"
                variant="clear"
                bgColor="gray"
                title="delete"
              >
                <DeleteIcon />
              </Button>
            </form>
          </div>
        </div>
      </td>
      <td className="py-4  md:hidden">
        <div className=" flex gap-4">
          <form
            action={updateformAction.bind(null, {
              productId: cartItem.product.id,
              quantity: cartItem.quantity,
            })}
          >
            <Counter
              onCountChange={(quantity) => {
                quantity = quantity;
              }}
              value={cartItem.quantity}
            />
          </form>
        </div>
      </td>
      <td className=" py-4 ps-6 md:hidden">
        <form action={deleteformAction.bind(null, cartItem.product.id)}>
          <Button type="submit" variant="clear" bgColor="gray" title="delete">
            <DeleteIcon />
          </Button>
        </form>
      </td>
      <td className="py-4 text-end md:hidden w-16">
        <Typography tag="p" size="18px" fontFamily="primary">
          £{cartItem.product.price * cartItem.quantity}
        </Typography>
      </td>
    </>
  );
}

export default CartItem;
