'use client';

import {Label} from '@/components/ui/label';
import {SidebarInput} from '@/components/ui/sidebar';
import {SearchIcon} from 'lucide-react';

type SearchFormProps = React.ComponentProps<'form'> & {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export function SearchForm({
  search,
  setSearch,
  ...props
}: SearchFormProps) {
  return (
    <form {...props}>
      <div className="relative">
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <SidebarInput
          id="search"
          placeholder="Type to search..."
          className="h-8 pl-7"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <SearchIcon className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
      </div>
    </form>
  );
}
