// https://nextjs.org/learn/dashboard-app/adding-authentication#password-hashing
// ここでルートに作られていたので

import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { type Adapter } from "@auth/core/adapters";
const crypto = require("crypto");

const generateRandomString = (length: number) => {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;

  while (result.length < length) {
    const buffer = crypto.randomBytes(length);
    for (let i = 0; i < buffer.length; i++) {
      const charCode = buffer[i] % charactersLength;
      if (result.length < length) {
        result += characters.charAt(charCode);
      }
    }
  }

  return result;
};

// https://authjs.dev/reference/core/adapters#usage
const adapter: Adapter = {
  ...PrismaAdapter(prisma),
  async createUser(user) {
    const prismaUser = await prisma.user.create({
      data: {
        ...user,
        // screenNameに6文字ランダム英数字
        systemInitialUserScreenNaming: {
          create: { screenName: generateRandomString(6) },
        },
      },
    });
    return {
      id: prismaUser.id,
      name: prismaUser.name,
      email: prismaUser.email ?? "", // null の場合の代替値を提供する
      emailVerified: prismaUser.emailVerified,
      image: prismaUser.image,
      createdAt: prismaUser.createdAt,
    };
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  // signin時にJWEInvalid: Invalid Compact JWEエラーが出るので使わない
  adapter,
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
