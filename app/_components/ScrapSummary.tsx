import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const ScrapSummary = ({
  scraps,
}: {
  scraps: {
    id: string;
    title: string;
    postedAt: string;
    commentCount: number;
  }[];
}) => {
  return (
    <>
      {scraps.length === 0 ? (
        <p className="text-center text-gray-500">
          スクラップはまだ作成されていません
        </p>
      ) : (
        <ul role="list" className="divide-y divide-gray-100">
          {scraps.map((scrap) => (
            <li key={scrap.id} className="py-5">
              <p className="font-semibold leading-6 text-gray-900">
                <Link href={"/scraps/" + scrap.id} className="hover:underline">
                  {scrap.title}
                </Link>
              </p>
              <div className="mt-1 flex items-center justify-between text-xs leading-5 text-gray-500">
                <p>
                  <time dateTime={scrap.postedAt}>{scrap.postedAt}</time>
                </p>
                <dl className="">
                  <div className="flex w-16 gap-x-2.5">
                    <dt>
                      <span className="sr-only">Total comments</span>
                      <ChatBubbleLeftIcon
                        className="h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd className="text-sm leading-6 text-gray-900">
                      {scrap.commentCount}
                    </dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
