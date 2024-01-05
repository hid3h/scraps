"use client";

//@ts-expect-error
// https://github.com/vercel/next.js/issues/56041
import { useFormStatus } from "react-dom";
import { postScrap } from "../../lib/actions";

// コンポーネントとして切り出さないとuseFormStatusが動かない...?
const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      スクラップを作成
    </button>
  );
};

export default function CreateScrapForm() {
  return (
    <>
      <form action={postScrap}>
        <label htmlFor="title" className="sr-only">
          title
        </label>
        <input
          type="input"
          name="title"
          id="title"
          className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
          placeholder="タイトルを入力"
          required
        />
        <div className="mt-4 flex justify-end">
          <SubmitButton />
        </div>
      </form>
    </>
  );
}
