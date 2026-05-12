'use client';

import {useState} from 'react';
import {CartSidebar} from '@/components/cart-sidebar';
import {ShoppingCart} from 'lucide-react';
import {usePathname} from 'next/navigation';

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const isStore = pathName === '/store';
  const isCheckout = pathName === '/checkout';

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Page Content */}
      {children}

      {/* Cart Sidebar */}
      <CartSidebar open={open} onClose={() => setOpen(false)} />

      {/* Floating Button */}
      {(isStore || isCheckout) && (
        <button
          onClick={() => setOpen(true)}
          className="
          fixed bottom-6 right-6 z-50
          h-14 w-14 rounded-full
          bg-[#974400] text-white
          flex items-center justify-center
          shadow-lg hover:shadow-xl
          transition-all duration-300
          hover:scale-110 active:scale-95
        "
        >
          <ShoppingCart className="h-6 w-6" />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center font-semibold">
            3
          </span>
        </button>
      )}
    </>
  );
}
