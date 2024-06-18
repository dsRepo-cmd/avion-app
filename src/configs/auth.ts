import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";
import type { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(
        credentials: { email: string; password: string } | undefined
      ) {
        if (!credentials) {
          return null;
        }

        await dbConnect();

        try {
          const user = await UserModel.findOne({
            email: credentials.email,
          }).lean();
          if (!user) {
            throw new Error("User with this email not found");
          }

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordCorrect) {
            throw new Error("Incorrect password");
          }

          return { ...user, id: user._id.toString() };
        } catch (err: any) {
          throw new Error(err.message || "Authorization error");
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};
