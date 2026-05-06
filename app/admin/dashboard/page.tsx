import Sidebar from "../components/sidebar";

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      {/* <!-- Main Content Canvas --> */}
      <main className="ml-64 p-margin-desktop min-h-screen">
        {/* <!-- Header Section --> */}
        <header className="flex justify-between items-end mb-10">
          <div>
            <p className="font-label-bold text-primary mb-2">MANAGEMENT</p>
            <h2 className="font-display-lg text-display-lg text-on-background">
              Inventory Overview
            </h2>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <span
                className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline"
                data-icon="search"
              >
                search
              </span>
              <input
                className="pl-10 pr-4 py-2 bg-white border-2 border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary-container focus:border-secondary transition-all outline-none font-body-md"
                placeholder="Search products..."
                type="text"
              />
            </div>
            <button className="bg-surface-container-high text-on-surface px-4 py-2 rounded-lg font-bold flex items-center gap-2 border border-outline-variant/20 hover:bg-surface-variant transition-colors">
              <span
                className="material-symbols-outlined"
                data-icon="filter_list"
              >
                filter_list
              </span>
              Filter
            </button>
          </div>
        </header>
        {/* <!-- Bento Grid Stats --> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-10">
          <div className="col-span-1 bg-white p-6 rounded-xl shadow-sm border border-outline-variant/10">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-secondary-container/20 rounded-lg">
                <span
                  className="material-symbols-outlined text-secondary material-symbols-filled"
                  data-icon="inventory"
                >
                  inventory
                </span>
              </div>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                +12%
              </span>
            </div>
            <p className="text-on-surface-variant text-sm font-label-bold">
              TOTAL PRODUCTS
            </p>
            <p className="text-3xl font-headline-md text-on-background mt-1">
              1,284
            </p>
          </div>
          <div className="col-span-1 bg-tertiary-container/10 p-6 rounded-xl border-2 border-tertiary/20">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-tertiary-container/30 rounded-lg">
                <span
                  className="material-symbols-outlined text-tertiary"
                  data-icon="warning"
                >
                  warning
                </span>
              </div>
              <span className="text-xs font-bold text-tertiary bg-white px-2 py-1 rounded">
                Urgent
              </span>
            </div>
            <p className="text-tertiary text-sm font-label-bold">
              LOW STOCK ALERTS
            </p>
            <p className="text-3xl font-headline-md text-on-background mt-1">
              18 Items
            </p>
          </div>
          <div className="col-span-2 bg-primary-container p-6 rounded-xl relative overflow-hidden text-white flex items-center justify-between">
            <div className="relative z-10">
              <p className="text-white/80 text-sm font-label-bold">
                WEEKLY REVENUE
              </p>
              <p className="text-4xl font-display-lg mt-1">£42,850.00</p>
              <p className="mt-4 flex items-center gap-2 text-sm font-bold bg-white/20 w-fit px-3 py-1 rounded-full">
                <span
                  className="material-symbols-outlined text-xs"
                  data-icon="trending_up"
                >
                  trending_up
                </span>
                Performance is up 8.4% from last week
              </p>
            </div>
            <div className="opacity-10 absolute -right-4 -bottom-4">
              <span
                className="material-symbols-outlined text-[160px]"
                data-icon="payments"
              >
                payments
              </span>
            </div>
          </div>
        </div>
        {/* <!-- Inventory Table Section --> */}
        <section className="bg-white rounded-2xl shadow-sm border border-outline-variant/10 overflow-hidden">
          <div className="px-6 py-4 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-lowest">
            <h3 className="font-title-sm text-on-background">
              Live Inventory Stock
            </h3>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-surface-container rounded-lg transition-colors">
                <span
                  className="material-symbols-outlined"
                  data-icon="download"
                >
                  download
                </span>
              </button>
              <button className="p-2 hover:bg-surface-container rounded-lg transition-colors">
                <span
                  className="material-symbols-outlined"
                  data-icon="more_vert"
                >
                  more_vert
                </span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low/50">
                  <th className="px-6 py-4 font-label-bold text-on-surface-variant text-xs">
                    PRODUCT
                  </th>
                  <th className="px-6 py-4 font-label-bold text-on-surface-variant text-xs">
                    CATEGORY
                  </th>
                  <th className="px-6 py-4 font-label-bold text-on-surface-variant text-xs text-right">
                    PRICE
                  </th>
                  <th className="px-6 py-4 font-label-bold text-on-surface-variant text-xs text-center">
                    STOCK
                  </th>
                  <th className="px-6 py-4 font-label-bold text-on-surface-variant text-xs">
                    STATUS
                  </th>
                  <th className="px-6 py-4 font-label-bold text-on-surface-variant text-xs"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                <tr className="hover:bg-surface-container-low/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-surface-variant overflow-hidden">
                        <img
                          alt="Sourdough"
                          className="w-full h-full object-cover"
                          data-alt="Close-up of crusty artisan sourdough bread loaf dusted with flour on a rustic wooden table"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0NsxtWge1jIawPE3sn9MWQXaMMbQZk5rF0dnecxPCFw-6Vw0tT21XQXQi8GD10x0oKJ0P6yOakPtgQEMKdFBgBcJLL3IuxTj3NAYt1tGtGxRHdriOKpLxdRt9D1c5atGQapiYqg1bVhAenq3ifOjA01hSH6HH_75q0WdVsynfrp7O0fuLRpk1qtTpiXPuHsrPjKfz9PxqgEkjVCw2FT-qxiyq1ibbNp3eTSn9lyYDgetczvAIWAm49kHGQ6-RFZRfCizkRhwdfe0"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-on-background">
                          Artisan Sourdough
                        </p>
                        <p className="text-xs text-on-surface-variant">
                          SKU: BAK-001
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-secondary-container/10 text-secondary px-3 py-1 rounded-full text-xs font-bold">
                      Bakery
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold">£4.50</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="font-bold">42</span>
                      <div className="w-16 h-1.5 bg-surface-variant rounded-full mt-1 overflow-hidden">
                        <div className="bg-green-500 h-full w-[80%]"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-green-600 text-xs font-bold">
                      <span className="w-2 h-2 rounded-full bg-green-600"></span>
                      IN STOCK
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-primary hover:bg-primary-container/10 rounded-lg">
                      <span
                        className="material-symbols-outlined"
                        data-icon="edit"
                      >
                        edit
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-surface-variant overflow-hidden">
                        <img
                          alt="Honey"
                          className="w-full h-full object-cover"
                          data-alt="Elegant glass jar of premium artisanal honey with a wooden dipper resting on top, soft focus background"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpcOaT2ez57WN_JcUxjlrDXT1cPY1SMizvujbtWZouHVlKopce1fhOD5gLQieVfiNQNEtaZDPfnxEKAIwKIxw2eCGjH4Wkz3Wm9jmtg8a6pNqtlkFer4ULqInjExkSSucVNdJvpZu1t97UEd5f9GP1Qs9D90LR8TT64qZjU0AUMbV-0A55qF9M8kpuCj7vxO_zSlXnREWrGROv-i_JeSnf5NHOYI7dlNl4jSevJqbQcB2KR5W0itoDGVNZuYHDqupNCwa9icfu4N0"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-on-background">
                          Wildflower Honey
                        </p>
                        <p className="text-xs text-on-surface-variant">
                          SKU: PAN-082
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-primary-container/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                      Pantry
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold">£12.95</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-tertiary">4</span>
                      <div className="w-16 h-1.5 bg-surface-variant rounded-full mt-1 overflow-hidden">
                        <div className="bg-tertiary h-full w-[15%]"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-tertiary text-xs font-bold">
                      <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                      LOW STOCK
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-primary hover:bg-primary-container/10 rounded-lg">
                      <span
                        className="material-symbols-outlined"
                        data-icon="edit"
                      >
                        edit
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-surface-variant overflow-hidden">
                        <img
                          alt="Truffles"
                          className="w-full h-full object-cover"
                          data-alt="Selection of dark chocolate truffles on a marble surface with gold leaf accents, moody lighting"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQe9u8iXYuuCaQEDrla-ezAMDLuBBII6fqoRsuWyEd-iWjTR4SJB8UX40GA96wTTcgSyKv45TZHiEsgxZE5Mv9_-yp3hX5jPOItKHURvobPblZDu6oTC_J__IG4B_iZsaUhDRxGoEVGfEa8iPBE0BLtM83G9iRUWVLPklxbc4_4ecsexyRK5heb6ggfWTAA9eA5dK11x7zSHflFiyLht6PbtsdQGIgsMjQlv85v1j2codqo4xyL91hxRsFVcORLxjd344eRRv7qGA"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-on-background">
                          Dark Truffle Box
                        </p>
                        <p className="text-xs text-on-surface-variant">
                          SKU: GFT-012
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-tertiary-container/10 text-tertiary px-3 py-1 rounded-full text-xs font-bold">
                      Gifts
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold">£24.00</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="font-bold">86</span>
                      <div className="w-16 h-1.5 bg-surface-variant rounded-full mt-1 overflow-hidden">
                        <div className="bg-green-500 h-full w-[95%]"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-green-600 text-xs font-bold">
                      <span className="w-2 h-2 rounded-full bg-green-600"></span>
                      IN STOCK
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-primary hover:bg-primary-container/10 rounded-lg">
                      <span
                        className="material-symbols-outlined"
                        data-icon="edit"
                      >
                        edit
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-surface-container-lowest flex justify-between items-center text-sm font-label-bold text-on-surface-variant border-t border-outline-variant/10">
            <span>Showing 1-10 of 1,284 products</span>
            <div className="flex gap-2">
              <button
                className="px-3 py-1 border border-outline-variant/30 rounded hover:bg-surface-variant transition-colors disabled:opacity-50"
                disabled
              >
                Previous
              </button>
              <button className="px-3 py-1 bg-primary text-white rounded hover:bg-primary-container transition-colors">
                1
              </button>
              <button className="px-3 py-1 border border-outline-variant/30 rounded hover:bg-surface-variant transition-colors">
                2
              </button>
              <button className="px-3 py-1 border border-outline-variant/30 rounded hover:bg-surface-variant transition-colors">
                Next
              </button>
            </div>
          </div>
        </section>
        {/* <!-- Footer Section (Internal) --> */}
        <footer className="w-full py-12 px-0 flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto font-serif text-sm border-t-2 border-[#D2691E]/20 mt-20">
          <p className="text-stone-500 dark:text-stone-400">
            © 2024 New English Premium Grocers. Artisanal Quality Guaranteed.
          </p>
          <div className="flex gap-6">
            <a
              className="text-stone-500 dark:text-stone-400 hover:text-[#D2691E] transition-opacity"
              href="#"
            >
              Store Locator
            </a>
            <a
              className="text-stone-500 dark:text-stone-400 hover:text-[#D2691E] transition-opacity"
              href="#"
            >
              Wholesale
            </a>
            <a
              className="text-stone-500 dark:text-stone-400 hover:text-[#D2691E] transition-opacity"
              href="#"
            >
              Sustainability
            </a>
            <a
              className="text-stone-500 dark:text-stone-400 hover:text-[#D2691E] transition-opacity"
              href="#"
            >
              Contact Us
            </a>
          </div>
        </footer>
      </main>
      {/* <!-- Floating Action Button - Mobile/Quick Access (Hidden on larger but functional) --> */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-50 md:hidden">
        <span className="material-symbols-outlined" data-icon="add">
          add
        </span>
      </button>
    </>
  );
}
