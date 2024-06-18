import { ICartBase } from "@/app/product/types";
import { ICart } from "@/models/Cart";

export const transformCart = (cart: ICart): ICartBase => ({
  id_: cart._id.toString(),
  userEmail: cart.userEmail,
  products: cart.products,
  totalPrice: cart.totalPrice,
  status: cart.status,
});
