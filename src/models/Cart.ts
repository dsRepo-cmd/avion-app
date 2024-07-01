import { CartBase } from "@/types/cart";
import mongoose, { Model, Schema, Document, Types } from "mongoose";

export interface ICartProduct {
  product: Types.ObjectId;
  quantity: number;
}

export interface ICart extends Document, CartBase {
  _id: Types.ObjectId;
  updatedAt: Date;
  createdAt: Date;
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
      default: 1,
    },
  },
  {
    _id: false,
  }
);

const CartSchema = new mongoose.Schema<ICart>(
  {
    userIdentifier: {
      type: String,

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
    timestamps: true,
  }
);

const CartModel: Model<ICart> =
  mongoose.models.Cart || mongoose.model<ICart>("Cart", CartSchema);

export default CartModel;
