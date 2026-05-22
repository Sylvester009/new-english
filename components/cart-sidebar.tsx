'use client';

import Link from 'next/link';
import CartItem from './cartItem';
import {useCartStore} from '@/store/cart-store';
import {useEffect, useState} from 'react';

export function CartSidebar({open, onClose}: {open: boolean; onClose: any}) {
  const items = useCartStore(state => state.items);
  const subtotal = useCartStore(state => state.subtotal);
  const subtotalValue = subtotal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div
        className={`
        fixed inset-y-0 right-0 z-50 w-full max-w-md
        bg-[#fff8f1] shadow-2xl flex flex-col
        transform transition-transform duration-500 ease-in-out
        ${open ? 'translate-x-0' : 'translate-x-full'}
      `}
      >
        {' '}
        {/* <!-- Cart Header --> */}
        <div className="px-8 py-6 border-b border-[#e2d9ca] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="material-symbols-outlined terracotta"
              data-icon="shopping_bag"
            >
              shopping_bag
            </span>
            <h2 className="text-[15px] font-semibold tracking-wide primary">
              Your Cart
            </h2>
            <span className="bg-s[#ebe1d3] on-surface px-2 py-0.5 rounded-full label-md">
              {items.length || 0} Items
            </span>
          </div>
          <button
            className="p-2 hover:bg-[#fcf2e3] rounded-full transition-colors"
            onClick={onClose}
          >
            <span
              className="material-symbols-outlined on-surface-variant"
              data-icon="close"
            >
              close
            </span>
          </button>
        </div>
        {/* <!-- Cart Items List --> */}
        <CartItem />
        {/* <!-- Cart Footer / Checkout --> */}
        <div className="px-8 py-8 border-t border-[#e2d9ca] bg-[#fcf2e3]">
          <div className="space-y-3 mb-6">
            <div className="flex justify-between body-md on-surface-variant">
              <span>Subtotal</span>
              <span className="on-surface font-semibold">
                #{mounted ? subtotalValue : 0}
              </span>
            </div>
            <div className="flex justify-between body-md on-surface-variant">
              <span>Shipping</span>
              <span className="italic text-xs">Calculated at checkout</span>
            </div>
            <div className="flex justify-between text-[15px] font-semibold tracking-wide primary pt-2 border-t border-[#e2d9ca]">
              <span>Total</span>
              <span className="text-[#974400]">
                #{mounted ? subtotalValue : 0}
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <Link href="/checkout">
              <button
                onClick={onClose}
                className="w-full bg-[#e2d9ca] text-[#974400] hover:text-white py-4 rounded-lg button hover:bg-[#B25919] transition-all active:scale-[0.98] shadow-lg shadow-[#e2d9ca]/20"
              >
                Proceed to Checkout
              </button>
            </Link>
            <p className="text-center text-[10px] text-outline label-md pt-5 uppercase tracking-[0.2em]">
              Secure Checkout by New English
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
