import dbConnect from "@/lib/dbConnect";
import ProductModel from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await dbConnect();
  try {
    const url = new URL(req.url);
    const filter: any = {};

    // Filter by category if provided
    const category = url.searchParams.get("category");
    if (category) {
      filter.category = category;
    }

    // Filter by productType if provided
    const productType = url.searchParams.get("productType");
    if (productType) {
      filter.productType = productType;
    }

    // Filter by price range if provided
    const minPrice = url.searchParams.get("minPrice");
    const maxPrice = url.searchParams.get("maxPrice");
    if (minPrice && maxPrice) {
      filter.price = { $gte: minPrice, $lte: maxPrice };
    } else if (minPrice) {
      filter.price = { $gte: minPrice };
    } else if (maxPrice) {
      filter.price = { $lte: maxPrice };
    }

    // Filter by brand if provided
    const brand = url.searchParams.get("brand");
    if (brand) {
      filter.brand = brand;
    }

    // Build sorting object based on query parameters
    let sort: any = { dateAdded: -1 }; // Default sort by dateAdded

    const sortBy = url.searchParams.get("sortBy");
    const sortOrder = url.searchParams.get("sortOrder") === "asc" ? 1 : -1;

    if (sortBy) {
      if (
        sortBy === "price" ||
        sortBy === "brand" ||
        sortBy === "productType"
      ) {
        sort = { [sortBy]: sortOrder };
      }
    }

    // Fetch products with applied filters and sorting
    const products = await ProductModel.find(filter)
      .sort(sort)
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
