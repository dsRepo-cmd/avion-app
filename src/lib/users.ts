import UserModel from "@/models/User";
import dbConnect from "./dbConnect";

export async function createUser(user: any) {
  await dbConnect();
  try {
    const newUser = await UserModel.create(user);
    return newUser;
  } catch (error) {
    console.log(error);
  }
}
