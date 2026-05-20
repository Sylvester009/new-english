'use client';

import {AppSidebar} from '@/components/app-sidebar';
import {SiteHeader} from '@/components/site-header';
import {SidebarInset, SidebarProvider} from '@/components/ui/sidebar';
import {Tabs, TabsContent} from '@/components/ui/tabs';
import {useState} from 'react';
import {categoryDescriptions} from '../data';
import {ProductType} from '@/types/product';
import dynamic from 'next/dynamic';

const ProductList = dynamic(() => import('../components/product'), {
  ssr: false,
  loading: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
      {Array.from({length: 6}).map((_, i) => (
        <div key={i} className="bg-white rounded-xl p-4 animate-pulse">
          <div className="aspect-4/3 bg-gray-200 rounded-lg mb-4" />
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
        </div>
      ))}
    </div>
  ),
});

export default function StoreClient({categories}: {categories: string[]}) {
  const [active, setActive] = useState(categories[0] || 'Bakery');
  const [search, setSearch] = useState('');

  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader search={search} setSearch={setSearch} />
        <div className="flex flex-1">
          <AppSidebar active={active} setActive={setActive} />
          <SidebarInset>
            <section className="flex-1 px-6 pt-10 pb-20">
              <Tabs value={active}>
                {/* <!-- Header & Breadcrumbs --> */}
                <nav className="mb-6 flex items-center space-x-2 text-[11px] tracking-[0.18em] uppercase label-md text-stone-400">
                  <a
                    className="hover:text-[#974400] transition-colors"
                    href="#"
                  >
                    Store Front
                  </a>
                  <span className="material-symbols-outlined text-[10px]">
                    chevron_right
                  </span>
                  <span className="primary">{active}</span>
                </nav>
                <TabsContent value={active}>
                  <header className="mb-[64px]">
                    <h1 className="display-lg primary italic mb-5 tracking-tight">
                      {active}
                    </h1>
                    <p className="body-lg on-surface-variant max-w-2xl leading-relaxed text-[17px]">
                      {categoryDescriptions[active as ProductType]}
                    </p>
                  </header>
                  {/* <!-- Product List --> */}
                  <ProductList
                    productType={active as ProductType}
                    search={search}
                  />
                </TabsContent>
              </Tabs>
            </section>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
