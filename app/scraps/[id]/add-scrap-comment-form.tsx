"use client";

import { addScrapComment } from "@/app/lib/actions";
import { ScrapPosting } from "@prisma/client";
import { useRef, useState } from "react";
import { Tab } from "@headlessui/react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { AppMarkdown } from "@/app/_components/AppMarkdown";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

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
  const [commentPreview, setCommentPreview] = useState("");

  const hiddenFileInput = useRef<HTMLInputElement>(null);

  if (!enabled) return null;

  const formAction = addScrapComment.bind(null, scrap);

  const handleTabChange = (index: number) => {
    if (index == 0) return;
    setCommentPreview(ref.current?.body.value);
  };

  const handleFileUploadClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const imageFile = e.target.files?.[0];
    if (!imageFile) return;

    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      const response = await fetch("/api/scrap-comment-images", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");

      const data = await response.json();
      const imageUrl = data.imageUrl;

      // Markdownに画像のURLを挿入
      const sentence = ref.current!.body.value;
      const len = sentence.length;
      const pos = ref.current?.body.selectionStart;

      const before = sentence.substr(0, pos);
      const word = `![](${imageUrl})\n`;
      const after = sentence.substr(pos, len);

      ref.current!.body.value = before + word + after;
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      // ファイル選択をリセット
      hiddenFileInput.current!.value = "";
    }
  };

  return (
    <div className="bg-white mt-4 p-4">
      <form
        ref={ref}
        action={async (formData) => {
          await formAction(formData);
          ref.current?.reset();
        }}
      >
        <Tab.Group onChange={handleTabChange}>
          {({ selectedIndex }) => (
            <>
              <Tab.List className="flex items-center">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      selected
                        ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                        : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900",
                      "rounded-md border border-transparent px-3 py-1.5 text-sm font-medium"
                    )
                  }
                >
                  Write
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      selected
                        ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                        : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900",
                      "ml-2 rounded-md border border-transparent px-3 py-1.5 text-sm font-medium"
                    )
                  }
                >
                  Preview
                </Tab>

                {/* These buttons are here simply as examples and don't actually do anything. */}
                {selectedIndex === 0 ? (
                  <div className="ml-auto flex items-center space-x-5">
                    <div className="flex items-center">
                      <button
                        onClick={handleFileUploadClick}
                        type="button"
                        className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Insert photo</span>
                        <PhotoIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                      <input
                        name="image"
                        ref={hiddenFileInput}
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept=".jpg,.gif,.png,image/gif,image/jpeg,image/png"
                      />
                    </div>
                  </div>
                ) : null}
              </Tab.List>
              <Tab.Panels className="mt-2">
                <Tab.Panel className="-m-0.5 rounded-lg p-0.5" unmount={false}>
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
                </Tab.Panel>
                <Tab.Panel className="-m-0.5 rounded-lg p-0.5" unmount={false}>
                  <div className="border-b">
                    <div className="mx-px mt-px px-3 pb-12 pt-2 text-gray-800">
                      <AppMarkdown body={commentPreview} />
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
        <div className="mt-2 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};
