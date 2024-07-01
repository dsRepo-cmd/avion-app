import mongoose from "mongoose";
import type { Model, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  image?: string;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: [100, "Name cannot be more than 100 characters"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: [100, "Email cannot be more than 100 characters"],
      match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "Password cannot be less than 6 characters"],
    },
    image: {
      type: String,
      trim: true,
      default:
        "https://lh3.googleusercontent.com/a/ACg8ocJo2h54hJKDBE-_lV4pMkwIz5VX1PHJEWSv_OP6qTK1LilysctK=s96-c",
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const UserModel: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default UserModel;
