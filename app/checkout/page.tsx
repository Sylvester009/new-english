'use client';

import {useState} from 'react';
import Delivery from '../components/delivery';
import Info from '../components/info';
import Review from '../components/review';
import Payment from '../components/payment';
import Header from '../components/header';
import Footer from '../components/footer';
import {useCartStore} from '@/store/cart-store';

export default function Checkout() {
  const [steps, setSteps] = useState(1);
  const items = useCartStore(state => state.items);
  const subtotal = useCartStore(state => state.subtotal);
  const subTotal = subtotal();

  const deliveryFee = subTotal > 0 ? 8.95 : 0;

  const tax = subTotal * 0.075;

  const total = subTotal + deliveryFee + tax;

  return (
    <main className="max-w-full bg-[#fff8f1]">
      <Header />

      {/* Progress Tracker - Optimized spacing */}
      <div className="mb-12 md:mb-16 px-4 sm:px-6 py-8 md:py-16 lg:py-16 mx-auto">
        <div className="flex items-center justify-between max-w-3xl mx-auto relative">
          {/* Line background - Using color reference from CSS */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#ebe1d3] -translate-y-1/2 z-0 rounded-full"></div>

          {/* Info (Completed) */}
          <div className="relative z-10 flex flex-col items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#fcc340] text-[#6f5100] flex items-center justify-center shadow-md ring-2 ring-[#fcc340]/20">
              <span
                className="material-symbols-outlined text-sm material-symbols-filled"
                data-icon="check"
                data-weight="fill"
              >
                check
              </span>
            </div>
            <span className="text-sm leading-[1.2] tracking-wider font-bold font-['Plus_Jakarta_Sans'] text-[#564338]">
              Info
            </span>
          </div>

          {/* Delivery (Active) */}
          <div className="relative z-10 flex flex-col items-center gap-2.5">
            <div className="w-12 h-12 rounded-full bg-[#bb5808] text-[#fffbff] flex items-center justify-center shadow-lg ring-4 ring-[#bb5808]/20">
              <span
                className="material-symbols-outlined text-base material-symbols-filled"
                data-icon="local_shipping"
                data-weight="fill"
              >
                local_shipping
              </span>
            </div>
            <span className="text-sm leading-[1.2] tracking-wider font-bold font-['Plus_Jakarta_Sans'] text-[#974400]">
              Delivery
            </span>
          </div>

          {/* Review (Pending) */}
          <div className="relative z-10 flex flex-col items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#ebe1d3] text-[#564338] flex items-center justify-center">
              <span
                className="material-symbols-outlined text-sm"
                data-icon="rate_review"
              >
                rate_review
              </span>
            </div>
            <span className="text-sm leading-[1.2] tracking-wider font-bold font-['Plus_Jakarta_Sans'] text-[#564338]/60">
              Review
            </span>
          </div>

          {/* Payment (Pending) */}
          <div className="relative z-10 flex flex-col items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#ebe1d3] text-[#564338] flex items-center justify-center">
              <span
                className="material-symbols-outlined text-sm"
                data-icon="payments"
              >
                payments
              </span>
            </div>
            <span className="text-sm leading-[1.2] tracking-wider font-bold font-['Plus_Jakarta_Sans'] text-[#564338]/60">
              Payment
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Grid - Optimized gap and padding */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start px-4 sm:px-6 py-8 md:py-12 lg:py-10 max-w-7xl mx-auto">
        {/* Left Side: Dynamic Form */}
        <div className="lg:col-span-7 xl:col-span-8 w-full">
          {steps === 1 ? (
            <Info steps={steps} setSteps={setSteps} />
          ) : steps === 2 ? (
            <Delivery steps={steps} setSteps={setSteps} />
          ) : steps === 3 ? (
            <Review steps={steps} setSteps={setSteps} />
          ) : steps === 4 ? (
            <Payment steps={steps} setSteps={setSteps} />
          ) : (
            <Info steps={steps} setSteps={setSteps} />
          )}
        </div>

        {/* Right Side: Order Summary - Optimized card */}
        <aside className="lg:col-span-5 xl:col-span-4 bg-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-stone-900/5 sticky top-32 border border-[#ebe1d3]/50">
          <h3 className="font-['Noto_Serif'] text-xl leading-[1.4] font-semibold text-[#1f1b12] mb-6 pb-3 border-b border-[#ebe1d3]">
            Order Summary
          </h3>

          {/* Items List - Optimized spacing */}
          <div className="space-y-5 mb-6 max-h-[360px] overflow-y-auto pr-2 custom-scrollbar">
            {items.length === 0 ? (
              <div className="text-center text-sm text-[#564338] py-10">
                Your cart is empty
              </div>
            ) : (
              items.map(item => (
                <div
                  key={item.id}
                  className="flex gap-3.5 p-2 -mx-2 rounded-lg hover:bg-[#fcf2e3]/50 transition-colors"
                >
                  <div className="w-[72px] h-[72px] rounded-xl overflow-hidden shrink-0 bg-[#ebe1d3] border border-[#ebe1d3]/50">
                    <img
                      alt={item.name}
                      className="w-full h-full object-cover"
                      src={item.image}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-sm leading-[1.2] tracking-wider font-bold font-['Plus_Jakarta_Sans'] text-[#1f1b12] truncate">
                      {item.name}
                    </div>

                    <div className="text-[#564338] text-xs mt-1.5">
                      Quantity: {item.quantity}
                    </div>

                    <div className="text-[#974400] font-bold mt-1.5">
                      #{(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Price Breakdown - Optimized spacing */}
          <div className="space-y-2.5 pt-5 border-t border-[#ebe1d3]">
            <div className="flex justify-between text-sm text-[#564338]">
              <span>Subtotal</span>
              <span className="font-medium">#{subTotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-sm text-[#564338]">
              <span>Delivery Fee</span>
              <span className="text-[#795900] font-medium">
                #{deliveryFee.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between text-sm text-[#564338]">
              <span>Tax (VAT)</span>
              <span className="font-medium">#{tax.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-baseline pt-4 border-t border-[#ebe1d3]">
              <span className="text-[32px] leading-[1.3] font-semibold text-[#1f1b12]">
                Total
              </span>
              <span className="text-[24px] leading-[1.3] font-semibold text-[#974400]">
                #{total.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Security Badge - Optimized with consistent padding */}
          <div className="mt-6 p-4 rounded-xl bg-[#fcf2e3] border border-[#fcc340]/20 flex items-center gap-3 shadow-sm">
            <span
              className="material-symbols-outlined text-[#795900] text-xl"
              data-icon="verified_user"
            >
              verified_user
            </span>
            <div className="flex-1">
              <div className="text-[11px] leading-[1.2] tracking-wider font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase">
                Secure Checkout Guaranteed
              </div>
              <div className="text-[10px] text-[#564338]/70 mt-0.5">
                Your data is protected with 256-bit encryption
              </div>
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </main>
  );
}
