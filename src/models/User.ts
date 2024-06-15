import mongoose, { Model, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
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
      trim: true,
      minlength: [6, "Password cannot be less than 6 characters"],
    },
    avatarUrl: {
      type: String,
      trim: true,
      default: "https://picsum.photos/id/237/100/100",
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const UserModel: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default UserModel;
