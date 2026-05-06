'use client';

import {AppSidebar} from '@/components/app-sidebar';
import {SiteHeader} from '@/components/site-header';
import {SidebarInset, SidebarProvider} from '@/components/ui/sidebar';
import {Tabs, TabsContent} from '@/components/ui/tabs';
import {useState} from 'react';
import ProductList from '../components/product';
import {ProductType} from '../data';

export const iframeHeight = '800px';

export const description = 'A sidebar with a header and a search form.';

export default function Store() {
  const [active, setActive] = useState('Bakery');

  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar active={active} setActive={setActive} />
          <SidebarInset>
            <section className="flex-1 px-6 pt-10 pb-20">
              <Tabs value={active}>
                {/* <!-- Header & Breadcrumbs --> */}
                <nav className="mb-6 flex items-center space-x-2 text-xs label-md text-stone-400">
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
                    <h1 className="display-lg primary mb-4">{active}</h1>
                    <p className="body-lg on-surface-variant max-w-2xl">
                      Discover our daily selection of artisan breads,
                      handcrafted pastries, and traditional cakes baked in stone
                      ovens using heritage grains.
                    </p>
                  </header>
                  {/* <!-- Product List --> */}
                  <ProductList productType={active as ProductType} />
                </TabsContent>
              </Tabs>
            </section>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
