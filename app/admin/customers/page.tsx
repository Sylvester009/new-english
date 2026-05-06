import Sidebar from '../components/sidebar';

export default function Customers() {
  return (
    <>
      <Sidebar />
      <div className="ml-64 min-h-screen">
        {/* <!-- Top App Bar Shell --> */}
        <header className="sticky top-0 right-0 flex justify-between items-center px-8 z-30 w-full h-16 border-b-2 border-orange-100 dark:border-stone-800 bg-[#FDF5E6]/90 dark:bg-stone-950/90 backdrop-blur-md">
          <div className="flex items-center flex-1 max-w-xl">
            <div className="relative w-full">
              <span
                className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
                data-icon="search"
              >
                search
              </span>
              <input
                className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-secondary-container text-body-md"
                placeholder="Search customers by name, email, or ID..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <button className="text-stone-600 dark:text-stone-400 hover:opacity-80 transition-opacity">
                <span
                  className="material-symbols-outlined"
                  data-icon="notifications"
                >
                  notifications
                </span>
              </button>
              <button className="text-stone-600 dark:text-stone-400 hover:opacity-80 transition-opacity">
                <span
                  className="material-symbols-outlined"
                  data-icon="help_outline"
                >
                  help_outline
                </span>
              </button>
            </div>
            <div className="h-8 w-px bg-orange-100 dark:bg-stone-800"></div>
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="font-label-bold text-[10px] uppercase tracking-widest text-stone-500">
                  Administrator
                </p>
                <p className="font-body-md text-sm font-semibold text-on-background">
                  Management Portal
                </p>
              </div>
              <img
                alt="Admin User"
                className="h-10 w-10 rounded-full border-2 border-primary-fixed ring-2 ring-background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRxliiRNdgHrel7DNgUtaKjy3hzkOxd5Q7VyoBOesWO1lH-CU9JlH4-nDSqgvKDxNbrPfBcbGtNFIXMeU1yEDTUHfcyefbw3ZaOVPt__2hwmpPP_ySJo0qBF3bTokagbh3bSP4pNnBwgsUi8P71bPkOsfINHM99MFtmlWgzHNq2PBDGDihy7hZgm6tLI1o8kjLuOlgFWmIo-R-QRGaopKf9CJlbXm-9-gCCQxAdMXJB-lAflOE39hxVcMm9GDnpoB4Y5j-F8qy4dU"
              />
              <button className="font-sans font-semibold uppercase tracking-wider text-xs text-stone-600 dark:text-stone-400 hover:opacity-80 transition-opacity">
                Logout
              </button>
            </div>
          </div>
        </header>
        {/* <!-- Canvas --> */}
        <main className="p-10 space-y-10">
          {/* <!-- Page Header --> */}
          <section className="flex justify-between items-end">
            <div>
              <h2 className="font-display-lg text-display-lg text-on-surface">
                Registered Customers
              </h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl mt-2">
                Manage your premium clientele and track their engagement across
                the marketplace ecosystem.
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 px-6 py-3 border-2 border-outline rounded-lg font-label-bold text-label-bold text-outline hover:bg-surface-variant transition-all scale-98-on-click">
                <span
                  className="material-symbols-outlined"
                  data-icon="download"
                >
                  download
                </span>
                <span>Export CSV</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-tertiary text-on-tertiary rounded-lg font-label-bold text-label-bold hover:bg-tertiary-container transition-all shadow-md scale-98-on-click">
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
          {/* <!-- Stats Grid --> */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-orange-50/50 shadow-sm">
              <p className="font-label-bold text-label-bold text-stone-500 mb-2">
                TOTAL CUSTOMERS
              </p>
              <h3 className="font-display-lg text-3xl text-on-surface">
                1,284
              </h3>
              <div className="mt-4 flex items-center text-emerald-600 text-sm font-bold">
                <span
                  className="material-symbols-outlined text-sm mr-1"
                  data-icon="trending_up"
                >
                  trending_up
                </span>
                +12% from last month
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-orange-50/50 shadow-sm">
              <p className="font-label-bold text-label-bold text-stone-500 mb-2">
                ACTIVE SESSIONS
              </p>
              <h3 className="font-display-lg text-3xl text-on-surface">142</h3>
              <div className="mt-4 flex items-center text-amber-600 text-sm font-bold">
                <span
                  className="material-symbols-outlined text-sm mr-1"
                  data-icon="bolt"
                >
                  bolt
                </span>
                Real-time activity
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-orange-50/50 shadow-sm">
              <p className="font-label-bold text-label-bold text-stone-500 mb-2">
                AVG. ORDER VALUE
              </p>
              <h3 className="font-display-lg text-3xl text-on-surface">
                £84.50
              </h3>
              <div className="mt-4 flex items-center text-emerald-600 text-sm font-bold">
                <span
                  className="material-symbols-outlined text-sm mr-1"
                  data-icon="trending_up"
                >
                  trending_up
                </span>
                +5% vs last year
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-orange-50/50 shadow-sm">
              <p className="font-label-bold text-label-bold text-stone-500 mb-2">
                LOYALTY MEMBERS
              </p>
              <h3 className="font-display-lg text-3xl text-on-surface">856</h3>
              <div className="mt-4 flex items-center text-tertiary text-sm font-bold">
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
          <section className="bg-surface-container-lowest rounded-2xl border-2 border-orange-100/50 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-orange-100">
                    <th className="px-8 py-5 font-label-bold text-label-bold text-stone-600">
                      CUSTOMER
                    </th>
                    <th className="px-8 py-5 font-label-bold text-label-bold text-stone-600">
                      JOIN DATE
                    </th>
                    <th className="px-8 py-5 font-label-bold text-label-bold text-stone-600">
                      ORDER HISTORY
                    </th>
                    <th className="px-8 py-5 font-label-bold text-label-bold text-stone-600">
                      TOTAL SPENT
                    </th>
                    <th className="px-8 py-5 font-label-bold text-label-bold text-stone-600">
                      STATUS
                    </th>
                    <th className="px-8 py-5"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-50">
                  {/* <!-- Customer Row 1 --> */}
                  <tr className="hover:bg-orange-50/30 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            className="h-12 w-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                            data-alt="professional portrait of a man in a beige linen shirt with warm studio lighting"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5Z5n8D-48ltQHL44VqU845sbPMMzeKmP57-sFQp_YsHNCPncDPeRXvA9zxsE7joNHAdNqDWcNLall1O2FS0cQm1lYfVK1BkKzMC31TQqzXqmPbLBwx8NO9Zq1E3lTmOkOAvGTu6jxe_C1bL4q1yJaRp6mbJu1Qms4QiRN5ljp6fVoiGcsNnFHZMn1voGtCH_CeV2q4fMN-slTlDqJi97-xNFvN-ixF-YnMBCJ1mnkjMGkmb4Eg-J1Jsvx6pSoFQpSCchCDNXtCVk"
                          />
                          <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white"></span>
                        </div>
                        <div>
                          <p className="font-title-sm text-title-sm text-on-surface">
                            Alastair Thorne
                          </p>
                          <p className="text-sm text-stone-500 font-body-md">
                            alastair.t@lifestyle.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-body-md text-on-surface-variant">
                      Oct 14, 2023
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center space-x-2">
                        <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full text-xs font-bold">
                          24 Orders
                        </span>
                        <span className="text-xs text-stone-400">
                          Last: 2 days ago
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-display-lg text-xl text-primary">
                      £2,450.00
                    </td>
                    <td className="px-8 py-6">
                      <span className="bg-primary/10 text-primary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-primary/20">
                        Platinum Member
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="text-stone-400 hover:text-primary transition-colors">
                        <span
                          className="material-symbols-outlined"
                          data-icon="more_vert"
                        >
                          more_vert
                        </span>
                      </button>
                    </td>
                  </tr>
                  {/* <!-- Customer Row 2 --> */}
                  <tr className="hover:bg-orange-50/30 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            className="h-12 w-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                            data-alt="close-up portrait of a woman with elegant jewelry and neutral makeup in natural daylight"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA77lTPem7USs437rNJQvIMrotj_2EDpxi7gFvaXNShO_bxOQDS-dCfX0SI580IX-wVjL6lcLuzX0KD9kpKbhtcG0foVs5Z_4tTVDm1zA2ymOL5ONdPqS5-zg8avvLkKBqApaOBO--0Y3i1jixHBjj8Nv8fxTJ0LLhPeabkfiHP2yrXdhEzxadbpb50sGgTOToAbOjqJc-tq6ASBNz0hkjR3hP0jYQWZ9Te_SarAJehwNF8fYrEmUKycYdKLs9V72iek22_ABkFJ7U"
                          />
                          <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-stone-300 ring-2 ring-white"></span>
                        </div>
                        <div>
                          <p className="font-title-sm text-title-sm text-on-surface">
                            Elena Rossi
                          </p>
                          <p className="text-sm text-stone-500 font-body-md">
                            elena.rossi@arch.it
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-body-md text-on-surface-variant">
                      Nov 02, 2023
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center space-x-2">
                        <span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full text-xs font-bold">
                          8 Orders
                        </span>
                        <span className="text-xs text-stone-400">
                          Last: 1 week ago
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-display-lg text-xl text-primary">
                      £842.20
                    </td>
                    <td className="px-8 py-6">
                      <span className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-tertiary/20">
                        Gold Tier
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="text-stone-400 hover:text-primary transition-colors">
                        <span
                          className="material-symbols-outlined"
                          data-icon="more_vert"
                        >
                          more_vert
                        </span>
                      </button>
                    </td>
                  </tr>
                  {/* <!-- Customer Row 3 --> */}
                  <tr className="hover:bg-orange-50/30 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            className="h-12 w-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                            data-alt="headshot of a middle-aged man with salt and pepper beard wearing a navy suit in a modern office setting"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCpmzE_wXwkxhLCjq3MAJKGyvcSDFLnqhAjzXsW7Wrb72ryVP7SSRvYAzAQ71gXM_RYuDz9Ptio646afegVqmxzzP11B9FzDy3R8YtuUFk-5LgoNkQxN3zZjW1rewCHUYwhaSije-In9LL1xhf_ZAgabpke9u0zPjfxmjMCuQnBu5ebRl9C-I6SUGLjBV8a32dV0JhYr15vSwzudZrfXl0ArqXq4Sv9ZCzhwhUPBaGMvnt2V5_pWnSGOHqsaLe8ae3RNKGDt7Q1U0"
                          />
                          <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white"></span>
                        </div>
                        <div>
                          <p className="font-title-sm text-title-sm text-on-surface">
                            Julian Mercer
                          </p>
                          <p className="text-sm text-stone-500 font-body-md">
                            mercer.j@finance.uk
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-body-md text-on-surface-variant">
                      Dec 15, 2023
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center space-x-2">
                        <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full text-xs font-bold">
                          42 Orders
                        </span>
                        <span className="text-xs text-stone-400">
                          Last: 3 hours ago
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-display-lg text-xl text-primary">
                      £5,120.50
                    </td>
                    <td className="px-8 py-6">
                      <span className="bg-primary/10 text-primary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-primary/20">
                        Platinum Member
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="text-stone-400 hover:text-primary transition-colors">
                        <span
                          className="material-symbols-outlined"
                          data-icon="more_vert"
                        >
                          more_vert
                        </span>
                      </button>
                    </td>
                  </tr>
                  {/* <!-- Customer Row 4 --> */}
                  <tr className="hover:bg-orange-50/30 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            className="h-12 w-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                            data-alt="vibrant portrait of a young woman with curly hair and bright yellow top against a minimal blue wall"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9ZjTMWRva_l4XpYj07rENOLbzAqmpR1dTJ9dqo8jKVH2DN62SGuxT7JBbX3dfBnv7KvGE29ey3qzPYYcmbEQFwKwkY1UdJK-uL7RBM1m5-huEO45thQ4SW6-5X23_Xgkb9SO2fDl7u-H0lgx05KmKSlLWGlgTcPijAFpxU29LCBLQPSsPCSv3HtzdPxKlgP8RPRC9vUqCelcRuKWIc9jmHtLzjPh3XIMWqNeh07a3E8_8SbIXM23gZN-jyRYCvNE2r5gtb9Tk_ks"
                          />
                          <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-stone-300 ring-2 ring-white"></span>
                        </div>
                        <div>
                          <p className="font-title-sm text-title-sm text-on-surface">
                            Sienna Ward
                          </p>
                          <p className="text-sm text-stone-500 font-body-md">
                            sienna.ward@design.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-body-md text-on-surface-variant">
                      Jan 05, 2024
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center space-x-2">
                        <span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full text-xs font-bold">
                          2 Orders
                        </span>
                        <span className="text-xs text-stone-400">
                          Last: 1 month ago
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-display-lg text-xl text-primary">
                      £145.00
                    </td>
                    <td className="px-8 py-6">
                      <span className="bg-outline-variant/10 text-outline px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-outline-variant/20">
                        Standard
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="text-stone-400 hover:text-primary transition-colors">
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
            {/* <!-- Pagination --> */}
            <div className="px-8 py-6 bg-surface-container border-t border-orange-100 flex items-center justify-between">
              <p className="text-sm font-body-md text-stone-500">
                Showing <span className="font-bold text-on-surface">1-4</span>{' '}
                of <span className="font-bold text-on-surface">1,284</span>{' '}
                customers
              </p>
              <div className="flex space-x-2">
                <button
                  className="p-2 border border-outline-variant rounded-lg hover:bg-surface-variant text-on-surface-variant disabled:opacity-30"
                  disabled
                >
                  <span
                    className="material-symbols-outlined"
                    data-icon="chevron_left"
                  >
                    chevron_left
                  </span>
                </button>
                <button className="px-4 py-2 bg-secondary text-on-secondary rounded-lg font-label-bold text-sm">
                  1
                </button>
                <button className="px-4 py-2 hover:bg-surface-variant text-on-surface-variant rounded-lg font-label-bold text-sm">
                  2
                </button>
                <button className="px-4 py-2 hover:bg-surface-variant text-on-surface-variant rounded-lg font-label-bold text-sm">
                  3
                </button>
                <button className="px-4 py-2 text-stone-400 cursor-default">
                  ...
                </button>
                <button className="px-4 py-2 hover:bg-surface-variant text-on-surface-variant rounded-lg font-label-bold text-sm">
                  321
                </button>
                <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-variant text-on-surface-variant">
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
          {/* <!-- Bottom Insights Row --> */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="bg-primary text-on-primary p-8 rounded-2xl relative overflow-hidden shadow-xl">
              <div className="relative z-10">
                <h4 className="font-headline-md text-headline-md mb-4 italic">
                  Customer Insights
                </h4>
                <p className="font-body-md opacity-90 max-w-md mb-6">
                  Recent data suggests a 15% increase in repeat purchases from
                  your 'Platinum' tier customers in the bakery sector.
                </p>
                <button className="px-6 py-3 bg-white text-primary font-label-bold text-label-bold rounded-lg hover:bg-orange-50 transition-all scale-98-on-click">
                  View Full Report
                </button>
              </div>
              {/* <!-- Decorative background element --> */}
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-primary-container opacity-20 rounded-full blur-3xl"></div>
            </div>
            <div className="bg-surface-container-high border-2 border-orange-100/50 p-8 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-title-sm text-title-sm">Quick Actions</h4>
                <span
                  className="material-symbols-outlined text-primary"
                  data-icon="bolt"
                >
                  bolt
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-orange-100 hover:border-primary transition-all text-center">
                  <span
                    className="material-symbols-outlined text-primary mb-2"
                    data-icon="mail"
                  >
                    mail
                  </span>
                  <span className="font-label-bold text-xs uppercase text-stone-600">
                    Blast Email
                  </span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-orange-100 hover:border-primary transition-all text-center">
                  <span
                    className="material-symbols-outlined text-primary mb-2"
                    data-icon="loyalty"
                  >
                    loyalty
                  </span>
                  <span className="font-label-bold text-xs uppercase text-stone-600">
                    Assign Tier
                  </span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-orange-100 hover:border-primary transition-all text-center">
                  <span
                    className="material-symbols-outlined text-primary mb-2"
                    data-icon="block"
                  >
                    block
                  </span>
                  <span className="font-label-bold text-xs uppercase text-stone-600">
                    Manage Bans
                  </span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-orange-100 hover:border-primary transition-all text-center">
                  <span
                    className="material-symbols-outlined text-primary mb-2"
                    data-icon="auto_awesome"
                  >
                    auto_awesome
                  </span>
                  <span className="font-label-bold text-xs uppercase text-stone-600">
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
