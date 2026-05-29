'use client';

import * as React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';

import {
  ShoppingCart,
  Beer,
  Sparkles,
  Home,
  Cake,
  Snowflake,
  Plug,
  Gift,
  Apple,
  LogOut,
  User2,
} from 'lucide-react';
import {cn} from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import useUser from '@/hooks/useUser';
import {logout} from '@/app/lib/session';

export const categories = [
  {
    title: 'Groceries',
    icon: <ShoppingCart />,
  },
  {
    title: 'Drinks & Beverages',
    icon: <Beer />,
  },
  {
    title: 'Beauty & Personal Care',
    icon: <Sparkles />,
  },
  {
    title: 'Household Items',
    icon: <Home />,
  },
  {
    title: 'Bakery',
    icon: <Cake />,
  },
  {
    title: 'Frozen Foods',
    icon: <Snowflake />,
  },
  {
    title: 'Electrical Items',
    icon: <Plug />,
  },
  {
    title: 'Gifts & Books',
    icon: <Gift />,
  },
  {
    title: 'Fresh Produce',
    icon: <Apple />,
  },
];

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  active: string;
  setActive: (value: string) => void;
};

export function AppSidebar({active, setActive, ...props}: AppSidebarProps) {
  const {setOpenMobile, isMobile} = useSidebar();

  const {loading, currentUser} = useUser();

  return (
    <Sidebar
      className="
    top-(--header-height)
    h-[calc(100svh-var(--header-height))]!
    border-r
    border-[#974400]/10
    bg-[#FFFDF5]
    px-2
    py-4
    shadow-xl
    shadow-stone-900/5
  "
      {...props}
    >
      <SidebarHeader className="px-4 pb-6">
        <div>
          <h2 className="text-lg font-bold text-[#974400] tracking-tight">
            Categories
          </h2>

          <p className="text-xs text-stone-500 mt-1">
            Browse store collections
          </p>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu className="space-y-2 px-2">
          {categories.map(item => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                isActive={active === item.title}
                onClick={() => {
                  setActive(item.title);
                  if (isMobile) {
                    setOpenMobile(false);
                  }
                }}
                className={cn(
                  `
      group
      w-full
      rounded-xl
      px-4
      py-5
      transition-all
      duration-300
      ease-out
      hover:bg-[#974400]/5
      hover:translate-x-1
      hover:text-[#974400]
      text-[#564338]
    `,
                  active === item.title &&
                    `
      bg-[#974400]
      text-white
      shadow-md
      shadow-[#974400]/20
      hover:bg-[#7a3600]
      hover:text-white
      hover:translate-x-0
    `,
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      'transition-transform duration-300 size-4',
                      active === item.title
                        ? 'scale-110'
                        : 'group-hover:scale-105',
                    )}
                  >
                    {item.icon}
                  </span>

                  <span className="font-medium tracking-tight">
                    {item.title}
                  </span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-[#974400]/10 p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild disabled={loading}>
            <button
              className="
          w-full
          flex
          items-center
          gap-3
          rounded-xl
          px-2
          py-3
          transition-all
          duration-300
          hover:bg-[#974400]/5
        "
            >
              <div className="flex size-8 items-center justify-center rounded-full bg-[#974400]/10 text-[#974400] p-4">
                {currentUser?.name?.charAt(0) || <User2 className="size-5" />}
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
              onClick={logout}
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
      </SidebarFooter>
    </Sidebar>
  );
}
