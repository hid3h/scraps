import "./globals.css";
import type { Metadata } from "next";
import Header from "./_components/Header";
import { auth } from "@/auth";
import { SITE_TITLE } from "./constant";
import { GA } from "./_components/GA";
import { Adsense } from "./_components/Adsense";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const user = session?.user;

  return (
    <html lang="ja">
      <GA />
      <Adsense />
      <body className="bg-gray-100">
        <Header authenticated={!!user} />
        <div className="mt-4">{children}</div>
      </body>
    </html>
  );
}
