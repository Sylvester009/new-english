'use client';

import {AppSidebar} from '@/components/app-sidebar';
import {SiteHeader} from '@/components/site-header';
import {SidebarInset, SidebarProvider} from '@/components/ui/sidebar';
import {Tabs, TabsContent} from '@/components/ui/tabs';
import {useState} from 'react';
import ProductList from '../components/product';
import {categoryDescriptions, ProductType} from '../data';

export const iframeHeight = '800px';

export const description = 'A sidebar with a header and a search form.';

export default function Store() {
  const [active, setActive] = useState('Bakery');
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
