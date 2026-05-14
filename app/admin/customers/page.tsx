'use client';

import Sidebar from '../components/sidebar';
import TopAppBar from '../components/top-appbar';

export default function Customers() {
  return (
    <>
      <Sidebar />
      <div className="ml-64 min-h-screen">
        {/* Top App Bar */}
        <TopAppBar />

        {/* Canvas */}
        <main className="p-6 lg:p-10 space-y-8 lg:space-y-10">
          {/* Page Header */}
          <section className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <div>
              <h2 className="font-['Noto_Serif'] text-[48px] leading-[1.2] tracking-[-0.02em] font-bold text-[#1f1b12]">
                Registered Customers
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-lg leading-[1.6] text-[#564338] max-w-2xl mt-2">
                Manage your premium clientele and track their engagement across
                the marketplace ecosystem.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#ddc1b3] rounded-xl text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#8a7266] hover:bg-[#ebe1d3] active:scale-[0.98] transition-all">
                <span
                  className="material-symbols-outlined"
                  data-icon="download"
                >
                  download
                </span>
                <span>Export CSV</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-[#93405f] text-white rounded-xl text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] hover:bg-[#b15878] active:scale-[0.98] transition-all shadow-md">
                <span
                  className="material-symbols-outlined"
                  data-icon="person_add"
                >
                  person_add
                </span>
                <span>Add Customer</span>
              </button>
            </div>
          </section>

          {/* Stats Grid */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6">
            <div className="bg-[#ffffff] p-5 lg:p-6 rounded-xl border border-orange-50/50 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-stone-500 mb-2">
                TOTAL CUSTOMERS
              </p>
              <h3 className="font-['Noto_Serif'] text-3xl font-bold text-[#1f1b12]">
                1,284
              </h3>
              <div className="mt-4 flex items-center text-emerald-600 text-sm font-bold font-['Plus_Jakarta_Sans']">
                <span
                  className="material-symbols-outlined text-sm mr-1"
                  data-icon="trending_up"
                >
                  trending_up
                </span>
                +12% from last month
              </div>
            </div>
            <div className="bg-[#ffffff] p-5 lg:p-6 rounded-xl border border-orange-50/50 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-stone-500 mb-2">
                ACTIVE SESSIONS
              </p>
              <h3 className="font-['Noto_Serif'] text-3xl font-bold text-[#1f1b12]">
                142
              </h3>
              <div className="mt-4 flex items-center text-amber-600 text-sm font-bold font-['Plus_Jakarta_Sans']">
                <span
                  className="material-symbols-outlined text-sm mr-1"
                  data-icon="bolt"
                >
                  bolt
                </span>
                Real-time activity
              </div>
            </div>
            <div className="bg-[#ffffff] p-5 lg:p-6 rounded-xl border border-orange-50/50 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-stone-500 mb-2">
                AVG. ORDER VALUE
              </p>
              <h3 className="font-['Noto_Serif'] text-3xl font-bold text-[#1f1b12]">
                £84.50
              </h3>
              <div className="mt-4 flex items-center text-emerald-600 text-sm font-bold font-['Plus_Jakarta_Sans']">
                <span
                  className="material-symbols-outlined text-sm mr-1"
                  data-icon="trending_up"
                >
                  trending_up
                </span>
                +5% vs last year
              </div>
            </div>
            <div className="bg-[#ffffff] p-5 lg:p-6 rounded-xl border border-orange-50/50 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-stone-500 mb-2">
                LOYALTY MEMBERS
              </p>
              <h3 className="font-['Noto_Serif'] text-3xl font-bold text-[#1f1b12]">
                856
              </h3>
              <div className="mt-4 flex items-center text-[#93405f] text-sm font-bold font-['Plus_Jakarta_Sans']">
                <span
                  className="material-symbols-outlined text-sm mr-1"
                  data-icon="verified"
                >
                  verified
                </span>
                67% Conversion
              </div>
            </div>
          </section>

          {/* Customers Table */}
          <section className="bg-[#ffffff] rounded-2xl border-2 border-orange-100/50 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#fcf2e3] border-b border-orange-100">
                    <th className="px-6 lg:px-8 py-5 text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-stone-600">
                      CUSTOMER
                    </th>
                    <th className="px-6 lg:px-8 py-5 text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-stone-600">
                      JOIN DATE
                    </th>
                    <th className="px-6 lg:px-8 py-5 text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-stone-600">
                      ORDER HISTORY
                    </th>
                    <th className="px-6 lg:px-8 py-5 text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-stone-600">
                      TOTAL SPENT
                    </th>
                    <th className="px-6 lg:px-8 py-5 text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-stone-600">
                      STATUS
                    </th>
                    <th className="px-6 lg:px-8 py-5"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-50">
                  {/* Customer Row 1 - Alastair Thorne */}
                  <tr className="hover:bg-orange-50/30 transition-colors group">
                    <td className="px-6 lg:px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            className="h-12 w-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ring-2 ring-[#fcc340]/20"
                            data-alt="professional portrait of a man in a beige linen shirt with warm studio lighting"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5Z5n8D-48ltQHL44VqU845sbPMMzeKmP57-sFQp_YsHNCPncDPeRXvA9zxsE7joNHAdNqDWcNLall1O2FS0cQm1lYfVK1BkKzMC31TQqzXqmPbLBwx8NO9Zq1E3lTmOkOAvGTu6jxe_C1bL4q1yJaRp6mbJu1Qms4QiRN5ljp6fVoiGcsNnFHZMn1voGtCH_CeV2q4fMN-slTlDqJi97-xNFvN-ixF-YnMBCJ1mnkjMGkmb4Eg-J1Jsvx6pSoFQpSCchCDNXtCVk"
                          />
                          <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white"></span>
                        </div>
                        <div>
                          <p className="font-['Noto_Serif'] text-lg leading-[1.4] font-semibold text-[#1f1b12]">
                            Alastair Thorne
                          </p>
                          <p className="text-sm text-stone-500 font-['Plus_Jakarta_Sans']">
                            alastair.t@lifestyle.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 lg:px-8 py-6 font-['Plus_Jakarta_Sans'] text-base leading-[1.5] text-[#564338]">
                      Oct 14, 2023
                    </td>
                    <td className="px-6 lg:px-8 py-6">
                      <div className="flex items-center gap-2">
                        <span className="bg-[#ffdea0] text-[#261900] px-3 py-1 rounded-full text-xs font-bold font-['Plus_Jakarta_Sans']">
                          24 Orders
                        </span>
                        <span className="text-xs text-stone-400 font-['Plus_Jakarta_Sans']">
                          Last: 2 days ago
                        </span>
                      </div>
                    </td>
                    <td className="px-6 lg:px-8 py-6 font-['Noto_Serif'] text-xl font-bold text-[#974400]">
                      £2,450.00
                    </td>
                    <td className="px-6 lg:px-8 py-6">
                      <span className="bg-[#974400]/10 text-[#bb5808] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.05em] border border-[#974400]/20 font-['Plus_Jakarta_Sans']">
                        Platinum Member
                      </span>
                    </td>
                    <td className="px-6 lg:px-8 py-6 text-right">
                      <button className="text-stone-400 hover:text-[#974400] transition-colors p-2 rounded-full hover:bg-orange-50">
                        <span
                          className="material-symbols-outlined"
                          data-icon="more_vert"
                        >
                          more_vert
                        </span>
                      </button>
                    </td>
                  </tr>
                  {/* Customer Row 2 - Elena Rossi */}
                  <tr className="hover:bg-orange-50/30 transition-colors group">
                    <td className="px-6 lg:px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            className="h-12 w-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ring-2 ring-[#fcc340]/20"
                            data-alt="close-up portrait of a woman with elegant jewelry and neutral makeup in natural daylight"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA77lTPem7USs437rNJQvIMrotj_2EDpxi7gFvaXNShO_bxOQDS-dCfX0SI580IX-wVjL6lcLuzX0KD9kpKbhtcG0foVs5Z_4tTVDm1zA2ymOL5ONdPqS5-zg8avvLkKBqApaOBO--0Y3i1jixHBjj8Nv8fxTJ0LLhPeabkfiHP2yrXdhEzxadbpb50sGgTOToAbOjqJc-tq6ASBNz0hkjR3hP0jYQWZ9Te_SarAJehwNF8fYrEmUKycYdKLs9V72iek22_ABkFJ7U"
                          />
                          <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-stone-300 ring-2 ring-white"></span>
                        </div>
                        <div>
                          <p className="font-['Noto_Serif'] text-lg leading-[1.4] font-semibold text-[#1f1b12]">
                            Elena Rossi
                          </p>
                          <p className="text-sm text-stone-500 font-['Plus_Jakarta_Sans']">
                            elena.rossi@arch.it
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 lg:px-8 py-6 font-['Plus_Jakarta_Sans'] text-base leading-[1.5] text-[#564338]">
                      Nov 02, 2023
                    </td>
                    <td className="px-6 lg:px-8 py-6">
                      <div className="flex items-center gap-2">
                        <span className="bg-[#ebe1d3] text-[#564338] px-3 py-1 rounded-full text-xs font-bold font-['Plus_Jakarta_Sans']">
                          8 Orders
                        </span>
                        <span className="text-xs text-stone-400 font-['Plus_Jakarta_Sans']">
                          Last: 1 week ago
                        </span>
                      </div>
                    </td>
                    <td className="px-6 lg:px-8 py-6 font-['Noto_Serif'] text-xl font-bold text-[#974400]">
                      £842.20
                    </td>
                    <td className="px-6 lg:px-8 py-6">
                      <span className="bg-[#93405f]/10 text-[#93405f] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.05em] border border-[#93405f]/20 font-['Plus_Jakarta_Sans']">
                        Gold Tier
                      </span>
                    </td>
                    <td className="px-6 lg:px-8 py-6 text-right">
                      <button className="text-stone-400 hover:text-[#974400] transition-colors p-2 rounded-full hover:bg-orange-50">
                        <span
                          className="material-symbols-outlined"
                          data-icon="more_vert"
                        >
                          more_vert
                        </span>
                      </button>
                    </td>
                  </tr>
                  {/* Customer Row 3 - Julian Mercer */}
                  <tr className="hover:bg-orange-50/30 transition-colors group">
                    <td className="px-6 lg:px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            className="h-12 w-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ring-2 ring-[#fcc340]/20"
                            data-alt="headshot of a middle-aged man with salt and pepper beard wearing a navy suit in a modern office setting"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCpmzE_wXwkxhLCjq3MAJKGyvcSDFLnqhAjzXsW7Wrb72ryVP7SSRvYAzAQ71gXM_RYuDz9Ptio646afegVqmxzzP11B9FzDy3R8YtuUFk-5LgoNkQxN3zZjW1rewCHUYwhaSije-In9LL1xhf_ZAgabpke9u0zPjfxmjMCuQnBu5ebRl9C-I6SUGLjBV8a32dV0JhYr15vSwzudZrfXl0ArqXq4Sv9ZCzhwhUPBaGMvnt2V5_pWnSGOHqsaLe8ae3RNKGDt7Q1U0"
                          />
                          <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white"></span>
                        </div>
                        <div>
                          <p className="font-['Noto_Serif'] text-lg leading-[1.4] font-semibold text-[#1f1b12]">
                            Julian Mercer
                          </p>
                          <p className="text-sm text-stone-500 font-['Plus_Jakarta_Sans']">
                            mercer.j@finance.uk
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 lg:px-8 py-6 font-['Plus_Jakarta_Sans'] text-base leading-[1.5] text-[#564338]">
                      Dec 15, 2023
                    </td>
                    <td className="px-6 lg:px-8 py-6">
                      <div className="flex items-center gap-2">
                        <span className="bg-[#ffdea0] text-[#261900] px-3 py-1 rounded-full text-xs font-bold font-['Plus_Jakarta_Sans']">
                          42 Orders
                        </span>
                        <span className="text-xs text-stone-400 font-['Plus_Jakarta_Sans']">
                          Last: 3 hours ago
                        </span>
                      </div>
                    </td>
                    <td className="px-6 lg:px-8 py-6 font-['Noto_Serif'] text-xl font-bold text-[#974400]">
                      £5,120.50
                    </td>
                    <td className="px-6 lg:px-8 py-6">
                      <span className="bg-[#974400]/10 text-[#bb5808] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.05em] border border-[#974400]/20 font-['Plus_Jakarta_Sans']">
                        Platinum Member
                      </span>
                    </td>
                    <td className="px-6 lg:px-8 py-6 text-right">
                      <button className="text-stone-400 hover:text-[#974400] transition-colors p-2 rounded-full hover:bg-orange-50">
                        <span
                          className="material-symbols-outlined"
                          data-icon="more_vert"
                        >
                          more_vert
                        </span>
                      </button>
                    </td>
                  </tr>
                  {/* Customer Row 4 - Sienna Ward */}
                  <tr className="hover:bg-orange-50/30 transition-colors group">
                    <td className="px-6 lg:px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            className="h-12 w-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ring-2 ring-[#fcc340]/20"
                            data-alt="vibrant portrait of a young woman with curly hair and bright yellow top against a minimal blue wall"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9ZjTMWRva_l4XpYj07rENOLbzAqmpR1dTJ9dqo8jKVH2DN62SGuxT7JBbX3dfBnv7KvGE29ey3qzPYYcmbEQFwKwkY1UdJK-uL7RBM1m5-huEO45thQ4SW6-5X23_Xgkb9SO2fDl7u-H0lgx05KmKSlLWGlgTcPijAFpxU29LCBLQPSsPCSv3HtzdPxKlgP8RPRC9vUqCelcRuKWIc9jmHtLzjPh3XIMWqNeh07a3E8_8SbIXM23gZN-jyRYCvNE2r5gtb9Tk_ks"
                          />
                          <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-stone-300 ring-2 ring-white"></span>
                        </div>
                        <div>
                          <p className="font-['Noto_Serif'] text-lg leading-[1.4] font-semibold text-[#1f1b12]">
                            Sienna Ward
                          </p>
                          <p className="text-sm text-stone-500 font-['Plus_Jakarta_Sans']">
                            sienna.ward@design.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 lg:px-8 py-6 font-['Plus_Jakarta_Sans'] text-base leading-[1.5] text-[#564338]">
                      Jan 05, 2024
                    </td>
                    <td className="px-6 lg:px-8 py-6">
                      <div className="flex items-center gap-2">
                        <span className="bg-[#ebe1d3] text-[#564338] px-3 py-1 rounded-full text-xs font-bold font-['Plus_Jakarta_Sans']">
                          2 Orders
                        </span>
                        <span className="text-xs text-stone-400 font-['Plus_Jakarta_Sans']">
                          Last: 1 month ago
                        </span>
                      </div>
                    </td>
                    <td className="px-6 lg:px-8 py-6 font-['Noto_Serif'] text-xl font-bold text-[#974400]">
                      £145.00
                    </td>
                    <td className="px-6 lg:px-8 py-6">
                      <span className="bg-[#ddc1b3]/10 text-[#8a7266] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.05em] border border-[#ddc1b3]/20 font-['Plus_Jakarta_Sans']">
                        Standard
                      </span>
                    </td>
                    <td className="px-6 lg:px-8 py-6 text-right">
                      <button className="text-stone-400 hover:text-[#974400] transition-colors p-2 rounded-full hover:bg-orange-50">
                        <span
                          className="material-symbols-outlined"
                          data-icon="more_vert"
                        >
                          more_vert
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="px-6 lg:px-8 py-6 bg-[#f6edde] border-t border-orange-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm font-['Plus_Jakarta_Sans'] text-stone-500">
                Showing <span className="font-bold text-[#1f1b12]">1-4</span> of{' '}
                <span className="font-bold text-[#1f1b12]">1,284</span>{' '}
                customers
              </p>
              <div className="flex gap-2">
                <button
                  className="p-2 border border-[#ddc1b3] rounded-lg hover:bg-[#ebe1d3] text-[#564338] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  disabled
                >
                  <span
                    className="material-symbols-outlined"
                    data-icon="chevron_left"
                  >
                    chevron_left
                  </span>
                </button>
                <button className="px-4 py-2 bg-[#795900] text-white rounded-lg text-sm font-bold font-['Plus_Jakarta_Sans']">
                  1
                </button>
                <button className="px-4 py-2 hover:bg-[#ebe1d3] text-[#564338] rounded-lg text-sm font-bold font-['Plus_Jakarta_Sans'] transition-colors">
                  2
                </button>
                <button className="px-4 py-2 hover:bg-[#ebe1d3] text-[#564338] rounded-lg text-sm font-bold font-['Plus_Jakarta_Sans'] transition-colors">
                  3
                </button>
                <button className="px-4 py-2 text-stone-400 cursor-default text-sm font-['Plus_Jakarta_Sans']">
                  ...
                </button>
                <button className="px-4 py-2 hover:bg-[#ebe1d3] text-[#564338] rounded-lg text-sm font-bold font-['Plus_Jakarta_Sans'] transition-colors">
                  321
                </button>
                <button className="p-2 border border-[#ddc1b3] rounded-lg hover:bg-[#ebe1d3] text-[#564338] transition-colors">
                  <span
                    className="material-symbols-outlined"
                    data-icon="chevron_right"
                  >
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* Bottom Insights Row */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            <div className="bg-[#974400] text-white p-6 lg:p-8 rounded-2xl relative overflow-hidden shadow-xl">
              <div className="relative z-10">
                <h4 className="font-['Noto_Serif'] text-[32px] leading-[1.3] font-semibold mb-4 italic">
                  Customer Insights
                </h4>
                <p className="font-['Plus_Jakarta_Sans'] text-base leading-[1.5] opacity-90 max-w-md mb-6">
                  Recent data suggests a 15% increase in repeat purchases from
                  your 'Platinum' tier customers in the bakery sector.
                </p>
                <button className="px-6 py-3 bg-white text-[#974400] text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] rounded-xl hover:bg-orange-50 active:scale-[0.98] transition-all">
                  View Full Report
                </button>
              </div>
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#bb5808] opacity-20 rounded-full blur-3xl"></div>
            </div>
            <div className="bg-[#f1e7d8] border-2 border-orange-100/50 p-6 lg:p-8 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-['Noto_Serif'] text-xl leading-[1.4] font-semibold text-[#1f1b12]">
                  Quick Actions
                </h4>
                <span
                  className="material-symbols-outlined text-[#974400]"
                  data-icon="bolt"
                >
                  bolt
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-orange-100 hover:border-[#974400] hover:shadow-md active:scale-[0.98] transition-all text-center">
                  <span
                    className="material-symbols-outlined text-[#974400] mb-2 text-2xl"
                    data-icon="mail"
                  >
                    mail
                  </span>
                  <span className="text-xs uppercase text-stone-600 font-bold font-['Plus_Jakarta_Sans'] tracking-[0.05em]">
                    Blast Email
                  </span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-orange-100 hover:border-[#974400] hover:shadow-md active:scale-[0.98] transition-all text-center">
                  <span
                    className="material-symbols-outlined text-[#974400] mb-2 text-2xl"
                    data-icon="loyalty"
                  >
                    loyalty
                  </span>
                  <span className="text-xs uppercase text-stone-600 font-bold font-['Plus_Jakarta_Sans'] tracking-[0.05em]">
                    Assign Tier
                  </span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-orange-100 hover:border-[#974400] hover:shadow-md active:scale-[0.98] transition-all text-center">
                  <span
                    className="material-symbols-outlined text-[#974400] mb-2 text-2xl"
                    data-icon="block"
                  >
                    block
                  </span>
                  <span className="text-xs uppercase text-stone-600 font-bold font-['Plus_Jakarta_Sans'] tracking-[0.05em]">
                    Manage Bans
                  </span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-orange-100 hover:border-[#974400] hover:shadow-md active:scale-[0.98] transition-all text-center">
                  <span
                    className="material-symbols-outlined text-[#974400] mb-2 text-2xl"
                    data-icon="auto_awesome"
                  >
                    auto_awesome
                  </span>
                  <span className="text-xs uppercase text-stone-600 font-bold font-['Plus_Jakarta_Sans'] tracking-[0.05em]">
                    AI Outreach
                  </span>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
