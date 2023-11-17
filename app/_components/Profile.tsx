export const Profile = ({ screenName }: { screenName: string }) => {
  return (
    <div className="mx-auto max-w-2xl space-y-20">
      <div>
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          プロフィール
        </h2>
        <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
          <div className="pt-6 flex">
            <dt className="font-medium text-gray-900 w-64 flex-none pr-6">
              Account
            </dt>
            <dd className="flex justify-between gap-x-6 mt-0 flex-auto">
              <div className="text-gray-900">{screenName}</div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
