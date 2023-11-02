"use client";

//@ts-expect-error
// https://github.com/vercel/next.js/issues/56041
import { useFormStatus } from "react-dom";
import { addScrapComment } from "@/app/lib/actions";
import { ScrapPosting } from "@prisma/client";
import { useRef } from "react";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {pending ? "..." : "コメント追加"}
    </button>
  );
};

export const AddScrapCommentForm = ({ scrap }: { scrap: ScrapPosting }) => {
  const formAction = addScrapComment.bind(null, scrap.id);

  // https://note.com/komzweb/n/n423d64754f39
  // これでいいのか？
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        await formAction(formData);
        ref.current?.reset();
      }}
    >
      <div className="mt-4">
        <textarea
          rows={4}
          name="body"
          className="px-6 block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
          required
        />
      </div>
      <div className="mt-2 flex justify-end">
        <SubmitButton />
      </div>
    </form>
  );
};
