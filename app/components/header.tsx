'use client';

import {CircleUser, LogIn, LogOut, User, User2, UserPlus} from 'lucide-react';
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
import {Sidebar, SidebarFooter} from '@/components/ui/sidebar';

export default function Header() {
  const pathName = usePathname();
  const isHomepage = pathName === '/';
  const currentUser =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('currentUser') || '{}')
      : {};

  const handleLogout = () => {
    localStorage.removeItem('currentUser');

    window.location.href = '/login';
  };
  return (
    <header className="bg-[#FFFDF5]/90 max-w-full backdrop-blur-md border-b border-[#D2691E]/10 shadow-sm docked full-width top-0 sticky z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <a
            className="text-3xl font-black tracking-tight text-[#D2691E]"
            href="#"
          >
            New English
          </a>
        </div>
        {isHomepage ? (
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center justify-center w-5 h-5 cursor-pointer rounded-full border border-orange-600 text-orange-600 hover:bg-orange-50 transition active:scale-95">
                  <CircleUser />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56 mr-6">
                <DropdownMenuLabel className="text-sm font-semibold">
                  Account
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/login"
                      className="flex items-center gap-2 py-2"
                    >
                      <LogIn className="w-4 h-4" />
                      Log In
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link
                      href="/signup"
                      className="flex items-center gap-2 py-2"
                    >
                      <UserPlus className="w-4 h-4" />
                      Sign Up
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <p className="px-2 py-1.5 text-xs text-muted-foreground">
                  Fresh groceries, pastries, and household essentials delivered
                  daily.
                </p>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="
          w-full
          flex
          items-center
          gap-3
          px-2
          py-1
          cursor-pointer
          
        "
                  >
                    <div
                      className="
            flex
            size-8
            items-center
            justify-center
            rounded-full
            bg-[#974400]/10
            text-[#974400]
            p-4
          "
                    >
                      {currentUser?.name?.charAt(0) || (
                        <User2 className="size-5" />
                      )}
                    </div>

                    <div className="flex flex-col text-left">
                      <span className="text-sm font-semibold text-[#3b2a1f]">
                        {currentUser?.name || 'Guest User'}
                      </span>

                      <span className="text-xs text-[#7c6656]">
                        {currentUser?.email || 'guest@email.com'}
                      </span>
                    </div>
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  side="top"
                  align="end"
                  className="
        w-56
        rounded-xl
        border-[#974400]/10
        bg-[#FFFDF5]
      "
                >
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="
          cursor-pointer
          text-red-500
          focus:bg-red-50
          focus:text-red-600
        "
                  >
                    <LogOut className="mr-2 size-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
