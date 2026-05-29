'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import useUser from '@/hooks/useUser';
import {useState} from 'react';
import AddProductModal from './AddProductModal';

export default function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {loading, currentUser} = useUser();
  const pathname = usePathname();

  const navItems = [
    {
      href: '/admin/dashboard',
      icon: 'dashboard',
      label: 'Dashboard',
    },
    {
      href: '/admin/orders',
      icon: 'shopping_bag',
      label: 'Orders',
    },
    {
      href: '/admin/customers',
      icon: 'group',
      label: 'Customers',
    },
    {
      href: '/admin/analytics',
      icon: 'analytics',
      label: 'Analytics',
    },
    {
      href: '/admin/settings',
      icon: 'settings',
      label: 'Settings',
    },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <aside className="fixed left-0 top-0 h-full flex flex-col p-4 z-40 bg-[#FFFDF5] dark:bg-stone-950 w-64 border-r border-[#D2691E]/10 rounded-r-2xl shadow-xl shadow-stone-900/5 font-['Noto_Serif'] tracking-tight">
        {/* Brand Header */}
        <div className="mb-8 px-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#fcc340] flex items-center justify-center shadow-sm">
            <span
              className="material-symbols-outlined text-[#6f5100] material-symbols-filled text-lg"
              data-icon="store"
            >
              store
            </span>
          </div>
          <div>
            <h1 className="text-xl font-bold font-['Noto_Serif'] text-[#D2691E] leading-tight">
              Admin Portal
            </h1>
            <p className="text-[10px] text-stone-500 uppercase tracking-[0.15em] font-bold font-['Plus_Jakarta_Sans']">
              Bodija St. Branch
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav
          className="flex-1 space-y-1.5"
          role="navigation"
          aria-label="Main navigation"
        >
          {navItems.map(item => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200
                font-['Plus_Jakarta_Sans'] text-sm font-bold
                ${
                  active
                    ? 'bg-[#D2691E] text-white shadow-md shadow-[#D2691E]/20'
                    : 'text-stone-600 dark:text-stone-400 hover:bg-[#D2691E]/5 hover:translate-x-1'
                }
              `}
                aria-current={active ? 'page' : undefined}
              >
                <span
                  className={`material-symbols-outlined text-lg ${active ? 'material-symbols-filled' : ''}`}
                  data-icon={item.icon}
                >
                  {item.icon}
                </span>
                <span>{item.label}</span>
                {active && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Profile & Quick Action */}
        <div className="mt-auto p-4 bg-[#fcf2e3] rounded-xl border border-[#ddc1b3]/30">
          <div className="flex items-center gap-3 mb-4">
            <img
              alt="Store Manager Profile"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-[#fcc340]/30"
              data-alt="Professional portrait of a middle-aged male store manager with a warm smile in a premium retail environment"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxgltMnpY3g2f1IITocyxafgwh5eOwz9BcPeS6HENwvdtr7YzHk1mZKWMGh3KuamHyFeJ2upp8wU5afGHAkAKNa5_AiBRJ944cQ56rT0wQXuoWGkCD6Ku0-rMlrqH5XG7Or3kx1MbYuzeHAHgBzzvMnOV5F4D3zPVg__FNwnOYtkPXcj-MCYPBEgQEriXQxJx85D4_T42W9fMsMQkPkUy67wanqfCP-PKZs7iArFJ1UmwoBokNzILcY0skq6YJJGOMdwWM0XUaRAI"
            />
            <div className="min-w-0">
              <p className="text-xs font-bold text-[#1f1b12] truncate">
                {currentUser?.name}
              </p>
              <p className="text-[10px] text-[#564338] font-medium">Admin</p>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-[#D2691E] text-white py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-all hover:brightness-110 shadow-sm shadow-[#D2691E]/20 font-['Plus_Jakarta_Sans']"
          >
            <span className="material-symbols-outlined text-sm" data-icon="add">
              add
            </span>
            New Product
          </button>
        </div>
      </aside>
      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
