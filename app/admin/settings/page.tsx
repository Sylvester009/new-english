'use client';

import Sidebar from '../components/sidebar';
import TopAppBar from '../components/top-appbar';

export default function Settings() {
  return (
    <>
      <Sidebar />

      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        {/* Top App Bar */}
        <TopAppBar />

        <div className="p-6 lg:p-10 max-w-7xl mx-auto">
          <header className="mb-10 lg:mb-12">
            <h2 className="font-['Noto_Serif'] text-[48px] leading-[1.2] tracking-[-0.02em] font-bold text-[#974400] mb-2">
              Admin Settings
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-lg leading-[1.6] text-[#564338]">
              Configure your marketplace preferences, logistics, and security
              protocols.
            </p>
          </header>

          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            {/* Store Information Section */}
            <section className="col-span-12 lg:col-span-8 space-y-6">
              {/* Store Info Form */}
              <div className="bg-[#ffffff] p-6 lg:p-8 rounded-xl shadow-[12px_12px_24px_rgba(139,69,19,0.04)] border border-[#ebe1d3]/30">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <span
                      className="material-symbols-outlined text-[#974400] text-3xl"
                      data-icon="storefront"
                    >
                      storefront
                    </span>
                    <h3 className="font-['Noto_Serif'] text-[32px] leading-[1.3] font-semibold text-[#1f1b12]">
                      Store Information
                    </h3>
                  </div>
                  <button className="bg-[#974400] text-white text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] px-6 py-2.5 rounded-xl shadow hover:bg-[#bb5808] active:scale-[0.98] transition-all">
                    Save Changes
                  </button>
                </div>
                <form className="grid grid-cols-2 gap-5">
                  <div className="col-span-2">
                    <label className="block text-xs tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase mb-2">
                      Store Name
                    </label>
                    <input
                      className="w-full bg-white border-2 border-[#ddc1b3] rounded-xl p-3.5 font-['Plus_Jakarta_Sans'] text-base leading-[1.5] focus:border-[#fcc340] focus:ring-4 focus:ring-[#fcc340]/10 transition-all outline-none"
                      type="text"
                      defaultValue="New English Artisan Bakery"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-xs tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase mb-2">
                      Support Email
                    </label>
                    <input
                      className="w-full bg-white border-2 border-[#ddc1b3] rounded-xl p-3.5 font-['Plus_Jakarta_Sans'] text-base leading-[1.5] focus:border-[#fcc340] focus:ring-4 focus:ring-[#fcc340]/10 transition-all outline-none"
                      type="email"
                      defaultValue="hello@newenglish.com"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-xs tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase mb-2">
                      Phone Number
                    </label>
                    <input
                      className="w-full bg-white border-2 border-[#ddc1b3] rounded-xl p-3.5 font-['Plus_Jakarta_Sans'] text-base leading-[1.5] focus:border-[#fcc340] focus:ring-4 focus:ring-[#fcc340]/10 transition-all outline-none"
                      type="tel"
                      defaultValue="+44 20 7946 0958"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase mb-2">
                      Store Biography
                    </label>
                    <textarea
                      className="w-full bg-white border-2 border-[#ddc1b3] rounded-xl p-3.5 font-['Plus_Jakarta_Sans'] text-base leading-[1.5] focus:border-[#fcc340] focus:ring-4 focus:ring-[#fcc340]/10 transition-all outline-none resize-none"
                      rows={4}
                      defaultValue="Traditional European techniques meeting modern seasonal ingredients. Our kitchen is dedicated to the craft of slow-fermented breads and heritage grains."
                    />
                  </div>
                </form>
              </div>

              {/* Shipping Zones */}
              <div className="bg-[#ffffff] p-6 lg:p-8 rounded-xl shadow-[12px_12px_24px_rgba(139,69,19,0.04)] border border-[#ebe1d3]/30">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <span
                      className="material-symbols-outlined text-[#974400] text-3xl"
                      data-icon="local_shipping"
                    >
                      local_shipping
                    </span>
                    <h3 className="font-['Noto_Serif'] text-[32px] leading-[1.3] font-semibold text-[#1f1b12]">
                      Shipping Zones
                    </h3>
                  </div>
                  <button className="border-2 border-[#fcc340] text-[#795900] text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] px-6 py-2.5 rounded-xl hover:bg-[#fcc340]/10 active:scale-[0.98] transition-all">
                    Add Zone
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-[#fcf2e3] rounded-xl border border-[#ddc1b3]/30">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#fcc340]/20 p-2.5 rounded-full">
                        <span
                          className="material-symbols-outlined text-[#795900]"
                          data-icon="flag"
                        >
                          flag
                        </span>
                      </div>
                      <div>
                        <h4 className="font-['Noto_Serif'] text-lg leading-[1.4] font-semibold text-[#1f1b12]">
                          Local Delivery (London)
                        </h4>
                        <p className="text-xs text-[#564338] uppercase font-bold font-['Plus_Jakarta_Sans'] tracking-[0.05em] mt-0.5">
                          Zone 1-4 • Same Day Available
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="bg-[#93405f]/10 text-[#93405f] px-3 py-1 rounded-full text-xs font-bold font-['Plus_Jakarta_Sans']">
                        £5.00 Flat Rate
                      </span>
                      <button className="text-[#564338] hover:text-[#974400] transition-colors p-2 rounded-full hover:bg-white/50">
                        <span
                          className="material-symbols-outlined"
                          data-icon="edit"
                        >
                          edit
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-[#fcf2e3] rounded-xl border border-[#ddc1b3]/30 opacity-70">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#fcc340]/20 p-2.5 rounded-full">
                        <span
                          className="material-symbols-outlined text-[#795900]"
                          data-icon="public"
                        >
                          public
                        </span>
                      </div>
                      <div>
                        <h4 className="font-['Noto_Serif'] text-lg leading-[1.4] font-semibold text-[#1f1b12]">
                          International Mainland
                        </h4>
                        <p className="text-xs text-[#564338] uppercase font-bold font-['Plus_Jakarta_Sans'] tracking-[0.05em] mt-0.5">
                          Europe • 3-5 Working Days
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="bg-[#93405f]/10 text-[#93405f] px-3 py-1 rounded-full text-xs font-bold font-['Plus_Jakarta_Sans']">
                        Weight Based
                      </span>
                      <button className="text-[#564338] hover:text-[#974400] transition-colors p-2 rounded-full hover:bg-white/50">
                        <span
                          className="material-symbols-outlined"
                          data-icon="edit"
                        >
                          edit
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Secondary Column */}
            <aside className="col-span-12 lg:col-span-4 space-y-6">
              {/* Payment Gateway */}
              <div className="bg-[#f1e7d8] p-6 rounded-xl border border-[#ddc1b3]/50">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="material-symbols-outlined text-[#974400]"
                    data-icon="payments"
                  >
                    payments
                  </span>
                  <h3 className="font-['Noto_Serif'] text-xl leading-[1.4] font-semibold text-[#1f1b12]">
                    Payment Gateway
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-[#ddc1b3]/20">
                    <div className="flex items-center gap-3">
                      <span
                        className="material-symbols-outlined text-blue-600"
                        data-icon="account_balance"
                      >
                        account_balance
                      </span>
                      <span className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#1f1b12]">
                        Stripe Connect
                      </span>
                    </div>
                    <div className="w-10 h-5 bg-[#974400] rounded-full relative cursor-pointer">
                      <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-[#ddc1b3]/20">
                    <div className="flex items-center gap-3">
                      <span
                        className="material-symbols-outlined text-blue-500"
                        data-icon="credit_card"
                      >
                        credit_card
                      </span>
                      <span className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#1f1b12]">
                        PayPal Business
                      </span>
                    </div>
                    <div className="w-10 h-5 bg-[#564338]/30 rounded-full relative cursor-pointer">
                      <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-6 py-3 border-2 border-dashed border-[#ddc1b3] text-[#564338] text-xs font-bold font-['Plus_Jakarta_Sans'] rounded-xl hover:border-[#974400] hover:text-[#974400] transition-all">
                  + CONFIGURE NEW GATEWAY
                </button>
              </div>

              {/* User Roles & Permissions */}
              <div className="bg-[#ffffff] p-6 rounded-xl shadow-[12px_12px_24px_rgba(139,69,19,0.04)] border border-[#ebe1d3]/30">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="material-symbols-outlined text-[#974400]"
                    data-icon="admin_panel_settings"
                  >
                    admin_panel_settings
                  </span>
                  <h3 className="font-['Noto_Serif'] text-xl leading-[1.4] font-semibold text-[#1f1b12]">
                    Roles &amp; Permissions
                  </h3>
                </div>
                <div className="space-y-2">
                  {[
                    {
                      role: 'Store Manager',
                      desc: 'Full access to orders, customers, and inventory.',
                      users: 2,
                      active: true,
                    },
                    {
                      role: 'Logistics Coordinator',
                      desc: 'Shipping labels and order fulfillment only.',
                      users: 5,
                      active: false,
                    },
                    {
                      role: 'Financial Analyst',
                      desc: 'Read-only access to sales and analytics.',
                      users: 1,
                      active: false,
                    },
                  ].map(item => (
                    <div
                      key={item.role}
                      className="group p-3 rounded-xl hover:bg-[#fcf2e3] transition-colors cursor-pointer"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <p className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#1f1b12]">
                            {item.role}
                          </p>
                          <p className="text-xs text-[#564338] font-['Plus_Jakarta_Sans'] mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                        <span
                          className={`text-xs font-bold px-2.5 py-0.5 rounded-full shrink-0 font-['Plus_Jakarta_Sans'] ${
                            item.active
                              ? 'bg-[#fcc340]/30 text-[#6f5100]'
                              : 'bg-[#564338]/10 text-[#564338]'
                          }`}
                        >
                          {item.users} User{item.users !== 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <hr className="my-6 border-[#ddc1b3]/30" />
                <button className="w-full flex items-center justify-center gap-2 text-[#974400] text-sm font-bold font-['Plus_Jakarta_Sans'] hover:underline active:scale-[0.98] transition-all">
                  <span
                    className="material-symbols-outlined text-lg"
                    data-icon="group_add"
                  >
                    group_add
                  </span>
                  <span>Invite Team Member</span>
                </button>
              </div>

              {/* Danger Zone */}
              <div className="bg-[#ffdad6]/20 p-6 rounded-xl border border-[#ba1a1a]/20">
                <h4 className="text-sm leading-[1.2] tracking-[0.1em] font-bold font-['Plus_Jakarta_Sans'] text-[#ba1a1a] uppercase mb-4">
                  Danger Zone
                </h4>
                <button className="w-full text-left p-3 rounded-xl border border-[#ba1a1a]/30 text-[#ba1a1a] hover:bg-[#ba1a1a] hover:text-white active:scale-[0.98] transition-all font-['Plus_Jakarta_Sans'] text-sm font-bold">
                  <div className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined"
                      data-icon="delete_forever"
                    >
                      delete_forever
                    </span>
                    <span>Deactivate Storefront</span>
                  </div>
                </button>
              </div>
            </aside>
          </div>
        </div>

        {/* Contextual Footer */}
        <footer className="ml-64 py-12 px-10 border-t border-orange-100 dark:border-stone-800">
          <div className="flex flex-col md:flex-row justify-between items-center opacity-60">
            <p className="text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase tracking-[0.1em] text-[#564338]">
              © 2024 New English Artisan Bakery Ltd.
            </p>
            <div className="flex gap-6 lg:gap-8 mt-4 md:mt-0">
              <a
                className="text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase tracking-[0.1em] text-[#564338] hover:text-[#974400] transition-colors"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase tracking-[0.1em] text-[#564338] hover:text-[#974400] transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase tracking-[0.1em] text-[#564338] hover:text-[#974400] transition-colors"
                href="#"
              >
                System Status
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
