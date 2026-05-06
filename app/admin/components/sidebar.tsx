import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full flex flex-col p-4 z-40 bg-[#FFFDF5] dark:bg-stone-950 w-64 border-r border-[#D2691E]/10 rounded-r-lg shadow-xl shadow-stone-900/5 font-serif tracking-tight">
      <div className="mb-8 px-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
          <span
            className="material-symbols-outlined text-on-secondary-container"
            data-icon="store"
          >
            store
          </span>
        </div>
        <div>
          <h1 className="text-xl font-bold font-serif text-[#D2691E]">
            Admin Portal
          </h1>
          <p className="text-[10px] text-stone-500 uppercase tracking-widest font-bold">
            Oxford St. Branch
          </p>
        </div>
      </div>
      <nav className="flex-1 space-y-2">
        <Link
          href="/admin/dashboard"
          className="flex items-center gap-3 bg-[#D2691E] text-white rounded-lg px-4 py-3 shadow-md shadow-[#D2691E]/20"
        >
          <span className="material-symbols-outlined" data-icon="dashboard">
            dashboard
          </span>
          <span className="font-bold">Dashboard</span>
        </Link>
        <Link
          className="flex items-center gap-3 text-stone-600 dark:text-stone-400 px-4 py-3 hover:bg-[#D2691E]/5 rounded-lg transition-all hover:translate-x-1"
          href="/admin/orders"
        >
          <span className="material-symbols-outlined" data-icon="shopping_bag">
            shopping_bag
          </span>
          <span>Orders</span>
        </Link>
        <Link
          className="flex items-center gap-3 text-stone-600 dark:text-stone-400 px-4 py-3 hover:bg-[#D2691E]/5 rounded-lg transition-all hover:translate-x-1"
          href="/admin/customers"
        >
          <span className="material-symbols-outlined" data-icon="group">
            group
          </span>
          <span>Customers</span>
        </Link>
        <Link
          className="flex items-center gap-3 text-stone-600 dark:text-stone-400 px-4 py-3 hover:bg-[#D2691E]/5 rounded-lg transition-all hover:translate-x-1"
          href="/admin/analytics"
        >
          <span className="material-symbols-outlined" data-icon="analytics">
            analytics
          </span>
          <span>Analytics</span>
        </Link>
        <Link
          className="flex items-center gap-3 text-stone-600 dark:text-stone-400 px-4 py-3 hover:bg-[#D2691E]/5 rounded-lg transition-all hover:translate-x-1"
          href="/admin/settings"
        >
          <span className="material-symbols-outlined" data-icon="settings">
            settings
          </span>
          <span>Settings</span>
        </Link>
      </nav>
      <div className="mt-auto p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
        <div className="flex items-center gap-3 mb-4">
          <img
            alt="Store Manager Profile"
            className="w-10 h-10 rounded-full object-cover"
            data-alt="Professional portrait of a middle-aged male store manager with a warm smile in a premium retail environment"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxgltMnpY3g2f1IITocyxafgwh5eOwz9BcPeS6HENwvdtr7YzHk1mZKWMGh3KuamHyFeJ2upp8wU5afGHAkAKNa5_AiBRJ944cQ56rT0wQXuoWGkCD6Ku0-rMlrqH5XG7Or3kx1MbYuzeHAHgBzzvMnOV5F4D3zPVg__FNwnOYtkPXcj-MCYPBEgQEriXQxJx85D4_T42W9fMsMQkPkUy67wanqfCP-PKZs7iArFJ1UmwoBokNzILcY0skq6YJJGOMdwWM0XUaRAI"
          />
          <div>
            <p className="text-xs font-bold text-on-surface">Alex Thompson</p>
            <p className="text-[10px] text-on-surface-variant">Store Manager</p>
          </div>
        </div>
        <button className="w-full bg-[#D2691E] text-white py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 active:opacity-80 transition-all">
          <span className="material-symbols-outlined text-sm" data-icon="add">
            add
          </span>
          New Product
        </button>
      </div>
    </aside>
  );
}
