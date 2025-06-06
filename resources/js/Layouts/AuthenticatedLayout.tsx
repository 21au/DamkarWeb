import Dropdown from '@/components/Dropdown';
import NavLink from '@/components/NavLink';
import ResponsiveNavLink from '@/components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';

export default function Authenticated({
  header,
  children,
}: PropsWithChildren<{ header?: ReactNode }>) {
  const user = usePage().props.auth.user;

  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  return (
    <div className="min-h-screen bg-birudongker">
      <nav className="border-b border-gray-800 border-b-4 bg-birudongker p-4">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex shrink-0 items-center">
                <Link href="/" className="inline-block w-16">
                  <img src="/images/icon/logo-damkar.svg" />
                </Link>
                <h1 className="text-2xl text-bold hidden xl:inline-block text-white">
                  Damkar Access
                </h1>
              </div>
            </div>

            <div className="hidden lg:w-[845px] lg:gap-16 md:gap-4 sm:rounded-xl sm:justify-center sm:items-center sm:flex sm:bg-oren">
              <NavLink
                href="/dashboard"
                icon={
                  <img
                    src="/images/icon/browse_activity.svg"
                    alt="Pemantauan"
                    className="w-8 h-8"
                  />
                }
                label="Pemantauan"
                active={route().current('dashboard')}
              />
              <NavLink
                href="/laporan"
                icon={
                  <img
                    src="/images/icon/lab_profile.svg"
                    alt="Laporan masuk"
                    className="w-8 h-8"
                  />
                }
                label="Laporan Masuk"
                active={route().current('laporan.page')}
              />

              <NavLink
                href="/berita"
                icon={
                  <img
                    src="/images/icon/newspaper.png"
                    alt="berita"
                    className="w-8 h-8"
                  />
                }
                label="Berita"
                active={route().current('berita')}
              />

              <NavLink
                href="/youtube"
                icon={
                  <img
                    src="/images/icon/youtube.png"
                    alt="youtube"
                    className="w-8 h-8"
                  />
                }
                label="youtube"
                active={route().current('youtube')}
              />

              <NavLink
                href="/profile"
                icon={
                  <img
                    src="/images/icon/account.png"
                    alt="Profile"
                    className="w-8 h-8"
                  />
                }
                label="Profile"
                active={route().current('profile.edit')}
              />
            </div>
            <div className="hidden sm:ms-6 sm:flex sm:items-center">
              <div className="relative ms-3">
                <Dropdown>
                  <Dropdown.Trigger>
                    <span className="inline-flex rounded-md">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                      >
                        {user.name}

                        <svg
                          className="-me-0.5 ms-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  </Dropdown.Trigger>

                  <Dropdown.Content>
                    <Dropdown.Link href={route('profile.edit')}>
                      Profile
                    </Dropdown.Link>
                    <Dropdown.Link
                      href={route('logout')}
                      method="post"
                      as="button"
                    >
                      Log Out
                    </Dropdown.Link>
                  </Dropdown.Content>
                </Dropdown>
              </div>
            </div>

            <div className="-me-2 flex items-center sm:hidden">
              <button
                onClick={() =>
                  setShowingNavigationDropdown(
                    (previousState) => !previousState,
                  )
                }
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={
                      !showingNavigationDropdown ? 'inline-flex' : 'hidden'
                    }
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    className={
                      showingNavigationDropdown ? 'inline-flex' : 'hidden'
                    }
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={
            (showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'
          }
        >
          <div className="space-y-1 pb-3 pt-2">
            <ResponsiveNavLink
              href={route('dashboard')}
              active={route().current('dashboard')}
            >
              Pemantauan
            </ResponsiveNavLink>
          </div>

          <div className="border-t border-gray-200 pb-1 pt-4">
            <div className="px-4">
              <div className="text-base font-medium text-gray-800">
                {user.name}
              </div>
              <div className="text-sm font-medium text-gray-500">
                {user.email}
              </div>
            </div>

            <div className="mt-3 space-y-1">
              <ResponsiveNavLink href={route('profile.edit')}>
                Profile
              </ResponsiveNavLink>
              <ResponsiveNavLink
                method="post"
                href={route('logout')}
                as="button"
              >
                Log Out
              </ResponsiveNavLink>
            </div>
          </div>
        </div>
      </nav>

      {header && (
        <header className="bg-birudongker shadow">
          <div className="px-4 py-6 sm:px-6 lg:px-8">{header}</div>
        </header>
      )}

      <main>{children}</main>
    </div>
  );
}
