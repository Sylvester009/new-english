'use client';

import Sidebar from '../components/sidebar';
import TopAppBar from '../components/top-appbar';

export default function Orders() {
  return (
    <>
      <Sidebar />
      <main className="ml-64 min-h-screen">
        {/* Top App Bar */}
        <TopAppBar />

        {/* Page Content */}
        <div className="p-6 lg:p-10 max-w-[1440px] mx-auto">
          {/* Header Section */}
          <section className="mb-8 lg:mb-10 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <div>
              <h2 className="font-['Noto_Serif'] text-[48px] leading-[1.2] tracking-[-0.02em] font-bold text-[#974400] mb-2">
                Order Management
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-lg leading-[1.6] text-[#564338]">
                Review and manage recent customer transactions.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a7266] font-['Plus_Jakarta_Sans']">
                  Date Range
                </label>
                <select className="bg-[#fff8f1] border-2 border-orange-100 rounded-xl px-4 py-2.5 text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] focus:border-[#bb5808] outline-none cursor-pointer">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>This Month</option>
                  <option>Custom Range</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a7266] font-['Plus_Jakarta_Sans']">
                  Quick Action
                </label>
                <button className="flex items-center gap-2 bg-[#fcc340] text-[#6f5100] px-6 py-2.5 rounded-xl text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] hover:brightness-105 active:scale-[0.98] transition-all">
                  <span className="material-symbols-outlined text-lg">
                    download
                  </span>
                  Export CSV
                </button>
              </div>
            </div>
          </section>

          {/* Filters & Bento Stats */}
          <div className="grid grid-cols-12 gap-4 lg:gap-6 mb-8 lg:mb-10">
            <div className="col-span-12 md:col-span-3 bg-[#ffffff] p-5 lg:p-6 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a7266] font-['Plus_Jakarta_Sans'] mb-1">
                Total Orders
              </p>
              <h3 className="text-3xl font-bold text-[#974400] font-['Noto_Serif']">
                1,284
              </h3>
              <div className="flex items-center gap-1 text-xs text-green-700 mt-2 font-bold font-['Plus_Jakarta_Sans']">
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>
                +12.5% vs last week
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 bg-[#ffffff] p-5 lg:p-6 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a7266] font-['Plus_Jakarta_Sans'] mb-1">
                Pending Fulfillment
              </p>
              <h3 className="text-3xl font-bold text-[#795900] font-['Noto_Serif']">
                42
              </h3>
              <p className="text-xs text-[#564338] mt-2 font-medium font-['Plus_Jakarta_Sans']">
                8 urgent orders
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 bg-[#ffffff] p-5 lg:p-6 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a7266] font-['Plus_Jakarta_Sans'] mb-1">
                  Revenue Forecast
                </p>
                <h3 className="text-3xl font-bold text-[#1f1b12] font-['Noto_Serif']">
                  $14,280.00
                </h3>
                <p className="text-xs text-[#564338] mt-2 font-medium font-['Plus_Jakarta_Sans']">
                  Estimated payout for current cycle
                </p>
              </div>
              <div className="h-16 w-32 bg-orange-50 rounded-xl flex items-end justify-center gap-1 p-2">
                <div className="w-3 bg-[#974400] rounded-t-sm h-[40%]"></div>
                <div className="w-3 bg-[#974400] rounded-t-sm h-[60%]"></div>
                <div className="w-3 bg-[#974400] rounded-t-sm h-[55%]"></div>
                <div className="w-3 bg-[#974400] rounded-t-sm h-[80%]"></div>
                <div className="w-3 bg-[#974400] rounded-t-sm h-[95%]"></div>
              </div>
            </div>
          </div>

          {/* Order List Table */}
          <section className="bg-[#ffffff] rounded-xl border border-orange-100 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-orange-100 flex justify-between items-center">
              <div className="flex gap-4">
                <button className="pb-2 border-b-2 border-[#974400] text-[#974400] font-bold text-sm px-2 font-['Plus_Jakarta_Sans']">
                  All Orders
                </button>
                <button className="pb-2 border-b-2 border-transparent text-[#8a7266] font-medium text-sm px-2 hover:text-[#1f1b12] transition-colors font-['Plus_Jakarta_Sans']">
                  Pending
                </button>
                <button className="pb-2 border-b-2 border-transparent text-[#8a7266] font-medium text-sm px-2 hover:text-[#1f1b12] transition-colors font-['Plus_Jakarta_Sans']">
                  Paid
                </button>
                <button className="pb-2 border-b-2 border-transparent text-[#8a7266] font-medium text-sm px-2 hover:text-[#1f1b12] transition-colors font-['Plus_Jakarta_Sans']">
                  Shipped
                </button>
              </div>
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#fcf2e3]">
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a7266] font-['Plus_Jakarta_Sans']">
                    Order ID
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a7266] font-['Plus_Jakarta_Sans']">
                    Customer
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a7266] font-['Plus_Jakarta_Sans']">
                    Date
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a7266] font-['Plus_Jakarta_Sans']">
                    Total
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a7266] font-['Plus_Jakarta_Sans']">
                    Status
                  </th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-50">
                {/* Row 1 - Elena Moretti */}
                <tr className="hover:bg-orange-50/30 transition-colors cursor-pointer group">
                  <td className="px-6 py-5 text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#974400]">
                    #ORD-82941
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#ffd9e2] flex items-center justify-center text-[#3e001e] text-xs font-bold font-['Plus_Jakarta_Sans']">
                        EM
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm text-[#1f1b12] font-['Plus_Jakarta_Sans']">
                          Elena Moretti
                        </span>
                        <span className="text-xs text-[#8a7266] font-['Plus_Jakarta_Sans']">
                          elena.m@example.it
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-[#1f1b12] font-['Plus_Jakarta_Sans']">
                    Oct 24, 2023 · 09:12 AM
                  </td>
                  <td className="px-6 py-5 font-bold text-sm text-[#1f1b12] font-['Plus_Jakarta_Sans']">
                    $124.50
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] bg-green-100 text-green-700 font-['Plus_Jakarta_Sans']">
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 rounded-full hover:bg-orange-100 text-[#8a7266] group-hover:text-[#974400] transition-all">
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </button>
                  </td>
                </tr>
                {/* Row 2 - Julian Baker */}
                <tr className="hover:bg-orange-50/30 transition-colors cursor-pointer group">
                  <td className="px-6 py-5 text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#974400]">
                    #ORD-82940
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#ffdbc9] flex items-center justify-center text-[#321200] text-xs font-bold font-['Plus_Jakarta_Sans']">
                        JB
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm text-[#1f1b12] font-['Plus_Jakarta_Sans']">
                          Julian Baker
                        </span>
                        <span className="text-xs text-[#8a7266] font-['Plus_Jakarta_Sans']">
                          jb@bakery.co.uk
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-[#1f1b12] font-['Plus_Jakarta_Sans']">
                    Oct 23, 2023 · 04:45 PM
                  </td>
                  <td className="px-6 py-5 font-bold text-sm text-[#1f1b12] font-['Plus_Jakarta_Sans']">
                    $42.00
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] bg-orange-100 text-orange-700 font-['Plus_Jakarta_Sans']">
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 rounded-full hover:bg-orange-100 text-[#8a7266] group-hover:text-[#974400] transition-all">
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </button>
                  </td>
                </tr>
                {/* Row 3 - Sarah Chen */}
                <tr className="hover:bg-orange-50/30 transition-colors cursor-pointer group">
                  <td className="px-6 py-5 text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#974400]">
                    #ORD-82939
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#ffdea0] flex items-center justify-center text-[#261900] text-xs font-bold font-['Plus_Jakarta_Sans']">
                        SC
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm text-[#1f1b12] font-['Plus_Jakarta_Sans']">
                          Sarah Chen
                        </span>
                        <span className="text-xs text-[#8a7266] font-['Plus_Jakarta_Sans']">
                          schen_art@gmail.com
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-[#1f1b12] font-['Plus_Jakarta_Sans']">
                    Oct 23, 2023 · 02:20 PM
                  </td>
                  <td className="px-6 py-5 font-bold text-sm text-[#1f1b12] font-['Plus_Jakarta_Sans']">
                    $315.20
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] bg-blue-100 text-blue-700 font-['Plus_Jakarta_Sans']">
                      Shipped
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 rounded-full hover:bg-orange-100 text-[#8a7266] group-hover:text-[#974400] transition-all">
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </button>
                  </td>
                </tr>
                {/* Row 4 - Marcus Wright */}
                <tr className="hover:bg-orange-50/30 transition-colors cursor-pointer group">
                  <td className="px-6 py-5 text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#974400]">
                    #ORD-82938
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#ffdad6] flex items-center justify-center text-[#93000a] text-xs font-bold font-['Plus_Jakarta_Sans']">
                        MW
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm text-[#1f1b12] font-['Plus_Jakarta_Sans']">
                          Marcus Wright
                        </span>
                        <span className="text-xs text-[#8a7266] font-['Plus_Jakarta_Sans']">
                          wright.design@outlook.com
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-[#1f1b12] font-['Plus_Jakarta_Sans']">
                    Oct 23, 2023 · 11:05 AM
                  </td>
                  <td className="px-6 py-5 font-bold text-sm text-[#1f1b12] font-['Plus_Jakarta_Sans']">
                    $89.90
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] bg-red-100 text-red-700 font-['Plus_Jakarta_Sans']">
                      Cancelled
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 rounded-full hover:bg-orange-100 text-[#8a7266] group-hover:text-[#974400] transition-all">
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="p-4 border-t border-orange-100 flex items-center justify-between">
              <span className="text-xs text-[#8a7266] font-medium font-['Plus_Jakarta_Sans']">
                Showing 1-4 of 1,284 results
              </span>
              <div className="flex gap-2">
                <button
                  className="px-4 py-1.5 rounded-lg border-2 border-orange-100 text-sm font-bold text-[#1f1b12] hover:bg-orange-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed font-['Plus_Jakarta_Sans']"
                  disabled
                >
                  Previous
                </button>
                <button className="px-4 py-1.5 rounded-lg border-2 border-orange-100 text-sm font-bold text-[#1f1b12] hover:bg-orange-50 transition-colors font-['Plus_Jakarta_Sans']">
                  Next
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
