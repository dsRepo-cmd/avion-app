import type { ICart } from "@/models/Cart";
import type { CartBase } from "@/types/cart";

export const transformCart = (cart: ICart): CartBase => ({
  id: cart._id.toString(),
  userIdentifier: cart.userIdentifier,
  products: cart.products.map((product) => ({
    product: {
      id: product.product._id.toString(),
      name: product.product.name,
      price: product.product.price,
      imageSrc: product.product.imageSrc,
      description: product.product.description,
    },
    quantity: product.quantity,
  })),
  totalPrice: cart.totalPrice,
  status: cart.status,
});

export const truncateDescription = (description: string, maxLength: number) => {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + "...";
  }
  return description;
};
