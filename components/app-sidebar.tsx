'use client';

import * as React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
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
} from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
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
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <div className="px-4 py-2 font-semibold text-lg"></div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {categories.map(item => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                isActive={active === item.title}
                onClick={() => setActive(item.title)}
                className={cn(
                  active === item.title &&
                    'bg-[#974400] text-white hover:bg-[#7a3600]',
                )}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
