import mongoose, { Model, Document } from "mongoose";

export type ProductType =
  | "Furniture"
  | "Accessories"
  | "Light fittings"
  | "Sofas"
  | "Homeware";

export type ProductCategory =
  | "Plant pots"
  | "Ceramics"
  | "Tables"
  | "Tableware"
  | "Cutlery";

export interface ProductDimensions {
  height: string;
  width: string;
  depth: string;
}

export interface IProduct extends Document {
  price: string;
  designer: string;
  productType: ProductType;
  name: string;
  description: string;
  dimensions: ProductDimensions;
  category: ProductCategory;
  brand: string;
  dateAdded: Date;
  imageSrc: string;
}

const ProductSchema = new mongoose.Schema<IProduct>(
  {
    price: {
      type: String,
      required: true,
      trim: true,
    },
    designer: {
      type: String,
      required: true,
      trim: true,
    },
    productType: {
      type: String,
      required: true,
      enum: ["Furniture", "Accessories", "Light fittings", "Sofas", "Homeware"],
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: [5000, "Description cannot be more than 5000 characters"],
    },
    dimensions: {
      height: { type: String, required: true },
      width: { type: String, required: true },
      depth: { type: String, required: true },
    },
    category: {
      type: String,
      required: true,
      enum: ["Plant pots", "Ceramics", "Tables", "Tableware", "Cutlery"],
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    dateAdded: {
      type: Date,
      default: Date.now,
    },
    imageSrc: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default ProductModel;
