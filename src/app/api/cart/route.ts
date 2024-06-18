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

export const DELETE = async (req: NextRequest) => {
  await dbConnect();
  try {
    const { userEmail, productId } = await req.json();

    if (!userEmail || !productId) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    let cart = await CartModel.findOne({ userEmail });
    if (!cart) {
      return NextResponse.json({ error: "Cart not found" }, { status: 404 });
    }

    const productIndex = cart.products.findIndex(
      (item) => item.product.toString() === productId
    );

    if (productIndex === -1) {
      return NextResponse.json(
        { error: "Product not found in cart" },
        { status: 404 }
      );
    }

    const product = await ProductModel.findById(productId);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    cart.totalPrice -= cart.products[productIndex].quantity * product.price;
    cart.products.splice(productIndex, 1);

    await cart.save();

    const updatedCart = await CartModel.findOne({ userEmail }).populate({
      path: "products.product",
      model: ProductModel,
    });

    return NextResponse.json(updatedCart);
  } catch (err: any) {
    return new NextResponse(err.message || "Internal Server Error", {
      status: 500,
    });
  }
};

export const PATCH = async (req: NextRequest) => {
  await dbConnect();
  try {
    const { userEmail, productId, quantity } = await req.json();

    if (!userEmail || !productId || quantity == null) {
      return new NextResponse("Invalid data", { status: 400 });
    }

    let cart = await CartModel.findOne({ userEmail });
    if (!cart) {
      return new NextResponse("Cart not found", { status: 404 });
    }

    const product = await ProductModel.findById(productId);
    if (!product) {
      return new NextResponse("Product not found", { status: 404 });
    }

    const productIndex = cart.products.findIndex(
      (item) => item.product.toString() === productId
    );

    if (productIndex === -1) {
      return new NextResponse("Product not found in cart", { status: 404 });
    }

    const currentQuantity = cart.products[productIndex].quantity;
    cart.products[productIndex].quantity = quantity;

    // Update total price
    cart.totalPrice += (quantity - currentQuantity) * product.price;

    await cart.save();

    // Populate the cart products to return full product details
    const updatedCart = await CartModel.findOne({ userEmail }).populate({
      path: "products.product",
      model: ProductModel,
    });

    // Return the updated cart with full product details
    return NextResponse.json(updatedCart);
  } catch (err: any) {
    return new NextResponse(err.message || "Internal Server Error", {
      status: 500,
    });
  }
};
