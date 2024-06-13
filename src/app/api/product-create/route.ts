import dbConnect from "@/lib/dbConnect";
import ProductModel from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await dbConnect();
  try {
    const productData = await req.json();
    console.log(
      "productData==================================================",
      productData
    );
    const newProduct = new ProductModel(productData);
    await newProduct.save();
    return NextResponse.json({ newProduct });
  } catch (error) {
    console.error("Error fetching stories:", error);
    return NextResponse.json(
      { error: "Failed to fetch stories" },
      { status: 500 }
    );
  }
}
