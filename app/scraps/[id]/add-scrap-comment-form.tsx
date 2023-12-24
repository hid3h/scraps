"use client";

import { addScrapComment } from "@/app/lib/actions";
import { ScrapPosting } from "@prisma/client";
import { useRef } from "react";
//@ts-expect-error
// https://github.com/vercel/next.js/issues/56041
import { useFormStatus } from "react-dom";

export const AddScrapCommentForm = ({
  scrap,
  enabled,
}: {
  scrap: ScrapPosting;
  enabled: boolean;
}) => {
  // https://note.com/komzweb/n/n423d64754f39
  // これでいいのか？
  const ref = useRef<HTMLFormElement>(null);

  if (!enabled) return null;

  const formAction = addScrapComment.bind(null, scrap);
  return (
    <div className="bg-white mt-4 p-4">
      <form
        ref={ref}
        action={async (formData) => {
          await formAction(formData);
          ref.current?.reset();
        }}
      >
        <label htmlFor="comment" className="sr-only">
          Comment
        </label>
        <div>
          <textarea
            rows={5}
            name="body"
            id="comment"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            placeholder="Add your comment..."
            defaultValue={""}
            required
          />
        </div>
        <div className="mt-2 flex justify-end">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

// コンポーネントとして切り出さないとuseFormStatusが動かない...?
const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      コメントを追加
    </button>
  );
};
