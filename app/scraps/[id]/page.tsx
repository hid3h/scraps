import { findScrap } from "@/app/services/find-scrap-service";
import {
  postScrapComment,
  postScrapCommentSchema,
} from "@/app/services/post-scrap-comment-service";
import { revalidatePath } from "next/cache";
import ScrapHeading from "./ScrapHeading";

export default async function Scrap({ params }: { params: { id: string } }) {
  const { scrap, scrapComments } = await findScrap({
    id: params.id,
  });

  const postScrapCommentAction = async (formData: FormData) => {
    "use server";
    const parsed = postScrapCommentSchema.omit({ id: true }).parse({
      body: formData.get("body"),
    });
    await postScrapComment({
      id: params.id,
      body: parsed.body,
    });
    revalidatePath("/");
  };

  return (
    <div className="flex justify-center">
      <div className="flex-1 max-w-screen-sm">
        <ScrapHeading scrap={scrap} />
        <ul role="list" className="space-y-3">
          {scrapComments.map((scrapComment) => (
            <li
              key={scrapComment.id}
              className="overflow-hidden bg-white py-4 shadow rounded-md px-6"
            >
              {scrapComment.content}
            </li>
          ))}
        </ul>
        <form action={postScrapCommentAction}>
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
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              コメント追加
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
