import dbConnect from "@/lib/dbConnect";
import ProductModel, { type IProduct } from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await dbConnect();
  try {
    const productData: IProduct = await req.json();

    const formatProductData = (data: IProduct) => {
      return {
        name: data.name,
        description: data.description,
        price: Number(data.price),
        designer: data.designer,
        productType: data.productType,
        category: data.category,
        height: data.height ? Number(data.height) : 0,
        width: data.width ? Number(data.width) : 0,
        depth: data.depth ? Number(data.depth) : 0,
        brand: data.brand,
        imageSrc: data.imageSrc,
      };
    };

    const formattedProductData = formatProductData(productData);

    const newProduct = new ProductModel(formattedProductData);
    await newProduct.save();

    return NextResponse.json("Product created successfully");
  } catch (error) {
    console.error("Error fetching stories:", error);
    return NextResponse.json(
      { error: "Failed to fetch stories" },
      { status: 500 }
    );
  }
}
