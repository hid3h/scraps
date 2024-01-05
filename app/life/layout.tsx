import "./globals.css";

export default async function LifeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="ja">{children}<div>aaaaaaa</div></html>;
}
