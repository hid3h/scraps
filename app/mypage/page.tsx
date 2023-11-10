import { ScrapSummary } from "@/app/_components/ScrapSummary";
import { fetchScrapSummary } from "../lib/data";
import { fetchCurrentUser } from "@/auth";
import { Profile } from "../_components/Profile";

export default async function Mypage({}: {}) {
  const currentUser = await fetchCurrentUser();
  const scrapSummary = await fetchScrapSummary();

  return (
    <div className="flex justify-center">
      <div className="flex-1 max-w-screen-sm">
        <main className="p-4 flex-auto bg-white">
          <Profile
            screenName={
              currentUser.systemInitialUserScreenNaming?.screenName || ""
            }
          />
        </main>
        <div className="mt-4 p-4 bg-white">
          <ScrapSummary scraps={scrapSummary} />
        </div>
      </div>
    </div>
  );
}
