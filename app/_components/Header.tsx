"use client";
import { Disclosure, Menu, Transition, Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { SITE_TITLE } from "../constant";
import { Fragment, use, useState } from "react";
import { logout } from "../lib/actions";
import { SigninForm } from "./SigninForm";
import { usePathname } from "next/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header(props: {
  currentUser: { id: string; screenName: string } | null;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const { currentUser } = props;
  const isDispalyLoginButon = pathname !== "/";

  return (
    <>
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-6">
              <div className="relative flex h-16 justify-between">
                <div className="flex flex-1 items-stretch justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link href={currentUser ? "/dashboard" : "/"}>
                      {SITE_TITLE}
                    </Link>
                  </div>
                </div>
                {isDispalyLoginButon && (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <Menu as="div" className="relative ml-3">
                      <div>
                        {currentUser ? (
                          <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            {open ? (
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <Bars3Icon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </Menu.Button>
                        ) : (
                          <div
                            onClick={() => setOpen(true)}
                            className="cursor-pointer ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            ログイン
                          </div>
                        )}
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="px-4 py-3">
                            <a
                              href={`/u/${currentUser?.screenName}`}
                              className="truncate text-sm font-medium text-gray-900"
                            >
                              @{currentUser?.screenName}
                            </a>
                          </div>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/dashboard"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                ダッシュボード
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <form action={logout}>
                                <button
                                  type="submit"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block w-full text-left px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  ログアウト
                                </button>
                              </form>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </Disclosure>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full justify-center p-4 items-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-sm p-6">
                  <div className="absolute right-0 top-0 pr-4 pt-4 block">
                    <button
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      ログインまたは登録
                    </Dialog.Title>
                  </div>
                  <SigninForm />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
