import dbConnect from "@/lib/dbConnect";
import CartModel, { ICart } from "@/models/Cart";
import ProductModel from "@/models/Product";

import { NextRequest, NextResponse } from "next/server";
export const GET = async (req: NextRequest) => {
  await dbConnect();
  try {
    const url = new URL(req.url);
    const userEmail = url.searchParams.get("userEmail");

    if (!userEmail) {
      return new NextResponse("Email is required", { status: 400 });
    }

    let cart: ICart | null = await CartModel.findOne({ userEmail }).populate({
      path: "products.product",
      model: ProductModel,
    });

    if (!cart) {
      cart = new CartModel({
        userEmail,
        products: [],
        totalPrice: 0,
        status: "active",
      });
      await cart.save();

      cart = await CartModel.findOne({ userEmail }).populate({
        path: "products.product",
        model: ProductModel,
      });
    }

    return NextResponse.json(cart);
  } catch (err: any) {
    return new NextResponse(err.message || "Internal Server Error", {
      status: 500,
    });
  }
};

export const POST = async (req: NextRequest) => {
  await dbConnect();
  try {
    const { userEmail, productId, quantity } = await req.json();

    if (!userEmail || !productId || !quantity) {
      return NextResponse.json({ error: "Story not found" }, { status: 404 });
    }
    let cart = await CartModel.findOne({ userEmail });
    if (!cart) {
      cart = new CartModel({
        userEmail,
        products: [],
        totalPrice: 0,
        status: "active",
      });
    }
    const product = await ProductModel.findById(productId);
    if (!product) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }
    const existingProductIndex = cart.products.findIndex((item) =>
      item.product.equals(productId)
    );
    if (existingProductIndex > -1) {
      cart.products[existingProductIndex].quantity += quantity;
    } else {
      cart.products.push({ product: productId, quantity });
    }
    cart.totalPrice += product.price * quantity;

    await cart.save();
    console.log(cart);

    return NextResponse.json({ cart });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
