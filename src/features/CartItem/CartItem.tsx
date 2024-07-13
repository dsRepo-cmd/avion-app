"use client";
import Button from "@/components/Button/Button";
import Typography from "@/components/Typography/Typography";
import { removeItemFromCart } from "@/lib/cart";
import { CartProduct } from "@/types/cart";
import Image from "next/image";
import Link from "next/link";
import DeleteIcon from "@/assets/x.svg";
import { useFormState } from "react-dom";
import EditItemQuantityButton from "@/components/EditItemQuantityButton/EditItemQuantityButton";

interface Props {
  cartItem: CartProduct;
}

const truncateDescription = (
  description: string,
  maxLength: number
): string => {
  return description.length > maxLength
    ? description.substring(0, maxLength) + "..."
    : description;
};

function CartItem({ cartItem }: Props) {
  const [message, deleteformAction] = useFormState(removeItemFromCart, null);

  return (
    <>
      <td className="py-4 flex items-center gap-5">
        <Link
          href={`/product/${cartItem.product.id}`}
          className="duration-200 hover-hover:hover:scale-[1.04] hover-none:active:scale-[1.04]"
          title="product"
        >
          <Image
            src={cartItem.product.imageSrc}
            alt={cartItem.product.id}
            width={305}
            height={375}
            className="w-[109px] h-[134px] object-cover md:min-w-[133px] md:h-[166px]"
          />
        </Link>
        <div className="max-w-[250px] flex w-full flex-col gap-2">
          <Typography tag="h3" size="20px" fontFamily="secondary">
            {cartItem.product.name}
          </Typography>
          <Typography tag="p" size="14px" fontFamily="primary">
            {truncateDescription(cartItem.product.description || "", 60)}
          </Typography>
          <Typography tag="p" size="16px" fontFamily="primary">
            £{cartItem.product.price}
          </Typography>
          <div className="hidden md:flex w-full justify-between">
            <div>
              <EditItemQuantityButton type="minus" item={cartItem} />
              <span> {cartItem.quantity}</span>
              <EditItemQuantityButton type="plus" item={cartItem} />
            </div>

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
      <td className="py-4 md:hidden">
        <div className="flex items-center justify-around max-w-[8rem] bg-white rounded-md">
          <EditItemQuantityButton type="minus" item={cartItem} />
          <span className=" font-primary  text-center w-[2.5rem] flex-shrink-0">
            {cartItem.quantity}
          </span>
          <EditItemQuantityButton type="plus" item={cartItem} />
        </div>
      </td>
      <td className="py-4 ps-6 md:hidden">
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
