import Sidebar from '../components/sidebar';

export default function Orders() {
  return (
    <>
      <Sidebar />
      <main className="ml-64 min-h-screen">
        {/* <!-- TopAppBar --> */}
        <header className="sticky top-0 right-0 flex justify-between items-center px-8 z-30 w-full h-16 border-b-2 border-orange-100 dark:border-stone-800 bg-[#FDF5E6]/90 dark:bg-stone-950/90 backdrop-blur-md">
          <div className="flex items-center gap-6">
            <span className="font-sans font-semibold uppercase tracking-wider text-xs text-stone-600 dark:text-orange-400">
              Management Portal
            </span>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
                search
              </span>
              <input
                className="pl-10 pr-4 py-1.5 bg-surface-container-low border-2 border-orange-100 rounded-full text-sm focus:outline-none focus:border-secondary-container transition-all w-64"
                placeholder="Search orders..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-stone-600 dark:text-stone-400 hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-stone-600 dark:text-stone-400 hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
            <div className="h-8 w-px bg-orange-100 mx-2"></div>
            <div className="flex items-center gap-3">
              <span className="font-sans font-semibold uppercase tracking-wider text-xs text-stone-600">
                Admin User
              </span>
              <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/20">
                <img
                  className="w-full h-full object-cover"
                  data-alt="close-up portrait of a professional male administrator in a clean modern office setting with warm lighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRI3jIgsFBixuX2lb_Ug9z-avT1syF0E_UI_sptHK-rMbtp6n82ENbeg7WLnMmIy-0zM-e8N0SpH9uD2vFmQsf6Q8mODIjTnabQkLxWHHvsZqFb1I9mJDkU9u8Bxdyyt2Wz3k8IeZc4iGPEpyLZXDld7i5M0dEHZtXqT6TV3JPxJFX3aGz1kSBNOvOb-L0cVs1hYpm2rTZY_rQg13Yuxll6wRiggTGK5QAh6HGDEz_UguNgiGbq5ks-2yjtScxq1tTvlcIuy84Y1A"
                />
              </div>
              <button className="font-sans font-semibold uppercase tracking-wider text-xs text-orange-700 dark:text-orange-400 hover:opacity-80 transition-opacity">
                Logout
              </button>
            </div>
          </div>
        </header>
        {/* <!-- Page Content --> */}
        <div className="p-10 max-w-container-max mx-auto">
          {/* <!-- Header Section --> */}
          <section className="mb-10 flex justify-between items-end">
            <div>
              <h2 className="font-display-lg text-display-lg text-primary mb-2">
                Order Management
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Review and manage recent customer transactions.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-outline">
                  Date Range
                </label>
                <select className="bg-surface border-2 border-orange-100 rounded-lg px-4 py-2 font-label-bold text-sm focus:border-primary-container outline-none">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>This Month</option>
                  <option>Custom Range</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-outline">
                  Quick Action
                </label>
                <button className="flex items-center gap-2 bg-secondary-container text-on-secondary-container px-6 py-2 rounded-lg font-label-bold text-sm hover:opacity-90 transition-all">
                  <span className="material-symbols-outlined text-lg">
                    download
                  </span>
                  Export CSV
                </button>
              </div>
            </div>
          </section>
          {/* <!-- Filters & Bento Stats --> */}
          <div className="grid grid-cols-12 gap-6 mb-10">
            <div className="col-span-12 md:col-span-3 bg-surface-container-lowest p-6 rounded-xl border border-orange-100 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-1">
                Total Orders
              </p>
              <h3 className="text-3xl font-bold text-primary">1,284</h3>
              <div className="flex items-center gap-1 text-xs text-green-600 mt-2 font-bold">
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>
                +12.5% vs last week
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 bg-surface-container-lowest p-6 rounded-xl border border-orange-100 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-1">
                Pending Fulfillment
              </p>
              <h3 className="text-3xl font-bold text-secondary">42</h3>
              <p className="text-xs text-on-surface-variant mt-2 font-medium">
                8 urgent orders
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 bg-surface-container-lowest p-6 rounded-xl border border-orange-100 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-1">
                  Revenue Forecast
                </p>
                <h3 className="text-3xl font-bold text-on-surface">
                  $14,280.00
                </h3>
                <p className="text-xs text-on-surface-variant mt-2 font-medium">
                  Estimated payout for current cycle
                </p>
              </div>
              <div className="h-16 w-32 bg-orange-50 rounded-lg flex items-end justify-center gap-1 p-2">
                <div className="w-3 bg-primary rounded-t-sm h-[40%]"></div>
                <div className="w-3 bg-primary rounded-t-sm h-[60%]"></div>
                <div className="w-3 bg-primary rounded-t-sm h-[55%]"></div>
                <div className="w-3 bg-primary rounded-t-sm h-[80%]"></div>
                <div className="w-3 bg-primary rounded-t-sm h-[95%]"></div>
              </div>
            </div>
          </div>
          {/* <!-- Order List Table --> */}
          <section className="bg-surface-container-lowest rounded-xl border border-orange-100 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-orange-100 flex justify-between items-center">
              <div className="flex gap-4">
                <button className="pb-2 border-b-2 border-primary text-primary font-bold text-sm px-2">
                  All Orders
                </button>
                <button className="pb-2 border-b-2 border-transparent text-outline font-medium text-sm px-2 hover:text-on-surface transition-colors">
                  Pending
                </button>
                <button className="pb-2 border-b-2 border-transparent text-outline font-medium text-sm px-2 hover:text-on-surface transition-colors">
                  Paid
                </button>
                <button className="pb-2 border-b-2 border-transparent text-outline font-medium text-sm px-2 hover:text-on-surface transition-colors">
                  Shipped
                </button>
              </div>
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-outline">
                    Order ID
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-outline">
                    Customer
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-outline">
                    Date
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-outline">
                    Total
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-outline">
                    Status
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-outline"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-50">
                {/* <!-- Row 1 --> */}
                <tr className="hover:bg-orange-50/30 transition-colors cursor-pointer group">
                  <td className="px-6 py-5 font-label-bold text-primary">
                    #ORD-82941
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed text-xs font-bold">
                        EM
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm">Elena Moretti</span>
                        <span className="text-xs text-outline">
                          elena.m@example.it
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium">
                    Oct 24, 2023 · 09:12 AM
                  </td>
                  <td className="px-6 py-5 font-bold text-sm">$124.50</td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-green-100 text-green-700">
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 rounded-full hover:bg-orange-100 text-outline group-hover:text-primary transition-all">
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </button>
                  </td>
                </tr>
                {/* <!-- Row 2 --> */}
                <tr className="hover:bg-orange-50/30 transition-colors cursor-pointer group">
                  <td className="px-6 py-5 font-label-bold text-primary">
                    #ORD-82940
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed text-xs font-bold">
                        JB
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm">Julian Baker</span>
                        <span className="text-xs text-outline">
                          jb@bakery.co.uk
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium">
                    Oct 23, 2023 · 04:45 PM
                  </td>
                  <td className="px-6 py-5 font-bold text-sm">$42.00</td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-orange-100 text-orange-700">
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 rounded-full hover:bg-orange-100 text-outline group-hover:text-primary transition-all">
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </button>
                  </td>
                </tr>
                {/* <!-- Row 3 --> */}
                <tr className="hover:bg-orange-50/30 transition-colors cursor-pointer group">
                  <td className="px-6 py-5 font-label-bold text-primary">
                    #ORD-82939
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed text-xs font-bold">
                        SC
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm">Sarah Chen</span>
                        <span className="text-xs text-outline">
                          schen_art@gmail.com
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium">
                    Oct 23, 2023 · 02:20 PM
                  </td>
                  <td className="px-6 py-5 font-bold text-sm">$315.20</td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-blue-100 text-blue-700">
                      Shipped
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 rounded-full hover:bg-orange-100 text-outline group-hover:text-primary transition-all">
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </button>
                  </td>
                </tr>
                {/* <!-- Row 4 --> */}
                <tr className="hover:bg-orange-50/30 transition-colors cursor-pointer group">
                  <td className="px-6 py-5 font-label-bold text-primary">
                    #ORD-82938
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-error-container flex items-center justify-center text-on-error-container text-xs font-bold">
                        MW
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm">Marcus Wright</span>
                        <span className="text-xs text-outline">
                          wright.design@outlook.com
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium">
                    Oct 23, 2023 · 11:05 AM
                  </td>
                  <td className="px-6 py-5 font-bold text-sm">$89.90</td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-red-100 text-red-700">
                      Cancelled
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 rounded-full hover:bg-orange-100 text-outline group-hover:text-primary transition-all">
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="p-4 border-t border-orange-100 flex items-center justify-between">
              <span className="text-xs text-outline font-medium">
                Showing 1-4 of 1,284 results
              </span>
              <div className="flex gap-2">
                <button
                  className="px-4 py-1.5 rounded-lg border-2 border-orange-100 text-sm font-bold text-on-surface hover:bg-orange-50 transition-colors disabled:opacity-50"
                  disabled
                >
                  Previous
                </button>
                <button className="px-4 py-1.5 rounded-lg border-2 border-orange-100 text-sm font-bold text-on-surface hover:bg-orange-50 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </section>
        </div>
        <div
          className="fixed inset-y-0 right-0 w-1/3 bg-surface border-l-2 border-orange-100 shadow-2xl z-50 transform translate-x-full transition-transform hidden"
          id="order-drawer"
        >
          <div className="p-8 h-full flex flex-col">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="font-headline-md text-headline-md text-primary">
                  Order Details
                </h3>
                <span className="font-label-bold text-xs tracking-widest text-outline uppercase">
                  #ORD-82941
                </span>
              </div>
              <button className="p-2 hover:bg-orange-100 rounded-full text-on-surface">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto pr-2">
              <section className="mb-8">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-outline mb-4">
                  Items
                </h4>
                <div className="space-y-4">
                  <div className="flex gap-4 items-center">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-orange-50 border border-orange-100">
                      <img
                        className="w-full h-full object-cover"
                        data-alt="close-up of artisan sourdough loaf on a wood board with rustic natural morning light"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdXoPEHpe3zgPBKDpiTW_-dPHkrFhTz5-jz6lY2E98L_IICT4TBzz00uQkSx-LyAqqKj221alI4sw6bf32nIweBPlm4icvd2EEXm_W2dlpjIrx4iYX-tLeG1htazWAWNLHXfnx9mxgn-fdCuGBGnVKCBB6Sq5jLNJdluuHGVRDlyk4z_LfnSsTizAEMH3pn2IZ56k9K6Xnqr7GlHKfUWQ_VScwJ1__5xDy9y8HX1x4endWlVWRfXQkzFdtKt7L8ACMdn8EDDhd29s"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm">
                        Traditional Sourdough Loaf
                      </p>
                      <p className="text-xs text-outline">
                        x2 · $8.50 per unit
                      </p>
                    </div>
                    <p className="font-bold text-sm text-primary">$17.00</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-orange-50 border border-orange-100">
                      <img
                        className="w-full h-full object-cover"
                        data-alt="freshly baked pain au chocolat pastries stacked on a marble counter top with professional studio lighting"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuByR1cYKhzIlBgxcVJNHPJzPUEKBWh-o3XghOj5GYCiNqmh2VHdNj-EwVFsFk3ieMtLShsTWh-CwxH5Z_SlQB2FL7UETUII8vex3aOY0iGjUcmDLUTVWqkh3k88jolQbSexnfyTPmXqCfh5nWRp7TDeoUPqQwGfLdVerWIfH69j89SgYnfT3jnusoy-E3bRh1xOd4pfsuSU9u_U1_NdXdKBEvyouT9CnIUwtoZSHxzj-k_ihsZ3IeuSxA7v2cByBlp-kqXq5YkD_f0"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm">
                        French Butter Croissants
                      </p>
                      <p className="text-xs text-outline">
                        x12 · $3.20 per unit
                      </p>
                    </div>
                    <p className="font-bold text-sm text-primary">$38.40</p>
                  </div>
                </div>
              </section>
              <section className="mb-8 p-6 bg-surface-container-low rounded-xl border border-orange-100">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-outline mb-4">
                  Customer &amp; Shipping
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-stone-400 text-lg">
                      person
                    </span>
                    <div>
                      <p className="text-sm font-bold">Elena Moretti</p>
                      <p className="text-xs text-outline">elena.m@example.it</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-stone-400 text-lg">
                      local_shipping
                    </span>
                    <div>
                      <p className="text-sm font-bold">
                        Standard Home Delivery
                      </p>
                      <p className="text-xs text-outline">
                        12 Via della Conciliazione, Rome, Italy
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="mb-8">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-outline mb-4">
                  Order Summary
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-outline">Subtotal</span>
                    <span className="font-medium">$115.40</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-outline">Shipping</span>
                    <span className="font-medium">$9.10</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-orange-100">
                    <span className="text-primary">Total</span>
                    <span className="text-primary">$124.50</span>
                  </div>
                </div>
              </section>
            </div>
            <div className="pt-6 border-t border-orange-100 flex gap-4">
              <button className="flex-1 bg-primary text-on-primary py-3 rounded-lg font-label-bold text-sm scale-98-on-click">
                Mark as Fulfilled
              </button>
              <button className="px-4 py-3 rounded-lg border-2 border-orange-100 text-outline hover:text-red-600 hover:border-red-600 transition-all scale-98-on-click">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
