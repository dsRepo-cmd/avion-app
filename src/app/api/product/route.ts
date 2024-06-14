import dbConnect from "@/lib/dbConnect";
import ProductModel from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await dbConnect();
  try {
    const products = await ProductModel.find()
      .sort()
      .select("_id name price imageSrc isPhotoBig")
      .exec();

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
