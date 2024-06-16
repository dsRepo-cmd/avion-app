import mongoose, { Model, Schema, Document, Types } from "mongoose";
import { IProduct } from "./Product";

export interface ICartProduct {
  product: Types.ObjectId | IProduct;
  quantity: number;
}

export interface ICart extends Document {
  _id: Types.ObjectId;
  userEmail: string;
  products: ICartProduct[];
  totalPrice: number;
  status: "active" | "completed" | "canceled";
  createdAt: Date;
  updatedAt: Date;
}

const CartProductSchema = new mongoose.Schema<ICartProduct>(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, "Quantity cannot be less than 1"],
    },
  },
  {
    _id: false,
  }
);

const CartSchema = new mongoose.Schema<ICart>(
  {
    userEmail: {
      type: String,
      ref: "User",
      required: true,
    },
    products: [CartProductSchema],
    totalPrice: {
      type: Number,
      required: true,
      min: [0, "Total price cannot be negative"],
      default: 0,
    },
    status: {
      type: String,
      enum: ["active", "completed", "canceled"],
      default: "active",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

const CartModel: Model<ICart> =
  mongoose.models.Cart || mongoose.model<ICart>("Cart", CartSchema);

export default CartModel;
