import { authOptions } from "@/lib/next-auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log("session", session);

  return (
    <div>
      <Link href="/dashboard">dashboard</Link>
      <Link href="/scraps/hoge">scraps detail</Link>
    </div>
  );
}
