import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <div>
      <Link href="/dashboard">dashboard</Link>
      <Link href="/scraps/hoge">scraps detail</Link>
    </div>
  );
}
