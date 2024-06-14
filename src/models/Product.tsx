import mongoose, { Model, Document, Types } from "mongoose";

export enum ProductType {
  Furniture = "Furniture",
  Accessories = "Accessories",
  LightFittings = "Light fittings",
  Sofas = "Sofas",
  Homeware = "Homeware",
}

export enum ProductCategory {
  PlantPots = "Plant pots",
  Ceramics = "Ceramics",
  Tables = "Tables",
  Tableware = "Tableware",
  Cutlery = "Cutlery",
  Chairs = "Chairs",
  Crockery = "Crockery",
}

export interface IProduct extends Document {
  _id: Types.ObjectId;
  price: string;
  designer: string;
  productType: ProductType;
  name: string;
  description: string;
  category: ProductCategory;
  brand: string;
  dateAdded: Date;
  imageSrc: string;
  isPhotoBig?: boolean;
  height: string;
  width: string;
  depth: string;
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
