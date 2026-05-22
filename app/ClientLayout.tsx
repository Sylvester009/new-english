'use client';

import {useState} from 'react';
import {CartSidebar} from '@/components/cart-sidebar';
import {ShoppingCart} from 'lucide-react';
import {usePathname} from 'next/navigation';
import {useCartStore} from '@/store/cart-store';

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const items = useCartStore(state => state.items);

  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);

  // Determine which pages should NOT show the cart button
  const isHomepage = pathName === '/';
  const isSignup = pathName === '/signup';
  const isLogin = pathName === '/login';
  const isAdminPage = pathName.startsWith('/admin');

  // Show cart button everywhere except excluded pages
  const shouldShowCart = !isHomepage && !isSignup && !isLogin && !isAdminPage;

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Page Content */}
      {children}

      {/* Cart Sidebar */}
      <CartSidebar open={open} onClose={() => setOpen(false)} />

      {/* Floating Cart Button */}
      {shouldShowCart && (
        <button
          onClick={() => setOpen(true)}
          aria-label={`Open cart with ${items.length} items`}
          className="
            fixed bottom-6 right-6 z-50
            h-14 w-14 rounded-full
            bg-[#974400] text-white
            flex items-center justify-center
            shadow-lg hover:shadow-xl
            transition-all duration-300
            hover:scale-110 active:scale-95
            group
          "
        >
          <ShoppingCart className="h-6 w-6 group-hover:rotate-12 transition-transform" />

          {items.length > 0 && (
            <span
              className="
              absolute -top-1 -right-1 
              bg-red-500 text-white 
              text-[10px] min-w-[20px] h-[20px] px-1.5 
              rounded-full flex items-center justify-center 
              font-bold font-['Plus_Jakarta_Sans']
              shadow-md animate-in zoom-in duration-200
            "
            >
              {totalCount > 99 ? '99+' : totalCount}
            </span>
          )}
        </button>
      )}
    </>
  );
}
