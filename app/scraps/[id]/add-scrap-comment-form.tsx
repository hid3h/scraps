"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { experimental_useFormState as useFormState } from "react-dom";
import { postScrapCommentAction } from "@/app/scraps/[id]/actions";
import ErrorAlert from "@/app/_components/ErrorAlert";

const initialState = {
  message: null,
};

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

export const AddScrapCommentForm = () => {
  const [state, formAction] = useFormState(
    postScrapCommentAction,
    initialState
  );

  const errorMessages = state.message ? [state.message] : [];

  return (
    <form action={formAction}>
      {errorMessages.length > 0 && (
        <div className="mt-4">
          <ErrorAlert message={errorMessages} />
        </div>
      )}
      <div className="mt-4">
        <textarea
          rows={4}
          name="body"
          id="comment"
          className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
          defaultValue={""}
        />
      </div>
      <div className="mt-2 flex justify-end">
        <SubmitButton />
      </div>
    </form>
  );
};
