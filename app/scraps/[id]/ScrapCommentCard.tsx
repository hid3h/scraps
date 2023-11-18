"use client";

import { editScrapComment } from "@/app/lib/actions";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useRef, useState } from "react";
import { AppMarkdown } from "@/app/_components/AppMarkdown";
import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const ScrapCommentCard = ({
  scrapCommentingId,
  isDisplayCommentMenu,
  commentedAtStr,
  commentBody,
}: {
  scrapCommentingId: string;
  isDisplayCommentMenu: boolean;
  commentedAtStr: string;
  commentBody: string;
}) => {
  const ref = useRef<HTMLFormElement>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [commentPreview, setCommentPreview] = useState("");

  const formAction = editScrapComment.bind(null, scrapCommentingId);

  const toEditMode = () => {
    setIsEditMode(true);
  };

  const handleTabChange = (index: number) => {
    if (index == 0) return;
    setCommentPreview(ref.current?.body.value);
  };

  const cancelEdit = () => {
    setIsEditMode(false);
  };

  return (
    <div className="bg-white py-4 shadow rounded-md px-6 break-words">
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">{commentedAtStr}</div>
        {isDisplayCommentMenu && (
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-full bg-white px-2 py-2 hover:bg-gray-50">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={toEditMode}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "group flex items-center px-4 py-2 text-sm w-full"
                        )}
                      >
                        <PencilSquareIcon
                          className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        編集
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <form action={formAction}>
                        <button
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "group flex items-center px-4 py-2 text-sm w-full"
                          )}
                        >
                          <TrashIcon
                            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          削除
                        </button>
                      </form>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        )}
      </div>
      <div className="mt-2">
        {isEditMode ? (
          <form
            ref={ref}
            action={async (formData) => {
              await formAction(formData);
              ref.current?.reset();
              setIsEditMode(false);
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
                  </Tab.List>
                  <Tab.Panels className="mt-2">
                    <Tab.Panel
                      className="-m-0.5 rounded-lg p-0.5"
                      unmount={false}
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
                          defaultValue={commentBody}
                          required
                        />
                      </div>
                    </Tab.Panel>
                    <Tab.Panel
                      className="-m-0.5 rounded-lg p-0.5"
                      unmount={false}
                    >
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
            <div className="mt-2 flex justify-end space-x-2">
              <button
                onClick={cancelEdit}
                type="button"
                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                キャンセル
              </button>
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                更新する
              </button>
            </div>
          </form>
        ) : (
          <AppMarkdown body={commentBody} />
        )}
      </div>
    </div>
  );
};
