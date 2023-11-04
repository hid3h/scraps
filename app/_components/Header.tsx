"use client";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { SITE_TITLE } from "../constant";
import { Fragment } from "react";
import { logout } from "../lib/actions";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header(props: { authenticated: boolean }) {
  const { authenticated } = props;

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative flex h-16 justify-between">
              <div className="flex flex-1 items-stretch justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href={authenticated ? "/dashboard" : "/"}>
                    {SITE_TITLE}
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    {authenticated ? (
                      <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        {open ? (
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        ) : (
                          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        )}
                      </Menu.Button>
                    ) : (
                      <a
                        href="#"
                        className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        ログイン
                      </a>
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
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
