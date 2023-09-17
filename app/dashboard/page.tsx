import {
  createScrap,
  createScrapSchema,
} from "@/app/services/create-scraps-service";
import { redirect } from "next/navigation";
import StackedList from "./StackedList";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const createScrapAction = async (formData: FormData) => {
    "use server";
    const parsed = createScrapSchema.parse({ title: formData.get("title") });
    const scrap = await createScrap({
      title: parsed.title,
    });
    return redirect(`/scraps/${scrap.id}`);
  };

  return (
    <div className="flex justify-center">
      <div className="flex-1 max-w-screen-sm">
        <form action={createScrapAction}>
          <label htmlFor="title" className="sr-only">
            title
          </label>
          <input
            type="input"
            name="title"
            id="title"
            className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
            placeholder="タイトルを入力"
          />
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              スクラップを作成
            </button>
          </div>
        </form>

        <StackedList />
      </div>
    </div>
  );
}
