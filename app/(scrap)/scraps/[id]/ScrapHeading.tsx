"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteScrap } from "@/app/lib/actions";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const ScrapHeading = ({
  scrap,
  isDisplayScrapMenu,
}: {
  scrap: {
    id: string;
    title: string;
    postedAtStr: string;
    user: {
      id: string;
    };
  };
  isDisplayScrapMenu: boolean;
}) => {
  const formAction = deleteScrap.bind(null, scrap.id);

  return (
    <div className="border-b border-gray-200 pb-5 mx-4">
      <div className="flex">
        <div className="flex-1">
          <h1
            id="message-heading"
            className="text-base font-semibold leading-6 text-gray-900"
          >
            {scrap.title}
          </h1>
          <p className="mt-1 truncate text-sm text-gray-500">
            作成日時: {scrap.postedAtStr}
          </p>
        </div>

        {isDisplayScrapMenu && (
          <div>
            <Menu as="div" className="relative ml-3 inline-block text-left">
              <div>
                <Menu.Button className="flex items-center rounded-full bg-white p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon
                    className="h-5 w-5"
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
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
                            Delete
                          </button>
                        </form>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        )}
      </div>
    </div>
  );
};
