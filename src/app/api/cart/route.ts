import { Types } from "mongoose";
import { ICartData } from "@/app/product/types";
import { transformCart } from "@/lib/cart";
import dbConnect from "@/lib/dbConnect";
import CartModel, { ICart } from "@/models/Cart";
import ProductModel from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

// ================================================= GET

export const GET = async (
  req: NextRequest
): Promise<NextResponse<Partial<ICartData>>> => {
  await dbConnect();
  try {
    const url = new URL(req.url);
    const userEmail = url.searchParams.get("userEmail");

    if (!userEmail) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    let cartModel: ICart | null = await CartModel.findOne({
      userEmail,
    }).populate({
      path: "products.product",
      model: ProductModel,
    });

    if (!cartModel) {
      cartModel = new CartModel({
        userEmail,
        products: [],
        totalPrice: 0,
        status: "active",
      });
      await cartModel.save();

      cartModel = await CartModel.findOne({ userEmail }).populate({
        path: "products.product",
        model: ProductModel,
      });
    }
    if (!cartModel) {
      return NextResponse.json({ message: "Cart not found" }, { status: 404 });
    }

    const cart = transformCart(cartModel);

    return NextResponse.json({ cart });
  } catch (err: any) {
    return NextResponse.json(
      { message: "Internal Server Error", error: err },
      { status: 500 }
    );
  }
};

// ================================================= POST

export const POST = async (
  req: NextRequest
): Promise<NextResponse<Partial<ICartData>>> => {
  await dbConnect();
  try {
    const { userEmail, productId, quantity } = await req.json();

    if (!userEmail || !productId || !quantity) {
      return NextResponse.json({ message: "Story not found" }, { status: 404 });
    }
    let cartModel = await CartModel.findOne({ userEmail });
    if (!cartModel) {
      cartModel = new CartModel({
        userEmail,
        products: [],
        totalPrice: 0,
        status: "active",
      });
    }
    const product = await ProductModel.findById(productId);
    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }
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
      cartModel.products.push({ product: productId, quantity });
    }
    cartModel.totalPrice += product.price * quantity;

    await cartModel.save();
    const cart = transformCart(cartModel);
    return NextResponse.json({ cart });
  } catch (err: any) {
    return NextResponse.json(
      { message: "Internal Server Error", error: err },
      { status: 500 }
    );
  }
};

// ================================================= DELETE

export const DELETE = async (
  req: NextRequest
): Promise<NextResponse<Partial<ICartData>>> => {
  await dbConnect();
  try {
    const { userEmail, productId } = await req.json();

    if (!userEmail || !productId) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    let cartModel = await CartModel.findOne({ userEmail });
    if (!cartModel) {
      return NextResponse.json({ message: "Cart not found" }, { status: 404 });
    }

    const productIndex = cartModel.products.findIndex(
      (item) => item.product.toString() === productId
    );

    if (productIndex === -1) {
      return NextResponse.json(
        { message: "Product not found in cart" },
        { status: 404 }
      );
    }

    const product = await ProductModel.findById(productId);
    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    cartModel.totalPrice -=
      cartModel.products[productIndex].quantity * product.price;
    cartModel.products.splice(productIndex, 1);

    await cartModel.save();

    const cart = await CartModel.findOne({ userEmail }).populate({
      path: "products.product",
      model: ProductModel,
    });

    if (!cart) {
      return NextResponse.json({ message: "Cart not found" }, { status: 404 });
    }

    const transformedCart = transformCart(cart);
    return NextResponse.json({ cart: transformedCart });
  } catch (err: any) {
    return NextResponse.json(
      { message: "Internal Server Error", error: err },
      { status: 500 }
    );
  }
};

// ================================================= PATCH

export const PATCH = async (req: NextRequest) => {
  await dbConnect();
  try {
    const { userEmail, productId, quantity } = await req.json();

    if (!userEmail || !productId || quantity == null) {
      return NextResponse.json({ message: "Invalid data" }, { status: 404 });
    }

    let cartModel = await CartModel.findOne({ userEmail });
    if (!cartModel) {
      return NextResponse.json({ message: "Cart not found" }, { status: 404 });
    }

    const product = await ProductModel.findById(productId);
    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    const productIndex = cartModel.products.findIndex(
      (item) => item.product.toString() === productId
    );

    if (productIndex === -1) {
      return NextResponse.json(
        { message: "Product not found in cart" },
        { status: 404 }
      );
    }

    const currentQuantity = cartModel.products[productIndex].quantity;
    cartModel.products[productIndex].quantity = quantity;

    cartModel.totalPrice += (quantity - currentQuantity) * product.price;

    await cartModel.save();

    const cart = await CartModel.findOne({ userEmail }).populate({
      path: "products.product",
      model: ProductModel,
    });

    if (!cart) {
      return NextResponse.json({ message: "Cart not found" }, { status: 404 });
    }

    const transformedCart = transformCart(cart);
    return NextResponse.json({ cart: transformedCart });
  } catch (err: any) {
    return NextResponse.json(
      { message: "Internal Server Error", error: err },
      { status: 500 }
    );
  }
};
