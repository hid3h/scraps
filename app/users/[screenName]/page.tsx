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
          <div className="mx-auto max-w-2xl space-y-20">
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                プロフィール
              </h2>
              <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                <div className="pt-6 flex">
                  <dt className="font-medium text-gray-900 w-64 flex-none pr-6">
                    Screen name
                  </dt>
                  <dd className="flex justify-between gap-x-6 mt-0 flex-auto">
                    <div className="text-gray-900">{screenName}</div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </main>
        <div className="mt-4 p-4 bg-white">
          <ScrapSummary scraps={userScrapSummary} />
        </div>
      </div>
    </div>
  );
}
