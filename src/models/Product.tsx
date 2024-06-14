import {
  ProductType,
  ProductCategory,
  IProductBase,
} from "@/app/product/types";
import mongoose, { Model, Document, Types } from "mongoose";

export interface IProduct extends Document, IProductBase {
  _id: Types.ObjectId;
  dateAdded: Date;
  views?: number;
}

const ProductSchema = new mongoose.Schema<IProduct>(
  {
    price: { type: String, required: true, trim: true },
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
    height: { type: String },
    width: { type: String },
    depth: { type: String },
    category: {
      type: String,
      required: true,
      enum: Object.values(ProductCategory),
    },
    brand: { type: String, required: true, trim: true },
    dateAdded: { type: Date, default: Date.now },
    imageSrc: { type: String, trim: true },
    isPhotoBig: { type: Boolean, default: false },
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const ProductModel: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default ProductModel;
