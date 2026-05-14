// components/top-appbar.tsx
'use client';

import {usePathname} from 'next/navigation';

export default function TopAppBar() {
  const pathname = usePathname();

  const getPageTitle = () => {
    if (pathname.includes('/orders')) return 'Orders';
    if (pathname.includes('/customers')) return 'Customers';
    if (pathname.includes('/analytics')) return 'Analytics';
    if (pathname.includes('/settings')) return 'Settings';
    return 'Dashboard';
  };

  return (
    <header className="sticky top-0 right-0 flex justify-between items-center px-6 lg:px-8 z-30 w-full h-16 border-b-2 border-orange-100 dark:border-stone-800 bg-[#FDF5E6]/90 dark:bg-stone-950/90 backdrop-blur-md">
      <div className="flex items-center gap-6">
        <span className="font-['Plus_Jakarta_Sans'] font-semibold uppercase tracking-[0.05em] text-xs text-stone-600 dark:text-orange-400">
          Management Portal
        </span>
        <div className="relative hidden sm:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
            search
          </span>
          <input
            className="pl-10 pr-4 py-1.5 bg-[#fcf2e3] border-2 border-orange-100 rounded-full text-sm focus:outline-none focus:border-[#fcc340] focus:ring-2 focus:ring-[#fcc340]/20 transition-all w-64 placeholder:text-stone-400"
            placeholder={`Search ${getPageTitle().toLowerCase()}...`}
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 lg:gap-6">
        <button className="text-stone-600 dark:text-stone-400 hover:opacity-80 transition-opacity p-1">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="text-stone-600 dark:text-stone-400 hover:opacity-80 transition-opacity p-1">
          <span className="material-symbols-outlined">help_outline</span>
        </button>
        <div className="h-8 w-px bg-orange-100 dark:bg-stone-800 mx-1 lg:mx-2"></div>
        <div className="flex items-center gap-3">
          <span className="hidden lg:block font-['Plus_Jakarta_Sans'] font-semibold uppercase tracking-[0.05em] text-xs text-stone-600 dark:text-stone-400">
            Admin User
          </span>
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#974400]/20 ring-2 ring-[#fff8f1]">
            <img
              className="w-full h-full object-cover"
              data-alt="close-up portrait of a professional male administrator in a clean modern office setting with warm lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRI3jIgsFBixuX2lb_Ug9z-avT1syF0E_UI_sptHK-rMbtp6n82ENbeg7WLnMmIy-0zM-e8N0SpH9uD2vFmQsf6Q8mODIjTnabQkLxWHHvsZqFb1I9mJDkU9u8Bxdyyt2Wz3k8IeZc4iGPEpyLZXDld7i5M0dEHZtXqT6TV3JPxJFX3aGz1kSBNOvOb-L0cVs1hYpm2rTZY_rQg13Yuxll6wRiggTGK5QAh6HGDEz_UguNgiGbq5ks-2yjtScxq1tTvlcIuy84Y1A"
            />
          </div>
          <button className="font-['Plus_Jakarta_Sans'] font-semibold uppercase tracking-[0.05em] text-xs text-orange-700 dark:text-orange-400 hover:opacity-80 transition-opacity">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
