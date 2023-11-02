// https://nextjs.org/learn/dashboard-app/adding-authentication#password-hashing
// ここでルートに作られていたので

import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  // signin時にJWEInvalid: Invalid Compact JWEエラーが出るので使わない
  adapter: PrismaAdapter(prisma),
  session: {
    // asapterを使ってsessionをDBにしていると
    // signin時にJWEInvalid: Invalid Compact JWEエラーが出る
    // なのでjwtにしている
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  theme: {
    colorScheme: "light", // "auto" | "dark" | "light"
  },
});

export const fetchCurrentUser = async () => {
  const session = await auth();
  if (!session || !session.user) {
    throw new Error("not authenticated.");
  }
  const user = await prisma.user.findFirstOrThrow({
    where: { email: session.user?.email },
  });

  return user;
};
