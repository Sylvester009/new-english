'use client';

import {SearchForm} from '@/components/search-form';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {Button} from '@/components/ui/button';
import {Separator} from '@/components/ui/separator';
import {useSidebar} from '@/components/ui/sidebar';
import {PanelLeftIcon} from 'lucide-react';

type SiteHeaderProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export function SiteHeader({search, setSearch}: SiteHeaderProps) {
  const {toggleSidebar} = useSidebar();

  return (
    <header className="bg-[#FFFDF5]/90 backdrop-blur-md border-b border-[#D2691E]/10 shadow-sm docked full-width top-0 sticky z-50">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <PanelLeftIcon />
        </Button>
        <Separator
          orientation="vertical"
          className="mr-2 data-vertical:h-4 data-vertical:self-auto"
        />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="#"
                className="text-2xl font-bold font-serif text-[#D2691E] italic"
              >
                New English
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-on-surface-variant">
                Store Front
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <SearchForm
          className="w-full sm:ml-auto sm:w-auto"
          search={search}
          setSearch={setSearch}
        />
      </div>
    </header>
  );
}
