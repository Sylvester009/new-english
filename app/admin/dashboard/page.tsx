import DashboardHeader from "../components/header";
import Sidebar from "../components/sidebar";

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      {/* Main Content Canvas */}
      <main className="ml-64 p-6 lg:p-8 min-h-screen">
        {/* Header Section - Now using component */}
        <DashboardHeader />
        
        {/* Bento Grid Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6 mb-8 md:mb-10">
          {/* Total Products Card */}
          <div className="col-span-1 bg-white p-5 md:p-6 rounded-xl shadow-sm border border-[#ddc1b3]/10 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2.5 bg-[#fcc340]/20 rounded-xl">
                <span
                  className="material-symbols-outlined text-[#795900] material-symbols-filled text-xl"
                  data-icon="inventory"
                >
                  inventory
                </span>
              </div>
              <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
                +12%
              </span>
            </div>
            <p className="text-[#564338] text-xs tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] uppercase">
              TOTAL PRODUCTS
            </p>
            <p className="text-[32px] leading-[1.3] font-semibold font-['Noto_Serif'] text-[#1f1b12] mt-1">
              1,284
            </p>
          </div>
          
          {/* Low Stock Alerts Card */}
          <div className="col-span-1 bg-[#b15878]/10 p-5 md:p-6 rounded-xl border-2 border-[#93405f]/20 hover:border-[#93405f]/30 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2.5 bg-[#b15878]/30 rounded-xl">
                <span
                  className="material-symbols-outlined text-[#93405f] text-xl"
                  data-icon="warning"
                >
                  warning
                </span>
              </div>
              <span className="text-xs font-bold text-[#93405f] bg-white px-2.5 py-1 rounded-full shadow-sm">
                Urgent
              </span>
            </div>
            <p className="text-[#93405f] text-xs tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] uppercase">
              LOW STOCK ALERTS
            </p>
            <p className="text-[32px] leading-[1.3] font-semibold font-['Noto_Serif'] text-[#1f1b12] mt-1">
              18 Items
            </p>
          </div>
          
          {/* Weekly Revenue Card */}
          <div className="col-span-2 bg-[#bb5808] p-5 md:p-6 rounded-xl relative overflow-hidden text-white flex items-center justify-between group hover:shadow-xl transition-shadow">
            <div className="relative z-10">
              <p className="text-white/80 text-xs tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] uppercase">
                WEEKLY REVENUE
              </p>
              <p className="text-4xl md:text-5xl font-['Noto_Serif'] font-bold mt-1 tracking-tight">
                £42,850.00
              </p>
              <p className="mt-4 flex items-center gap-2 text-sm font-bold bg-white/20 w-fit px-3 py-1.5 rounded-full">
                <span
                  className="material-symbols-outlined text-xs"
                  data-icon="trending_up"
                >
                  trending_up
                </span>
                Performance is up 8.4% from last week
              </p>
            </div>
            <div className="opacity-10 absolute -right-4 -bottom-4 group-hover:opacity-15 transition-opacity">
              <span
                className="material-symbols-outlined text-[160px]"
                data-icon="payments"
              >
                payments
              </span>
            </div>
          </div>
        </div>
        
        {/* Inventory Table Section */}
        <section className="bg-white rounded-2xl shadow-sm border border-[#ddc1b3]/10 overflow-hidden">
          {/* Table Header */}
          <div className="px-6 py-4 border-b border-[#ddc1b3]/10 flex justify-between items-center bg-[#ffffff]">
            <h3 className="font-['Noto_Serif'] text-xl leading-[1.4] font-semibold text-[#1f1b12]">
              Live Inventory Stock
            </h3>
            <div className="flex gap-1">
              <button className="p-2 hover:bg-[#f6edde] rounded-lg transition-colors" title="Download">
                <span
                  className="material-symbols-outlined text-[#564338]"
                  data-icon="download"
                >
                  download
                </span>
              </button>
              <button className="p-2 hover:bg-[#f6edde] rounded-lg transition-colors" title="More options">
                <span
                  className="material-symbols-outlined text-[#564338]"
                  data-icon="more_vert"
                >
                  more_vert
                </span>
              </button>
            </div>
          </div>
          
          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#fcf2e3]/50">
                  <th className="px-6 py-3.5 text-xs tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase">
                    PRODUCT
                  </th>
                  <th className="px-6 py-3.5 text-xs tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase">
                    CATEGORY
                  </th>
                  <th className="px-6 py-3.5 text-xs tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase text-right">
                    PRICE
                  </th>
                  <th className="px-6 py-3.5 text-xs tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase text-center">
                    STOCK
                  </th>
                  <th className="px-6 py-3.5 text-xs tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase">
                    STATUS
                  </th>
                  <th className="px-6 py-3.5"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ddc1b3]/10">
                {/* Row 1 - Artisan Sourdough */}
                <tr className="hover:bg-[#fcf2e3]/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#ebe1d3] overflow-hidden border border-[#fcf2e3]">
                        <img
                          alt="Sourdough"
                          className="w-full h-full object-cover"
                          data-alt="Close-up of crusty artisan sourdough bread loaf dusted with flour on a rustic wooden table"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0NsxtWge1jIawPE3sn9MWQXaMMbQZk5rF0dnecxPCFw-6Vw0tT21XQXQi8GD10x0oKJ0P6yOakPtgQEMKdFBgBcJLL3IuxTj3NAYt1tGtGxRHdriOKpLxdRt9D1c5atGQapiYqg1bVhAenq3ifOjA01hSH6HH_75q0WdVsynfrp7O0fuLRpk1qtTpiXPuHsrPjKfz9PxqgEkjVCw2FT-qxiyq1ibbNp3eTSn9lyYDgetczvAIWAm49kHGQ6-RFZRfCizkRhwdfe0"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-[#1f1b12]">
                          Artisan Sourdough
                        </p>
                        <p className="text-xs text-[#564338]">
                          SKU: BAK-001
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-[#fcc340]/10 text-[#795900] px-3 py-1 rounded-full text-xs font-bold">
                      Bakery
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-[#1f1b12]">
                    £4.50
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-[#1f1b12]">42</span>
                      <div className="w-16 h-1.5 bg-[#ebe1d3] rounded-full mt-1 overflow-hidden">
                        <div className="bg-green-500 h-full w-[80%] rounded-full"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-green-700 text-xs font-bold">
                      <span className="w-2 h-2 rounded-full bg-green-600"></span>
                      IN STOCK
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-[#974400] hover:bg-[#bb5808]/10 rounded-lg">
                      <span
                        className="material-symbols-outlined"
                        data-icon="edit"
                      >
                        edit
                      </span>
                    </button>
                  </td>
                </tr>
                
                {/* Row 2 - Wildflower Honey */}
                <tr className="hover:bg-[#fcf2e3]/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#ebe1d3] overflow-hidden border border-[#fcf2e3]">
                        <img
                          alt="Honey"
                          className="w-full h-full object-cover"
                          data-alt="Elegant glass jar of premium artisanal honey with a wooden dipper resting on top, soft focus background"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpcOaT2ez57WN_JcUxjlrDXT1cPY1SMizvujbtWZouHVlKopce1fhOD5gLQieVfiNQNEtaZDPfnxEKAIwKIxw2eCGjH4Wkz3Wm9jmtg8a6pNqtlkFer4ULqInjExkSSucVNdJvpZu1t97UEd5f9GP1Qs9D90LR8TT64qZjU0AUMbV-0A55qF9M8kpuCj7vxO_zSlXnREWrGROv-i_JeSnf5NHOYI7dlNl4jSevJqbQcB2KR5W0itoDGVNZuYHDqupNCwa9icfu4N0"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-[#1f1b12]">
                          Wildflower Honey
                        </p>
                        <p className="text-xs text-[#564338]">
                          SKU: PAN-082
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-[#bb5808]/10 text-[#974400] px-3 py-1 rounded-full text-xs font-bold">
                      Pantry
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-[#1f1b12]">
                    £12.95
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-[#93405f]">4</span>
                      <div className="w-16 h-1.5 bg-[#ebe1d3] rounded-full mt-1 overflow-hidden">
                        <div className="bg-[#93405f] h-full w-[15%] rounded-full"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-[#93405f] text-xs font-bold">
                      <span className="w-2 h-2 rounded-full bg-[#93405f] animate-pulse"></span>
                      LOW STOCK
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-[#974400] hover:bg-[#bb5808]/10 rounded-lg">
                      <span
                        className="material-symbols-outlined"
                        data-icon="edit"
                      >
                        edit
                      </span>
                    </button>
                  </td>
                </tr>
                
                {/* Row 3 - Dark Truffle Box */}
                <tr className="hover:bg-[#fcf2e3]/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#ebe1d3] overflow-hidden border border-[#fcf2e3]">
                        <img
                          alt="Truffles"
                          className="w-full h-full object-cover"
                          data-alt="Selection of dark chocolate truffles on a marble surface with gold leaf accents, moody lighting"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQe9u8iXYuuCaQEDrla-ezAMDLuBBII6fqoRsuWyEd-iWjTR4SJB8UX40GA96wTTcgSyKv45TZHiEsgxZE5Mv9_-yp3hX5jPOItKHURvobPblZDu6oTC_J__IG4B_iZsaUhDRxGoEVGfEa8iPBE0BLtM83G9iRUWVLPklxbc4_4ecsexyRK5heb6ggfWTAA9eA5dK11x7zSHflFiyLht6PbtsdQGIgsMjQlv85v1j2codqo4xyL91hxRsFVcORLxjd344eRRv7qGA"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-[#1f1b12]">
                          Dark Truffle Box
                        </p>
                        <p className="text-xs text-[#564338]">
                          SKU: GFT-012
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-[#b15878]/10 text-[#93405f] px-3 py-1 rounded-full text-xs font-bold">
                      Gifts
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-[#1f1b12]">
                    £24.00
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-[#1f1b12]">86</span>
                      <div className="w-16 h-1.5 bg-[#ebe1d3] rounded-full mt-1 overflow-hidden">
                        <div className="bg-green-500 h-full w-[95%] rounded-full"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-green-700 text-xs font-bold">
                      <span className="w-2 h-2 rounded-full bg-green-600"></span>
                      IN STOCK
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-[#974400] hover:bg-[#bb5808]/10 rounded-lg">
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
          
          {/* Table Footer - Pagination */}
          <div className="px-6 py-4 bg-[#ffffff] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-bold font-['Plus_Jakarta_Sans'] text-[#564338] border-t border-[#ddc1b3]/10">
            <span>Showing 1-10 of 1,284 products</span>
            <div className="flex gap-2">
              <button
                className="px-3 py-1.5 border border-[#ddc1b3]/30 rounded-lg hover:bg-[#ebe1d3] transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-xs"
                disabled
              >
                Previous
              </button>
              <button className="px-3 py-1.5 bg-[#974400] text-white rounded-lg hover:bg-[#bb5808] transition-colors text-xs font-bold min-w-[36px]">
                1
              </button>
              <button className="px-3 py-1.5 border border-[#ddc1b3]/30 rounded-lg hover:bg-[#ebe1d3] transition-colors text-xs min-w-[36px]">
                2
              </button>
              <button className="px-3 py-1.5 border border-[#ddc1b3]/30 rounded-lg hover:bg-[#ebe1d3] transition-colors text-xs">
                Next
              </button>
            </div>
          </div>
        </section>
        
        {/* Footer Section */}
        <footer className="w-full py-12 px-0 flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto font-['Noto_Serif'] text-sm border-t-2 border-[#D2691E]/20 mt-20">
          <p className="text-stone-500 dark:text-stone-400">
            © 2024 New English Premium Grocers. Artisanal Quality Guaranteed.
          </p>
          <div className="flex gap-6">
            <a
              className="text-stone-500 dark:text-stone-400 hover:text-[#D2691E] transition-colors"
              href="#"
            >
              Store Locator
            </a>
            <a
              className="text-stone-500 dark:text-stone-400 hover:text-[#D2691E] transition-colors"
              href="#"
            >
              Wholesale
            </a>
            <a
              className="text-stone-500 dark:text-stone-400 hover:text-[#D2691E] transition-colors"
              href="#"
            >
              Sustainability
            </a>
            <a
              className="text-stone-500 dark:text-stone-400 hover:text-[#D2691E] transition-colors"
              href="#"
            >
              Contact Us
            </a>
          </div>
        </footer>
      </main>
      
      {/* Floating Action Button - Mobile/Quick Access */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-[#974400] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-50 md:hidden">
        <span className="material-symbols-outlined" data-icon="add">
          add
        </span>
      </button>
    </>
  );
}