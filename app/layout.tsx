import "./globals.css";
import type { Metadata } from "next";
import Header from "./_components/Header";
import { auth, fetchCurrentUser } from "@/auth";
import { SITE_TITLE } from "./constant";
import { GA } from "./_components/GA";
import { Adsense } from "./_components/Adsense";
import { Footer } from "./_components/Footer";

const title = `${SITE_TITLE} | 公開メモサービス`;
export const SITE_DESCRIPTION = `日々のメモ、情報整理、日記。個人的な思いつきや記録が、意外な形で誰かの役に立つかもしれません。私たちの公開メモサービスは、長い記事を書くことなく、あなたのアイデアや情報を素早く整理し、共有する空間を提供します。`;
export const metadata: Metadata = {
  title,
  description: SITE_DESCRIPTION,
  openGraph: {
    title,
    description: SITE_DESCRIPTION,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await fetchCurrentUser();

  return (
    <html lang="ja">
      <GA />
      <Adsense />
      <body className="bg-gray-100 flex flex-col min-h-screen">
        <Header currentUser={currentUser} />
        <div className="mt-4 flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
