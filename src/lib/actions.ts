"use server";

import type { ICart } from "@/models/Cart";
import type { CartBase } from "@/types/cart";
import { cookies } from "next/headers";
import dbConnect from "./dbConnect";
import CartModel from "@/models/Cart";
import ProductModel from "@/models/Product";
import { Types } from "mongoose";
import { transformCart } from "./cart";
import { revalidateTag } from "next/cache";

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
  await getCartModel();

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
}

async function getCartModel(): Promise<ICart | undefined> {
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
}

async function fetchCart(cartId?: string): Promise<ICart | undefined> {
  await dbConnect();
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

interface AddItemToCartProps {
  productId: string;
  quantity: number;
}
export async function addItemToCart(
  prevState: any,
  { productId, quantity }: AddItemToCartProps
): Promise<CartBase | string | undefined> {
  dbConnect();

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

    revalidateTag("cart");
    return "Product has been added to cart";
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return undefined;
  }
}

export async function removeItemFromCart(
  prevState: any,
  productId: string
): Promise<CartBase | undefined> {
  const cartModel = await getCartModel();
  if (!cartModel) {
    console.error("cartModel not found");
    return undefined;
  }

  const productIndex = cartModel.products.findIndex(
    (item) => item.product.toString() === productId
  );
  if (productIndex === -1) {
    console.error("Product not found in cart");
    return undefined;
  }

  try {
    const product = await ProductModel.findById(productId).lean();
    if (!product) {
      console.error("Product not found");
      return undefined;
    }

    cartModel.totalPrice -=
      cartModel.products[productIndex].quantity * product.price;
    cartModel.products.splice(productIndex, 1);

    await cartModel.save();

    revalidateTag("cart");
    return;
  } catch (error) {
    console.error("Error removing item from cart:", error);
    return undefined;
  }
}

interface UpdateQuantityProps {
  productId: string;
  quantity: number;
}
export async function updateQuantity(
  prevState: any,
  { productId, quantity }: UpdateQuantityProps
): Promise<CartBase | string | undefined> {
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

  revalidateTag("cart");
  return;
}
