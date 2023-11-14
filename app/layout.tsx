import "./globals.css";
import type { Metadata } from "next";
import Header from "./_components/Header";
import { auth } from "@/auth";
import { SITE_TITLE } from "./constant";
import { GA } from "./_components/GA";
import { Adsense } from "./_components/Adsense";

const title = `${SITE_TITLE} | 公開メモサービス`;
const description = `${SITE_TITLE}は長い記事を書くことなく、瞬時に思いつきを共有。私たちの公開メモサービスは、あなたのアイデアや情報を素早く整理し、世界と共有するための最適な場所です。`;
export const metadata: Metadata = {
  title,
  description,
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
