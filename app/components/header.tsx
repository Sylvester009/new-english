'use client';

import {
  LogIn,
  LogOut,
  User2,
  UserPlus,
  ChevronDown,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import useUser from '@/hooks/useUser';
import {logout} from '../lib/session';

export default function Header() {
  const pathName = usePathname();
  const isHomepage = pathName === '/';
  const {loading, currentUser} = useUser();

  return (
    <header className="bg-[#FFFDF5]/90 max-w-full backdrop-blur-md border-b border-[#D2691E]/10 shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <a
            className="text-2xl sm:text-3xl font-black tracking-tight text-[#D2691E] font-['Noto_Serif']"
            href="#"
          >
            New English
          </a>
        </div>

        {isHomepage ? (
          <div className="flex items-center gap-4">
            <DropdownMenu>
              {/* <DropdownMenuTrigger asChild>
                <button className="flex items-center justify-center w-10 h-10 cursor-pointer rounded-full border-2 border-orange-600 text-orange-600 hover:bg-orange-50 transition active:scale-95">
                  <CircleUser className="w-5 h-5" />
                </button>
              </DropdownMenuTrigger> */}

              <DropdownMenuContent className="w-56 mr-6 rounded-xl border-[#D2691E]/10">
                <DropdownMenuLabel className="text-sm font-semibold font-['Plus_Jakarta_Sans']">
                  Account
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/login"
                      className="flex items-center gap-2 py-2 cursor-pointer"
                    >
                      <LogIn className="w-4 h-4" />
                      Log In
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link
                      href="/signup"
                      className="flex items-center gap-2 py-2 cursor-pointer"
                    >
                      <UserPlus className="w-4 h-4" />
                      Sign Up
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <p className="px-2 py-1.5 text-xs text-muted-foreground font-['Plus_Jakarta_Sans']">
                  Fresh groceries, pastries, and household essentials delivered
                  daily.
                </p>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild disabled={loading}>
                <button className="flex items-center gap-2 sm:gap-3 px-2 py-1 cursor-pointer rounded-xl hover:bg-[#974400]/5 transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                  {/* Avatar - Always visible */}
                  <div className="flex size-9 sm:size-8 items-center justify-center rounded-full bg-[#974400]/10 text-[#974400] p-4 shrink-0">
                    {loading ? (
                      // Simple loading spinner for the avatar
                      <div className="size-4 animate-spin rounded-full border-2 border-[#974400] border-t-transparent" />
                    ) : currentUser?.name?.charAt(0) ? (
                      currentUser.name.charAt(0)
                    ) : (
                      <User2 className="size-4 sm:size-5" />
                    )}
                  </div>

                  {/* Name & Email - Hidden on mobile, visible on sm+ */}
                  <div className="hidden sm:flex flex-col text-left min-w-[100px]">
                    {loading ? (
                      // Skeleton loader fields while loading
                      <div className="space-y-1.5 animate-pulse">
                        <div className="h-3 w-20 bg-[#3b2a1f]/10 rounded" />
                        <div className="h-2.5 w-28 bg-[#7c6656]/10 rounded" />
                      </div>
                    ) : (
                      <>
                        <span className="text-sm font-semibold text-[#3b2a1f] font-['Plus_Jakarta_Sans']">
                          {currentUser?.name || 'Guest User'}
                        </span>
                        <span className="text-xs text-[#7c6656] font-['Plus_Jakarta_Sans']">
                          {currentUser?.email || 'guest@email.com'}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Chevron - Visible on desktop only */}
                  <ChevronDown className="hidden sm:block size-4 text-[#7c6656]" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                side="bottom"
                align="end"
                className="w-64 sm:w-56 rounded-xl border-[#974400]/10 bg-[#FFFDF5] shadow-xl mt-2"
              >
                {/* User info in dropdown - Visible on mobile only */}
                <div className="sm:hidden px-4 py-3 border-b border-[#D2691E]/10">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-[#974400]/10 text-[#974400]">
                      {loading ? (
                        <div className="size-4 animate-spin rounded-full border-2 border-[#974400] border-t-transparent" />
                      ) : currentUser?.name?.charAt(0) ? (
                        currentUser.name.charAt(0)
                      ) : (
                        <User2 className="size-5" />
                      )}
                    </div>
                    <div className="flex flex-col min-w-[120px]">
                      {loading ? (
                        <div className="space-y-1.5 animate-pulse">
                          <div className="h-3 w-20 bg-[#3b2a1f]/10 rounded" />
                          <div className="h-2.5 w-28 bg-[#7c6656]/10 rounded" />
                        </div>
                      ) : (
                        <>
                          <span className="text-sm font-semibold text-[#3b2a1f] font-['Plus_Jakarta_Sans']">
                            {currentUser?.name || 'Guest User'}
                          </span>
                          <span className="text-xs text-[#7c6656] font-['Plus_Jakarta_Sans']">
                            {currentUser?.email || 'guest@email.com'}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Desktop label */}
                <DropdownMenuLabel className="hidden sm:block text-sm font-semibold font-['Plus_Jakarta_Sans']">
                  Account
                </DropdownMenuLabel>

                <DropdownMenuSeparator className="hidden sm:block" />

                <DropdownMenuItem
                  onClick={logout}
                  className="cursor-pointer text-red-500 focus:bg-red-50 focus:text-red-600 py-2.5 font-['Plus_Jakarta_Sans'] text-sm"
                >
                  <LogOut className="mr-2 size-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </header>
  );
}
