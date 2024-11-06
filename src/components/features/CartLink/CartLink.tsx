import ShoppingCartIcon from "@/components/icons/ShoppingCartIcon";
import { getCart } from "@/lib/cart";
import Link from "next/link";

async function CartLink() {
  const cart = await getCart();
  const cartItemsCount = cart?.products.length || "";
  return (
    <Link
      className=" relative duration-200 hover-hover:hover:scale-[1.2] hover-none:active:scale-[1.2] active:scale-[1]"
      href={"/cart"}
      title="cart"
    >
      {cartItemsCount !== 0 && (
        <span className=" flex items-center justify-center absolute text-[12px] top-[-8px] right-[-8px] rounded-full  bg-borderGrey w-4 h-4">
          {cartItemsCount}
        </span>
      )}
      <ShoppingCartIcon size={18} />
    </Link>
  );
}

export default CartLink;
