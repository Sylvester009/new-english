'use client';

import Sidebar from '../components/sidebar';
import TopAppBar from '../components/top-appbar';

export default function Analytics() {
  return (
    <>
      <Sidebar />
      <main className="ml-64 min-h-screen">
        {/* Top App Bar */}
        <TopAppBar />

        {/* Analytics Content */}
        <div className="p-6 lg:p-10 space-y-8 lg:space-y-10">
          {/* Hero Stats */}
          <section className="flex flex-col md:flex-row gap-6">
            <div className="grow">
              <h2 className="font-['Noto_Serif'] text-[48px] leading-[1.2] tracking-[-0.02em] font-bold text-[#1f1b12] mb-2">
                Performance Overview
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-lg leading-[1.6] text-[#564338] max-w-2xl">
                Visualizing the heartbeat of L&apos;Artisan. Growth is sustained
                through quality and customer devotion.
              </p>
            </div>
            <div className="flex items-end gap-3">
              <button className="px-4 py-2.5 border-2 border-[#ddc1b3] rounded-xl text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#1f1b12] flex items-center gap-2 hover:bg-[#ebe1d3] transition-colors">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="calendar_today"
                >
                  calendar_today
                </span>
                Last 30 Days
              </button>
              <button className="px-4 py-2.5 bg-[#795900] text-white text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] rounded-xl flex items-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all shadow-md">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="download"
                >
                  download
                </span>
                Export Report
              </button>
            </div>
          </section>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Total Revenue */}
            <div className="bg-[#ffffff] p-6 rounded-xl border border-orange-50 shadow-[0_4px_20px_rgba(139,69,19,0.06)] relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span
                  className="material-symbols-outlined text-6xl"
                  data-icon="trending_up"
                >
                  trending_up
                </span>
              </div>
              <p className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase mb-2">
                Total Revenue
              </p>
              <h3 className="font-['Noto_Serif'] text-[32px] leading-[1.3] font-semibold text-[#974400]">
                $124,592.00
              </h3>
              <div className="flex items-center gap-1 mt-2 text-green-600 font-bold text-sm font-['Plus_Jakarta_Sans']">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="arrow_upward"
                >
                  arrow_upward
                </span>
                12.5% vs last month
              </div>
            </div>

            {/* Total Orders */}
            <div className="bg-[#ffffff] p-6 rounded-xl border border-orange-50 shadow-[0_4px_20px_rgba(139,69,19,0.06)] relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span
                  className="material-symbols-outlined text-6xl"
                  data-icon="shopping_bag"
                >
                  shopping_bag
                </span>
              </div>
              <p className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase mb-2">
                Total Orders
              </p>
              <h3 className="font-['Noto_Serif'] text-[32px] leading-[1.3] font-semibold text-[#974400]">
                3,842
              </h3>
              <div className="flex items-center gap-1 mt-2 text-green-600 font-bold text-sm font-['Plus_Jakarta_Sans']">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="arrow_upward"
                >
                  arrow_upward
                </span>
                8.2% vs last month
              </div>
            </div>

            {/* Retention Rate */}
            <div className="bg-[#ffffff] p-6 rounded-xl border border-orange-50 shadow-[0_4px_20px_rgba(139,69,19,0.06)] relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span
                  className="material-symbols-outlined text-6xl"
                  data-icon="person_add"
                >
                  person_add
                </span>
              </div>
              <p className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase mb-2">
                Retention Rate
              </p>
              <h3 className="font-['Noto_Serif'] text-[32px] leading-[1.3] font-semibold text-[#974400]">
                68.4%
              </h3>
              <div className="flex items-center gap-1 mt-2 text-orange-600 font-bold text-sm font-['Plus_Jakarta_Sans']">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="horizontal_rule"
                >
                  horizontal_rule
                </span>
                Stable trend
              </div>
            </div>

            {/* Avg. Order Value */}
            <div className="bg-[#ffffff] p-6 rounded-xl border border-orange-50 shadow-[0_4px_20px_rgba(139,69,19,0.06)] relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span
                  className="material-symbols-outlined text-6xl"
                  data-icon="avg_time"
                >
                  avg_time
                </span>
              </div>
              <p className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase mb-2">
                Avg. Order Value
              </p>
              <h3 className="font-['Noto_Serif'] text-[32px] leading-[1.3] font-semibold text-[#974400]">
                $32.42
              </h3>
              <div className="flex items-center gap-1 mt-2 text-green-600 font-bold text-sm font-['Plus_Jakarta_Sans']">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="arrow_upward"
                >
                  arrow_upward
                </span>
                4.1% vs last month
              </div>
            </div>
          </div>

          {/* Bento Grid Visualization */}
          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            {/* Main Chart: Sales Performance */}
            <div className="col-span-12 lg:col-span-8 bg-[#ffffff] p-6 lg:p-8 rounded-2xl border border-orange-50 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h4 className="font-['Noto_Serif'] text-xl leading-[1.4] font-semibold text-[#1f1b12]">
                    Sales Performance
                  </h4>
                  <p className="text-sm text-[#564338] font-['Plus_Jakarta_Sans'] mt-1">
                    Revenue trend over the last 30 days
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-stone-500 font-['Plus_Jakarta_Sans']">
                    <span className="w-3 h-3 rounded-full bg-[#bb5808]"></span>
                    Revenue
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-bold text-stone-500 font-['Plus_Jakarta_Sans']">
                    <span className="w-3 h-3 rounded-full bg-[#fcc340]"></span>
                    Goal
                  </span>
                </div>
              </div>
              {/* Chart */}
              <div className="h-64 w-full flex items-end justify-between gap-2 px-2">
                {[40, 50, 60, 45, 70, 85, 65, 55, 90, 75, 80, 100].map(
                  (height, i) => (
                    <div
                      key={i}
                      className="w-full bg-[#bb5808]/20 rounded-t-sm relative group h-full"
                    >
                      <div
                        className="absolute bottom-0 w-full bg-[#bb5808] rounded-t-sm group-hover:brightness-110 transition-all"
                        style={{height: `${height * 0.85}%`}}
                      ></div>
                    </div>
                  ),
                )}
              </div>
              <div className="mt-4 pt-4 border-t border-orange-50 flex justify-between text-[10px] font-bold font-['Plus_Jakarta_Sans'] text-stone-400 uppercase tracking-[0.1em]">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
              </div>
            </div>

            {/* Side Panel: Category Popularity */}
            <div className="col-span-12 lg:col-span-4">
              <div className="bg-[#fcc340] text-[#6f5100] p-6 lg:p-8 rounded-2xl shadow-lg relative overflow-hidden h-full">
                <div className="relative z-10">
                  <h4 className="font-['Noto_Serif'] text-xl leading-[1.4] font-semibold mb-4">
                    Top Categories
                  </h4>
                  <div className="space-y-5">
                    {[
                      {name: 'Artisan Sourdough', percent: 42},
                      {name: 'French Pastries', percent: 28},
                      {name: 'Organic Coffee', percent: 18},
                      {name: 'Local Cheeses', percent: 12},
                    ].map(category => (
                      <div key={category.name}>
                        <div className="flex justify-between text-sm font-bold font-['Plus_Jakarta_Sans'] mb-2">
                          <span>{category.name}</span>
                          <span>{category.percent}%</span>
                        </div>
                        <div className="w-full bg-[#6f5100]/10 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-[#6f5100] h-full rounded-full transition-all duration-500"
                            style={{width: `${category.percent}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-8 text-sm font-bold font-['Plus_Jakarta_Sans'] uppercase tracking-[0.1em] underline underline-offset-4 decoration-2 hover:opacity-80 transition-opacity">
                    View Detailed Inventory
                  </button>
                </div>
                <div className="absolute -right-8 -bottom-8 opacity-20 transform rotate-12">
                  <span
                    className="material-symbols-outlined text-[160px]"
                    data-icon="bakery_dining"
                  >
                    bakery_dining
                  </span>
                </div>
              </div>
            </div>

            {/* Customer Loyalty */}
            <div className="col-span-12 lg:col-span-4 bg-[#ffffff] p-6 lg:p-8 rounded-2xl border border-orange-50 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-['Noto_Serif'] text-xl leading-[1.4] font-semibold text-[#1f1b12] mb-2">
                  Customer Loyalty
                </h4>
                <p className="text-sm text-[#564338] font-['Plus_Jakarta_Sans'] mb-6">
                  First-time vs Returning customers
                </p>
              </div>
              <div className="flex items-center justify-center py-4">
                <div className="relative w-40 h-40">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      className="text-[#f1e7d8]"
                      cx="80"
                      cy="80"
                      fill="transparent"
                      r="70"
                      stroke="currentColor"
                      strokeWidth="12"
                    ></circle>
                    <circle
                      className="text-[#b15878]"
                      cx="80"
                      cy="80"
                      fill="transparent"
                      r="70"
                      stroke="currentColor"
                      strokeDasharray="440"
                      strokeDashoffset="140"
                      strokeWidth="12"
                      strokeLinecap="round"
                    ></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-['Noto_Serif'] text-2xl font-bold text-[#1f1b12]">
                      68%
                    </span>
                    <span className="text-[10px] font-bold font-['Plus_Jakarta_Sans'] uppercase text-stone-400 tracking-[0.1em]">
                      Returning
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 mt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#b15878]"></div>
                    <span className="text-xs font-semibold text-stone-600 font-['Plus_Jakarta_Sans']">
                      Returning Customers
                    </span>
                  </div>
                  <span className="text-xs font-bold font-['Plus_Jakarta_Sans'] text-[#1f1b12]">
                    2,412
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f1e7d8]"></div>
                    <span className="text-xs font-semibold text-stone-600 font-['Plus_Jakarta_Sans']">
                      New Acquisitions
                    </span>
                  </div>
                  <span className="text-xs font-bold font-['Plus_Jakarta_Sans'] text-[#1f1b12]">
                    1,130
                  </span>
                </div>
              </div>
            </div>

            {/* Geographic Reach */}
            <div className="col-span-12 lg:col-span-8 bg-[#ffffff] p-6 lg:p-8 rounded-2xl border border-orange-50 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h4 className="font-['Noto_Serif'] text-xl leading-[1.4] font-semibold text-[#1f1b12]">
                    Geographic Reach
                  </h4>
                  <p className="text-sm text-[#564338] font-['Plus_Jakarta_Sans'] mt-1">
                    Top performing delivery zones
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-[0.05em] font-['Plus_Jakarta_Sans']">
                    Live Traffic
                  </span>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden bg-orange-50/50">
                <div
                  className="absolute inset-0 grayscale opacity-40 mix-blend-multiply"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAf6gYEIs6kUAdphKwTMg4FjMMz715I8_LLDOz6nG21VSy7k0MNG1iQ97BhF26P4Hv9HvHT-FISEN0qBz-HFbrf8fBL-peB6QzT8FvFoVmuEvn1MImH_3U7gXAHMaTi5RbVvL0o-9CD_rwvWFK_QKXBGuw6Ix_xOlwF0cvhG9LHD0STsX93A5de87CZTiqav_FSp3jhw9_aNPsosfBQAWzqg_LF5S-apB-PWi66MyEy5z0coTZ9M1lUuzjPhSrM3KTMKkvylLFKIXs')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-orange-400/20 rounded-full animate-pulse flex items-center justify-center">
                    <div className="w-16 h-16 bg-orange-500/30 rounded-full animate-ping flex items-center justify-center">
                      <div className="w-4 h-4 bg-orange-600 rounded-full shadow-[0_0_20px_rgba(234,88,12,0.8)]"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-4 rounded-lg shadow-sm border border-orange-50 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                    <span className="text-xs font-bold text-stone-700 font-['Plus_Jakarta_Sans']">
                      London Central (42%)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    <span className="text-xs font-bold text-stone-700 font-['Plus_Jakarta_Sans']">
                      Chelsea (24%)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-200"></span>
                    <span className="text-xs font-bold text-stone-700 font-['Plus_Jakarta_Sans']">
                      Hackney (18%)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Growth Events */}
          <section className="mt-12">
            <h4 className="font-['Noto_Serif'] text-xl leading-[1.4] font-semibold text-[#1f1b12] mb-6">
              Recent Growth Events
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#fcf2e3] hover:bg-white transition-colors cursor-pointer group border border-transparent hover:border-orange-100 hover:shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-700 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined" data-icon="star">
                    star
                  </span>
                </div>
                <div>
                  <p className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#1f1b12] uppercase">
                    New Milestone
                  </p>
                  <p className="text-sm text-stone-500 font-['Plus_Jakarta_Sans'] mt-1">
                    10,000 Lifetime Orders reached
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#fcf2e3] hover:bg-white transition-colors cursor-pointer group border border-transparent hover:border-orange-100 hover:shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#f6be3b]/20 flex items-center justify-center text-[#795900] group-hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined"
                    data-icon="campaign"
                  >
                    campaign
                  </span>
                </div>
                <div>
                  <p className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#1f1b12] uppercase">
                    Marketing Peak
                  </p>
                  <p className="text-sm text-stone-500 font-['Plus_Jakarta_Sans'] mt-1">
                    +15% traffic from Social Media
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#fcf2e3] hover:bg-white transition-colors cursor-pointer group border border-transparent hover:border-orange-100 hover:shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#ffb0c9]/40 flex items-center justify-center text-[#93405f] group-hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined"
                    data-icon="reviews"
                  >
                    reviews
                  </span>
                </div>
                <div>
                  <p className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#1f1b12] uppercase">
                    High Rating
                  </p>
                  <p className="text-sm text-stone-500 font-['Plus_Jakarta_Sans'] mt-1">
                    4.9 Average score this week
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="p-8 border-t border-orange-100 text-center">
          <p className="text-xs font-bold font-['Plus_Jakarta_Sans'] text-stone-400 uppercase tracking-[0.2em]">
            © 2024 L&apos;Artisan Marketplace. Precision and Passion.
          </p>
        </footer>
      </main>
    </>
  );
}
