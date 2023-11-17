import { Profile } from "@/app/_components/Profile";
import { ScrapSummary } from "@/app/_components/ScrapSummary";
import { fetchUser, fetchUserScrapSummary } from "@/app/lib/data";

export default async function User({
  params,
}: {
  params: { screenName: string };
}) {
  const screenName = params.screenName;
  const user = await fetchUser({ screenName });
  const userScrapSummary = await fetchUserScrapSummary({ user });

  return (
    <div className="flex justify-center">
      <div className="flex-1 max-w-screen-sm">
        <main className="p-4 flex-auto bg-white">
          <Profile screenName={screenName} />
        </main>
        <div className="mt-4 p-4 bg-white">
          <ScrapSummary scraps={userScrapSummary} />
        </div>
      </div>
    </div>
  );
}
