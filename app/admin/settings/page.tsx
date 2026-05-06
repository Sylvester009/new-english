import Sidebar from '../components/sidebar';

export default function Settings() {
  return (
    <>
      <Sidebar />
      <header className="sticky top-0 right-0 flex justify-between items-center px-8 z-30 ml-64 bg-[#FDF5E6]/90 dark:bg-stone-950/90 backdrop-blur-md w-full h-16 border-b-2 border-orange-100 dark:border-stone-800">
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-stone-400">
              <span className="material-symbols-outlined" data-icon="search">
                search
              </span>
            </span>
            <input
              className="bg-surface-container-low border-2 border-outline-variant rounded-lg pl-10 pr-4 py-1.5 font-label-bold text-xs focus:ring-2 focus:ring-secondary-container focus:border-secondary-container outline-none transition-all w-64"
              placeholder="SEARCH SETTINGS..."
              type="text"
            />
          </div>
          <span className="font-sans font-semibold uppercase tracking-wider text-xs text-stone-600">
            Management Portal
          </span>
        </div>
        <div className="flex items-center space-x-6">
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
          <div className="h-8 w-px bg-orange-200"></div>
          <button className="font-sans font-semibold uppercase tracking-wider text-xs text-stone-600 hover:text-primary transition-colors">
            Logout
          </button>
          <img
            alt="Admin User"
            className="w-8 h-8 rounded-full border-2 border-primary-container"
            data-alt="professional portrait of a middle-aged male administrator in a clean office setting, soft natural lighting, high resolution"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5369nXGaeQB2cFh_rZ21ykE-fhuouXK6UBb_1Goa4Ye9XoRXvoZ9ud030dJpn9N7r7HD1qwjFCBA0hPzcISu_o_bIZKHcnGprsMhTIsQeocR1JbLhIKzmfgYHdxqr4IFn_xOr44fT3BMFuShvXvGXr-_GSmazi5yEs805S_4ftw7Y3mZjNmYnjxIOZ192Yz0yhe1QKQZGTjqcqpVosuUezuBmLg64z-lAiZtZMe_fsZ8sNRQjtiScoXPTvPNSBx5lLa1eABENssQ"
          />
        </div>
      </header>
      {/* <!-- Main Content --> */}
      <main className="ml-64 p-10 max-w-7xl mx-auto">
        <header className="mb-12">
          <h2 className="font-display-lg text-display-lg text-primary mb-2">
            Admin Settings
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Configure your marketplace preferences, logistics, and security
            protocols.
          </p>
        </header>
        <div className="grid grid-cols-12 gap-gutter">
          {/* <!-- Store Information Section --> */}
          <section className="col-span-12 lg:col-span-8 space-y-6">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[12px_12px_24px_rgba(139,69,19,0.04)] border border-surface-variant/30">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <span
                    className="material-symbols-outlined text-primary text-3xl"
                    data-icon="storefront"
                  >
                    storefront
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Store Information
                  </h3>
                </div>
                <button className="bg-primary text-white font-label-bold text-label-bold px-6 py-2 rounded shadow hover:bg-primary-container transition-colors scale-98-on-click">
                  Save Changes
                </button>
              </div>
              <form className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block font-label-bold text-xs uppercase text-on-surface-variant mb-2">
                    Store Name
                  </label>
                  <input
                    className="w-full bg-white border-2 border-outline-variant rounded-lg p-3 font-body-md focus:border-secondary-container focus:ring-0 transition-all"
                    type="text"
                    value="New English Artisan Bakery"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block font-label-bold text-xs uppercase text-on-surface-variant mb-2">
                    Support Email
                  </label>
                  <input
                    className="w-full bg-white border-2 border-outline-variant rounded-lg p-3 font-body-md focus:border-secondary-container focus:ring-0 transition-all"
                    type="email"
                    value="hello@newenglish.com"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block font-label-bold text-xs uppercase text-on-surface-variant mb-2">
                    Phone Number
                  </label>
                  <input
                    className="w-full bg-white border-2 border-outline-variant rounded-lg p-3 font-body-md focus:border-secondary-container focus:ring-0 transition-all"
                    type="tel"
                    value="+44 20 7946 0958"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block font-label-bold text-xs uppercase text-on-surface-variant mb-2">
                    Store Biography
                  </label>
                  <textarea
                    className="w-full bg-white border-2 border-outline-variant rounded-lg p-3 font-body-md focus:border-secondary-container focus:ring-0 transition-all"
                    rows={4}
                  >
                    Traditional European techniques meeting modern seasonal
                    ingredients. Our kitchen is dedicated to the craft of
                    slow-fermented breads and heritage grains.
                  </textarea>
                </div>
              </form>
            </div>
            {/* <!-- Shipping Zones Section --> */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[12px_12px_24px_rgba(139,69,19,0.04)] border border-surface-variant/30">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <span
                    className="material-symbols-outlined text-primary text-3xl"
                    data-icon="local_shipping"
                  >
                    local_shipping
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Shipping Zones
                  </h3>
                </div>
                <button className="border-2 border-secondary-container text-secondary text-label-bold font-label-bold px-6 py-2 rounded hover:bg-secondary-container/10 transition-colors">
                  Add Zone
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg border border-outline-variant/30">
                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary-container/20 p-2 rounded-full">
                      <span
                        className="material-symbols-outlined text-secondary"
                        data-icon="flag"
                      >
                        flag
                      </span>
                    </div>
                    <div>
                      <h4 className="font-title-sm text-title-sm">
                        Local Delivery (London)
                      </h4>
                      <p className="text-xs text-on-surface-variant uppercase font-label-bold">
                        Zone 1-4 • Same Day Available
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <span className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full text-xs font-label-bold">
                      £5.00 Flat Rate
                    </span>
                    <button className="text-on-surface-variant hover:text-primary transition-colors">
                      <span
                        className="material-symbols-outlined"
                        data-icon="edit"
                      >
                        edit
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg border border-outline-variant/30 opacity-70">
                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary-container/20 p-2 rounded-full">
                      <span
                        className="material-symbols-outlined text-secondary"
                        data-icon="public"
                      >
                        public
                      </span>
                    </div>
                    <div>
                      <h4 className="font-title-sm text-title-sm">
                        International Mainland
                      </h4>
                      <p className="text-xs text-on-surface-variant uppercase font-label-bold">
                        Europe • 3-5 Working Days
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <span className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full text-xs font-label-bold">
                      Weight Based
                    </span>
                    <button className="text-on-surface-variant hover:text-primary transition-colors">
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
          {/* <!-- Secondary Column --> */}
          <aside className="col-span-12 lg:col-span-4 space-y-6">
            {/* <!-- Payment Gateway Section --> */}
            <div className="bg-surface-container-high p-6 rounded-xl border border-outline-variant/50">
              <div className="flex items-center space-x-3 mb-6">
                <span
                  className="material-symbols-outlined text-primary"
                  data-icon="payments"
                >
                  payments
                </span>
                <h3 className="font-title-sm text-title-sm text-on-surface">
                  Payment Gateway
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-outline-variant/20">
                  <div className="flex items-center space-x-3">
                    <span
                      className="material-symbols-outlined text-blue-600"
                      data-icon="account_balance"
                    >
                      account_balance
                    </span>
                    <span className="font-label-bold text-label-bold">
                      Stripe Connect
                    </span>
                  </div>
                  <div className="w-10 h-5 bg-primary rounded-full relative">
                    <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-outline-variant/20">
                  <div className="flex items-center space-x-3">
                    <span
                      className="material-symbols-outlined text-blue-500"
                      data-icon="credit_card"
                    >
                      credit_card
                    </span>
                    <span className="font-label-bold text-label-bold">
                      PayPal Business
                    </span>
                  </div>
                  <div className="w-10 h-5 bg-on-surface-variant/30 rounded-full relative">
                    <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 py-3 border-2 border-dashed border-outline text-on-surface-variant font-label-bold text-xs rounded-lg hover:border-primary hover:text-primary transition-all">
                + CONFIGURE NEW GATEWAY
              </button>
            </div>
            {/* <!-- User Roles & Permissions --> */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[12px_12px_24px_rgba(139,69,19,0.04)] border border-surface-variant/30">
              <div className="flex items-center space-x-3 mb-6">
                <span
                  className="material-symbols-outlined text-primary"
                  data-icon="admin_panel_settings"
                >
                  admin_panel_settings
                </span>
                <h3 className="font-title-sm text-title-sm text-on-surface">
                  Roles &amp; Permissions
                </h3>
              </div>
              <div className="space-y-3">
                <div className="group p-3 rounded-lg hover:bg-surface-container transition-colors cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-label-bold text-label-bold text-on-surface">
                        Store Manager
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        Full access to orders, customers, and inventory.
                      </p>
                    </div>
                    <span className="text-xs font-label-bold bg-secondary-container/30 text-on-secondary-container px-2 py-0.5 rounded">
                      2 Users
                    </span>
                  </div>
                </div>
                <div className="group p-3 rounded-lg hover:bg-surface-container transition-colors cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-label-bold text-label-bold text-on-surface">
                        Logistics Coordinator
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        Shipping labels and order fulfillment only.
                      </p>
                    </div>
                    <span className="text-xs font-label-bold bg-on-surface-variant/10 text-on-surface-variant px-2 py-0.5 rounded">
                      5 Users
                    </span>
                  </div>
                </div>
                <div className="group p-3 rounded-lg hover:bg-surface-container transition-colors cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-label-bold text-label-bold text-on-surface">
                        Financial Analyst
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        Read-only access to sales and analytics.
                      </p>
                    </div>
                    <span className="text-xs font-label-bold bg-on-surface-variant/10 text-on-surface-variant px-2 py-0.5 rounded">
                      1 User
                    </span>
                  </div>
                </div>
              </div>
              <hr className="my-6 border-outline-variant/30" />
              <button className="w-full flex items-center justify-center space-x-2 text-primary font-label-bold text-sm hover:underline">
                <span
                  className="material-symbols-outlined text-lg"
                  data-icon="group_add"
                >
                  group_add
                </span>
                <span>Invite Team Member</span>
              </button>
            </div>
            {/* <!-- Danger Zone --> */}
            <div className="bg-error-container/20 p-6 rounded-xl border border-error/20">
              <h4 className="font-label-bold text-error text-xs uppercase mb-4 tracking-widest">
                Danger Zone
              </h4>
              <button className="w-full text-left p-3 rounded-lg border border-error/30 text-error hover:bg-error hover:text-white transition-all scale-98-on-click">
                <div className="flex items-center space-x-2">
                  <span
                    className="material-symbols-outlined"
                    data-icon="delete_forever"
                  >
                    delete_forever
                  </span>
                  <span className="font-label-bold text-label-bold">
                    Deactivate Storefront
                  </span>
                </div>
              </button>
            </div>
          </aside>
        </div>
      </main>
      {/* <!-- Contextual Footer --> */}
      <footer className="ml-64 py-12 px-10 border-t border-orange-100 dark:border-stone-800">
        <div className="flex flex-col md:flex-row justify-between items-center opacity-60">
          <p className="text-xs font-label-bold uppercase tracking-widest">
            © 2024 New English Artisan Bakery Ltd.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a
              className="text-xs font-label-bold uppercase tracking-widest hover:text-primary"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-xs font-label-bold uppercase tracking-widest hover:text-primary"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-xs font-label-bold uppercase tracking-widest hover:text-primary"
              href="#"
            >
              System Status
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
