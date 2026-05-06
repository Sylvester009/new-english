import Sidebar from '../components/sidebar';

export default function Analytics() {
  return (
    <>
      <Sidebar />
      <main className="ml-64 min-h-screen">
        {/* <!-- TopAppBar --> */}
        <header className="sticky top-0 right-0 flex justify-between items-center px-8 z-30 bg-[#FDF5E6]/90 backdrop-blur-md w-full h-16 border-b-2 border-orange-100">
          <div className="flex items-center gap-4">
            <div className="relative">
              <span
                className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
                data-icon="search"
              >
                search
              </span>
              <input
                className="pl-10 pr-4 py-1.5 bg-surface-container-low border-none rounded-full text-sm focus:ring-2 focus:ring-secondary focus:outline-none w-64"
                placeholder="Search analytics..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <button className="text-stone-600 hover:opacity-80 transition-opacity">
                <span
                  className="material-symbols-outlined"
                  data-icon="notifications"
                >
                  notifications
                </span>
              </button>
              <button className="text-stone-600 hover:opacity-80 transition-opacity">
                <span
                  className="material-symbols-outlined"
                  data-icon="help_outline"
                >
                  help_outline
                </span>
              </button>
            </div>
            <div className="h-8 w-px bg-orange-100"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="font-label-bold text-[10px] text-stone-500 uppercase tracking-widest">
                  Admin User
                </p>
                <button className="font-sans font-semibold uppercase tracking-wider text-xs text-orange-700 hover:opacity-80 transition-opacity">
                  Logout
                </button>
              </div>
              <img
                alt="Admin"
                className="w-10 h-10 rounded-full border-2 border-orange-200 object-cover"
                data-alt="professional portrait of a confident man in a neutral studio setting with warm lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl_yCd8NtdM5jwvuldWfiB9eZu41qsFjkuDlNu1e3SlmFIb7KE6Ko3qVhZwXyQgJWwQHuIjJPe5pnEhwDXahivW5MJp3whoklYQUmpjusasUaLvvXhHKFcavN8Xh6iPk4Q06K5TpaaL5zHnR51U7EDPFWKNpcFrdtPngBf2pcgZY01gQdiqO2Zy0Ofc2-7UQqNwQBjnBHBCd2PLNXdVDpuJkkHeYZvsYlEp_SIwqwnuM2sttSewRCGWGmGoEJeNk2oPEhIKm4PEtc"
              />
            </div>
          </div>
        </header>
        {/* <!-- Analytics Content --> */}
        <div className="p-10 space-y-10">
          {/* <!-- Hero Stats --> */}
          <section className="flex flex-col md:flex-row gap-6">
            <div className="grow">
              <h2 className="font-display-lg text-display-lg text-on-surface mb-2">
                Performance Overview
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Visualizing the heartbeat of L'Artisan. Growth is sustained
                through quality and customer devotion.
              </p>
            </div>
            <div className="flex items-end gap-3">
              <button className="px-4 py-2 border-2 border-outline rounded-lg font-label-bold text-label-bold flex items-center gap-2 hover:bg-surface-variant transition-colors">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="calendar_today"
                >
                  calendar_today
                </span>
                Last 30 Days
              </button>
              <button className="px-4 py-2 bg-secondary text-on-secondary font-label-bold text-label-bold rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity shadow-md">
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
          {/* <!-- KPI Cards --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-orange-50 shadow-[0_4px_20px_rgba(139,69,19,0.06)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span
                  className="material-symbols-outlined text-6xl"
                  data-icon="trending_up"
                >
                  trending_up
                </span>
              </div>
              <p className="font-label-bold text-xs text-on-surface-variant uppercase tracking-widest mb-2">
                Total Revenue
              </p>
              <h3 className="font-headline-md text-headline-md text-primary">
                $124,592.00
              </h3>
              <div className="flex items-center gap-1 mt-2 text-green-600 font-bold text-sm">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="arrow_upward"
                >
                  arrow_upward
                </span>
                12.5% vs last month
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-orange-50 shadow-[0_4px_20px_rgba(139,69,19,0.06)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span
                  className="material-symbols-outlined text-6xl"
                  data-icon="shopping_bag"
                >
                  shopping_bag
                </span>
              </div>
              <p className="font-label-bold text-xs text-on-surface-variant uppercase tracking-widest mb-2">
                Total Orders
              </p>
              <h3 className="font-headline-md text-headline-md text-primary">
                3,842
              </h3>
              <div className="flex items-center gap-1 mt-2 text-green-600 font-bold text-sm">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="arrow_upward"
                >
                  arrow_upward
                </span>
                8.2% vs last month
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-orange-50 shadow-[0_4px_20px_rgba(139,69,19,0.06)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span
                  className="material-symbols-outlined text-6xl"
                  data-icon="person_add"
                >
                  person_add
                </span>
              </div>
              <p className="font-label-bold text-xs text-on-surface-variant uppercase tracking-widest mb-2">
                Retention Rate
              </p>
              <h3 className="font-headline-md text-headline-md text-primary">
                68.4%
              </h3>
              <div className="flex items-center gap-1 mt-2 text-orange-600 font-bold text-sm">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="horizontal_rule"
                >
                  horizontal_rule
                </span>
                Stable trend
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-orange-50 shadow-[0_4px_20px_rgba(139,69,19,0.06)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span
                  className="material-symbols-outlined text-6xl"
                  data-icon="avg_time"
                >
                  avg_time
                </span>
              </div>
              <p className="font-label-bold text-xs text-on-surface-variant uppercase tracking-widest mb-2">
                Avg. Order Value
              </p>
              <h3 className="font-headline-md text-headline-md text-primary">
                $32.42
              </h3>
              <div className="flex items-center gap-1 mt-2 text-green-600 font-bold text-sm">
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
          {/* <!-- Bento Grid Visualization --> */}
          <div className="grid grid-cols-12 gap-8 h-auto">
            {/* <!-- Main Chart: Sales Performance --> */}
            <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-8 rounded-2xl border border-orange-50 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h4 className="font-title-sm text-title-sm text-on-surface">
                    Sales Performance
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    Revenue trend over the last 30 days
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="flex items-center gap-1 text-xs font-bold text-stone-500">
                    <span className="w-3 h-3 rounded-full bg-primary-container"></span>{' '}
                    Revenue
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold text-stone-500">
                    <span className="w-3 h-3 rounded-full bg-secondary-container"></span>{' '}
                    Goal
                  </span>
                </div>
              </div>
              {/* <!-- Mockup Chart --> */}
              <div className="h-64 w-full flex items-end justify-between gap-2 px-2">
                <div className="w-full bg-primary-container/20 rounded-t-sm relative group h-[40%]">
                  <div className="absolute bottom-0 w-full bg-primary-container rounded-t-sm h-[80%] group-hover:brightness-110 transition-all"></div>
                </div>
                <div className="w-full bg-primary-container/20 rounded-t-sm relative group h-[50%]">
                  <div className="absolute bottom-0 w-full bg-primary-container rounded-t-sm h-[75%] group-hover:brightness-110 transition-all"></div>
                </div>
                <div className="w-full bg-primary-container/20 rounded-t-sm relative group h-[60%]">
                  <div className="absolute bottom-0 w-full bg-primary-container rounded-t-sm h-[90%] group-hover:brightness-110 transition-all"></div>
                </div>
                <div className="w-full bg-primary-container/20 rounded-t-sm relative group h-[45%]">
                  <div className="absolute bottom-0 w-full bg-primary-container rounded-t-sm h-[60%] group-hover:brightness-110 transition-all"></div>
                </div>
                <div className="w-full bg-primary-container/20 rounded-t-sm relative group h-[70%]">
                  <div className="absolute bottom-0 w-full bg-primary-container rounded-t-sm h-[85%] group-hover:brightness-110 transition-all"></div>
                </div>
                <div className="w-full bg-primary-container/20 rounded-t-sm relative group h-[85%]">
                  <div className="absolute bottom-0 w-full bg-primary-container rounded-t-sm h-[95%] group-hover:brightness-110 transition-all"></div>
                </div>
                <div className="w-full bg-primary-container/20 rounded-t-sm relative group h-[65%]">
                  <div className="absolute bottom-0 w-full bg-primary-container rounded-t-sm h-[70%] group-hover:brightness-110 transition-all"></div>
                </div>
                <div className="w-full bg-primary-container/20 rounded-t-sm relative group h-[55%]">
                  <div className="absolute bottom-0 w-full bg-primary-container rounded-t-sm h-[80%] group-hover:brightness-110 transition-all"></div>
                </div>
                <div className="w-full bg-primary-container/20 rounded-t-sm relative group h-[90%]">
                  <div className="absolute bottom-0 w-full bg-primary-container rounded-t-sm h-[92%] group-hover:brightness-110 transition-all"></div>
                </div>
                <div className="w-full bg-primary-container/20 rounded-t-sm relative group h-[75%]">
                  <div className="absolute bottom-0 w-full bg-primary-container rounded-t-sm h-[85%] group-hover:brightness-110 transition-all"></div>
                </div>
                <div className="w-full bg-primary-container/20 rounded-t-sm relative group h-[80%]">
                  <div className="absolute bottom-0 w-full bg-primary-container rounded-t-sm h-[88%] group-hover:brightness-110 transition-all"></div>
                </div>
                <div className="w-full bg-primary-container/20 rounded-t-sm relative group h-full">
                  <div className="absolute bottom-0 w-full bg-primary-container rounded-t-sm h-[98%] group-hover:brightness-110 transition-all"></div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-orange-50 flex justify-between text-[10px] font-label-bold text-stone-400 uppercase tracking-widest">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
              </div>
            </div>
            {/* <!-- Side Panel: Category Popularity --> */}
            <div className="col-span-12 lg:col-span-4 space-y-8">
              <div className="bg-secondary-container text-on-secondary-container p-8 rounded-2xl shadow-lg relative overflow-hidden h-full">
                <div className="relative z-10">
                  <h4 className="font-title-sm text-title-sm mb-4">
                    Top Categories
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm font-bold mb-2">
                        <span>Artisan Sourdough</span>
                        <span>42%</span>
                      </div>
                      <div className="w-full bg-on-secondary-container/10 h-2 rounded-full overflow-hidden">
                        <div className="bg-on-secondary-container h-full w-[42%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm font-bold mb-2">
                        <span>French Pastries</span>
                        <span>28%</span>
                      </div>
                      <div className="w-full bg-on-secondary-container/10 h-2 rounded-full overflow-hidden">
                        <div className="bg-on-secondary-container h-full w-[28%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm font-bold mb-2">
                        <span>Organic Coffee</span>
                        <span>18%</span>
                      </div>
                      <div className="w-full bg-on-secondary-container/10 h-2 rounded-full overflow-hidden">
                        <div className="bg-on-secondary-container h-full w-[18%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm font-bold mb-2">
                        <span>Local Cheeses</span>
                        <span>12%</span>
                      </div>
                      <div className="w-full bg-on-secondary-container/10 h-2 rounded-full overflow-hidden">
                        <div className="bg-on-secondary-container h-full w-[12%]"></div>
                      </div>
                    </div>
                  </div>
                  <button className="mt-8 text-sm font-label-bold uppercase tracking-widest underline underline-offset-4 decoration-2">
                    View Detailed Inventory
                  </button>
                </div>
                {/* <!-- Decorative element --> */}
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
            {/* <!-- Bottom Row: Customer Retention & Heatmap --> */}
            <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest p-8 rounded-2xl border border-orange-50 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-title-sm text-title-sm text-on-surface mb-2">
                  Customer Loyalty
                </h4>
                <p className="text-sm text-on-surface-variant mb-6">
                  First-time vs Returning customers
                </p>
              </div>
              <div className="flex items-center justify-center py-4">
                <div className="relative w-40 h-40">
                  {/* <!-- Mock Circular Chart --> */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      className="text-surface-container-high"
                      cx="80"
                      cy="80"
                      fill="transparent"
                      r="70"
                      stroke="currentColor"
                      stroke-width="12"
                    ></circle>
                    <circle
                      className="text-tertiary-container"
                      cx="80"
                      cy="80"
                      fill="transparent"
                      r="70"
                      stroke="currentColor"
                      stroke-dasharray="440"
                      stroke-dashoffset="140"
                      stroke-width="12"
                    ></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-headline-md text-2xl text-on-surface">
                      68%
                    </span>
                    <span className="text-[10px] font-label-bold uppercase text-stone-400">
                      Returning
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 mt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-tertiary-container"></div>
                    <span className="text-xs font-semibold text-stone-600">
                      Returning Customers
                    </span>
                  </div>
                  <span className="text-xs font-bold">2,412</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-surface-container-high"></div>
                    <span className="text-xs font-semibold text-stone-600">
                      New Acquisitions
                    </span>
                  </div>
                  <span className="text-xs font-bold">1,130</span>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-8 rounded-2xl border border-orange-50 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h4 className="font-title-sm text-title-sm text-on-surface">
                    Geographic Reach
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    Top performing delivery zones
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-tighter">
                    Live Traffic
                  </span>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden bg-orange-50/50">
                {/* <!-- Mock Map Background with Heat Overlay --> */}
                <div
                  className="absolute inset-0 grayscale opacity-40 mix-blend-multiply"
                  data-alt="abstract monochromatic map of a city with clean lines and geometric shapes"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAf6gYEIs6kUAdphKwTMg4FjMMz715I8_LLDOz6nG21VSy7k0MNG1iQ97BhF26P4Hv9HvHT-FISEN0qBz-HFbrf8fBL-peB6QzT8FvFoVmuEvn1MImH_3U7gXAHMaTi5RbVvL0o-9CD_rwvWFK_QKXBGuw6Ix_xOlwF0cvhG9LHD0STsX93A5de87CZTiqav_FSp3jhw9_aNPsosfBQAWzqg_LF5S-apB-PWi66MyEy5z0coTZ9M1lUuzjPhSrM3KTMKkvylLFKIXs')",
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
                    <span className="text-xs font-bold text-stone-700">
                      London Central (42%)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    <span className="text-xs font-bold text-stone-700">
                      Chelsea (24%)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-200"></span>
                    <span className="text-xs font-bold text-stone-700">
                      Hackney (18%)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Recent Orders Feed (Asymmetric Layout Part) --> */}
          <section className="mt-12">
            <h4 className="font-title-sm text-title-sm text-on-surface mb-6">
              Recent Growth Events
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low hover:bg-white transition-colors cursor-pointer group border border-transparent hover:border-orange-100">
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-700 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined" data-icon="star">
                    star
                  </span>
                </div>
                <div>
                  <p className="font-label-bold text-xs text-on-surface uppercase tracking-wider">
                    New Milestone
                  </p>
                  <p className="text-sm text-stone-500">
                    10,000 Lifetime Orders reached
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low hover:bg-white transition-colors cursor-pointer group border border-transparent hover:border-orange-100">
                <div className="w-12 h-12 rounded-lg bg-secondary-fixed-dim/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined"
                    data-icon="campaign"
                  >
                    campaign
                  </span>
                </div>
                <div>
                  <p className="font-label-bold text-xs text-on-surface uppercase tracking-wider">
                    Marketing Peak
                  </p>
                  <p className="text-sm text-stone-500">
                    +15% traffic from Social Media
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low hover:bg-white transition-colors cursor-pointer group border border-transparent hover:border-orange-100">
                <div className="w-12 h-12 rounded-lg bg-tertiary-fixed/40 flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined"
                    data-icon="reviews"
                  >
                    reviews
                  </span>
                </div>
                <div>
                  <p className="font-label-bold text-xs text-on-surface uppercase tracking-wider">
                    High Rating
                  </p>
                  <p className="text-sm text-stone-500">
                    4.9 Average score this week
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer className="p-8 border-t border-orange-100 text-center">
          <p className="text-xs font-label-bold text-stone-400 uppercase tracking-[0.2em]">
            © 2024 L'Artisan Marketplace. Precision and Passion.
          </p>
        </footer>
      </main>
    </>
  );
}
