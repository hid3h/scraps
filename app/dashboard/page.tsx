import { authOptions } from "@/next-auth-options";
import { getServerSession } from "next-auth";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  console.log("session", session);

  return (
    <div>
      aaaa
    </div>
  );
}
