"use server";

import type { ICart } from "@/models/Cart";
import type { CartBase } from "@/types/cart";
import { cookies } from "next/headers";
import dbConnect from "./dbConnect";
import CartModel from "@/models/Cart";
import ProductModel from "@/models/Product";
import { Types } from "mongoose";
import { revalidateTag } from "next/cache";
import { Tag } from "./enums";

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

function updateCartCookie(cart: ICart): string | undefined {
  const cartId = cookies().get("sw-context-token")?.value;

  if (cartId && cart._id && cart._id.toString() !== cartId) {
    cookies().set("sw-context-token", cart._id.toString());
    return cart._id.toString();
  }

  if (!cartId && cart._id.toString()) {
    cookies().set("sw-context-token", cart._id.toString());
    return cart._id.toString();
  }

  return cartId;
}

export async function getCart(): Promise<CartBase | undefined> {
  await dbConnect();

  try {
    const cartId = cookies().get("sw-context-token")?.value;
    let cartModel: ICart | null = await CartModel.findOne({
      _id: cartId,
    })
      .populate({
        path: "products.product",
        model: ProductModel,
      })
      .lean();

    if (!cartModel) {
      return;
    }
    return transformCart(cartModel);
  } catch (error) {
    console.error("Error geting cart:", error);
    return undefined;
  }
}

async function getCartModel(): Promise<ICart | undefined> {
  try {
    const cartId = cookies().get("sw-context-token")?.value;

    if (cartId) {
      return await fetchCart(cartId);
    }

    const newCartModel = await fetchCart();
    if (newCartModel) {
      updateCartCookie(newCartModel);
    } else {
      console.log("cartModel not found");
    }

    return newCartModel;
  } catch (error) {
    console.error("Error geting cartModel:", error);
    return undefined;
  }
}

async function fetchCart(cartId?: string): Promise<ICart | undefined> {
  try {
    if (cartId) {
      const cartModel = await CartModel.findById(cartId);

      if (!cartModel) {
        console.error("cartModel not found");
        return undefined;
      }

      return cartModel;
    }

    const cartModel = new CartModel({
      userIdentifier: "anonymous",
      products: [],
      totalPrice: 0,
      status: "active",
    });

    await cartModel.save();
    return cartModel;
  } catch (error) {
    console.error("Error fetching cart:", error);
    return undefined;
  }
}

export async function addItemToCart(
  prevState: any,
  {
    productId,
    quantity,
  }: {
    productId: string;
    quantity: number;
  }
): Promise<CartBase | string | undefined> {
  await dbConnect();

  try {
    let cartModel = await getCartModel();
    if (!cartModel) return "Could not get cartModel";

    const product = await ProductModel.findById(productId).lean();

    if (!product) return "Product not found";

    const existingProductIndex = cartModel.products.findIndex((item) => {
      if (typeof item.product === "string") {
        return item.product === productId;
      } else if (item.product instanceof Types.ObjectId) {
        return item.product.equals(productId);
      }
      return false;
    });

    if (existingProductIndex > -1) {
      cartModel.products[existingProductIndex].quantity += quantity;
    } else {
      cartModel.products.push({ product, quantity });
    }
    cartModel.totalPrice += product.price * quantity;

    await cartModel.save();

    revalidateTag(Tag.CART);
    return "Product has been added to cart";
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return undefined;
  }
}

export async function removeItemFromCart(
  prevState: any,
  productId: string
): Promise<string | undefined> {
  await dbConnect();

  const cartModel = await getCartModel();
  if (!cartModel) {
    return "cartModel not found";
  }

  const productIndex = cartModel.products.findIndex(
    (item) => item.product.toString() === productId
  );
  if (productIndex === -1) {
    return "Product not found in cart";
  }

  try {
    const product = await ProductModel.findById(productId).lean();
    if (!product) {
      return "Product not found";
    }

    cartModel.totalPrice -=
      cartModel.products[productIndex].quantity * product.price;
    cartModel.products.splice(productIndex, 1);

    await cartModel.save();

    revalidateTag(Tag.CART);
    return;
  } catch (error) {
    console.error("Error removing item from cart:", error);
    return undefined;
  }
}

export async function updateQuantity(
  prevState: any,
  {
    productId,
    quantity,
  }: {
    productId: string;
    quantity: number;
  }
): Promise<CartBase | string | undefined> {
  await dbConnect();

  try {
    if (quantity === 0) {
      return await removeItemFromCart(prevState, productId);
    }
    const cartModel = await getCartModel();
    if (!cartModel) {
      return "cartModel not found";
    }

    const product = await ProductModel.findById(productId).lean();
    if (!product) {
      return "Product not found";
    }

    const productIndex = cartModel.products.findIndex(
      (item) => item.product.toString() === productId
    );
    if (productIndex === -1) {
      return "Product not found in cart";
    }

    const currentQuantity = cartModel.products[productIndex].quantity;
    cartModel.products[productIndex].quantity = quantity;
    cartModel.totalPrice += (quantity - currentQuantity) * product.price;
    await cartModel.save();

    revalidateTag(Tag.CART);
  } catch (error) {
    console.error("Error updating cart item quantity:", error);
    return undefined;
  }

  return;
}
