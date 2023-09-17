import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import prisma from "../db";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  theme: {
    colorScheme: "light", // "auto" | "dark" | "light"
    brandColor: "00000", // Hex color code
    logo: "", // Absolute URL to image
    buttonText: "あい", // Hex color code
  },
};

export const fetchCurrentUser = async () => {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  if (!userEmail) throw new Error("user not found");
  return await prisma.user.findUniqueOrThrow({
    where: {
      email: userEmail,
    },
  });
};
