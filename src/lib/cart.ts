import { ICart } from "@/models/Cart";
import { CartBase } from "@/types/cart";

export const transformCart = (cart: ICart): CartBase => ({
  id_: cart._id.toString(),
  userIdentifier: cart.userIdentifier,
  products: cart.products,
  totalPrice: cart.totalPrice,
  status: cart.status,
});

export const truncateDescription = (description: string, maxLength: number) => {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + "...";
  }
  return description;
};
