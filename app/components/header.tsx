'use client';

import {CircleUser, LogIn, User, UserPlus} from 'lucide-react';
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

export default function Header() {
  return (
    <header className="bg-[#FFFDF5]/90 backdrop-blur-md border-b border-[#D2691E]/10 shadow-sm docked full-width top-0 sticky z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <a
            className="text-3xl font-black tracking-tight text-[#D2691E]"
            href="#"
          >
            New English
          </a>
        </div>
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
                  <Link href="/login" className="flex items-center gap-2 py-2">
                    <LogIn className="w-4 h-4" />
                    Log In
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/signup" className="flex items-center gap-2 py-2">
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
      </div>
    </header>
  );
}
