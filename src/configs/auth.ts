import UserModel from "@/models/User";
import type { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

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
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const user = await UserModel.findOne({ email: credentials.email });
        if (user && user.password === credentials.password) {
          const { password, ...userWithoutPass } = user;

          return userWithoutPass as User;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};
