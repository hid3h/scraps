import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function StackedList({
  scraps,
}: {
  scraps: {
    id: string;
    title: string;
    postedAt: string;
    commentCount: number;
  }[];
}) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {scraps.map((scrap) => (
        <li
          key={scrap.id}
          className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap"
        >
          <div>
            <p className="font-semibold leading-6 text-gray-900">
              <Link href={"/scraps/" + scrap.id} className="hover:underline">
                {scrap.title}
              </Link>
            </p>
            <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
              <p>
                <time dateTime={scrap.postedAt}>{scrap.postedAt}</time>
              </p>
            </div>
          </div>
          <dl className="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
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
        </li>
      ))}
    </ul>
  );
}
