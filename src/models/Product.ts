import mongoose from "mongoose";
import { type Product } from "@/types/product";
import type { Model, Document, Types } from "mongoose";
import { ProductCategory, ProductType } from "@/lib/enums";

export interface IProduct extends Document, Omit<Product, "id"> {
  _id: Types.ObjectId;
}

const ProductSchema = new mongoose.Schema<IProduct>(
  {
    price: { type: Number, required: true, trim: true },
    designer: { type: String, required: true, trim: true },
    productType: {
      type: String,
      required: true,
      enum: Object.values(ProductType),
    },
    name: { type: String, required: true, trim: true },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: [5000, "Description cannot be more than 5000 characters"],
    },
    height: { type: Number },
    width: { type: Number },
    depth: { type: Number },
    category: {
      type: String,
      required: true,
      enum: Object.values(ProductCategory),
    },
    brand: { type: String, required: true, trim: true },
    dateAdded: { type: Date, default: Date.now },
    imageSrc: { type: String, trim: true },

    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

ProductSchema.index({
  name: "text",
  description: "text",
  designer: "text",
  category: "text",
});

const ProductModel: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default ProductModel;
