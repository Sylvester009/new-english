'use client';

import {useState} from 'react';
import Delivery from '../components/delivery';
import Info from '../components/info';
import Review from '../components/review';
import Payment from '../components/payment';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Checkout() {
  const [steps, setSteps] = useState(1);

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
            {/* Item 1 */}
            <div className="flex gap-3.5 p-2 -mx-2 rounded-lg hover:bg-[#fcf2e3]/50 transition-colors">
              <div className="w-[72px] h-[72px] rounded-xl overflow-hidden shrink-0 bg-[#ebe1d3] border border-[#ebe1d3]/50">
                <img
                  alt="Artisan Sourdough"
                  className="w-full h-full object-cover"
                  data-alt="close-up of artisan sourdough bread on dark marble countertop with dramatic side lighting and flour dusting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnWh5Ki80o8C9O3lukOCmfWKd9LXXnVcDau5xFywLzId0mVQQdTwhtJIG2-6GCH5ddUKVPysc6hQ6cW0QfNgVMS5u1iIJjADxLYZxmJU8lZhBAwgUq7bmDoP9-vmMON_2HnMDpXHdWv9Y3kreBSIITRS8l5DUcrecAOF27bi5ZH8EG_QKep5PLg9CGz2TDtzbmU8ree_dr8t6zlYtGfCo2operIK7A9bwtdtaboX3lintrX8p9COLAxob6aTIFlLyadFPZvKhrf7c"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm leading-[1.2] tracking-wider font-bold font-['Plus_Jakarta_Sans'] text-[#1f1b12] truncate">
                  Country Sourdough Loaf
                </div>
                <div className="text-[#564338] text-xs mt-1.5">Quantity: 1</div>
                <div className="text-[#974400] font-bold mt-1.5">£6.50</div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-3.5 p-2 -mx-2 rounded-lg hover:bg-[#fcf2e3]/50 transition-colors">
              <div className="w-[72px] h-[72px] rounded-xl overflow-hidden shrink-0 bg-[#ebe1d3] border border-[#ebe1d3]/50">
                <img
                  alt="Organic Strawberry Jam"
                  className="w-full h-full object-cover"
                  data-alt="jar of organic dark red strawberry jam with gold lid on a rustic wooden table with morning light"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSnpx1m2Qde6T7M2cW1NoQ5wGtImzGYtQphWExJSDy6HM1cK-Ut7jbWYsHYN-7PWDECUpFzk68Ww_TxBxTHFU16PGp_DpigEHiL77QCOnIo-B330i-76uBpbWgZ3Dkb89-qVlXfhn41zUE6G20zHWkTAbE1PCZ5AKeW_yd-Jq32kb-wMZq8Xa_H2f11FNflM2uxLpOueAzlHbefPW056sszkmP-ONJcClzuJ__gjM5CuMIup4M7zF9ojp0u5YejbG9S-h8ny6hs9g"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm leading-[1.2] tracking-wider font-bold font-['Plus_Jakarta_Sans'] text-[#1f1b12] truncate">
                  Estate Strawberry Jam
                </div>
                <div className="text-[#564338] text-xs mt-1.5">Quantity: 2</div>
                <div className="text-[#974400] font-bold mt-1.5">£14.00</div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-3.5 p-2 -mx-2 rounded-lg hover:bg-[#fcf2e3]/50 transition-colors">
              <div className="w-[72px] h-[72px] rounded-xl overflow-hidden shrink-0 bg-[#ebe1d3] border border-[#ebe1d3]/50">
                <img
                  alt="Premium Olive Oil"
                  className="w-full h-full object-cover"
                  data-alt="tall elegant dark glass bottle of premium extra virgin olive oil with gold labeling and olive branch shadows"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC84U2ZxWHSEj3J9ytUG-L96Ikc9FQ17GSTzTM8abuHQxKwNQn5gEv5jDrYru_pMcP-T8l77vCCoVKGnaSyzveQTAS2LPjDL1nC1cMjdx8K-j8DZcAjNvKFir-48EIfA9YRdLuX2qnfhMLTICC10R8xpQjZUwdH8OzEf4DPglyY38XuttnIkf3Z_0oqOFRgdoNvhlynCa94afnBWXF78JbZxIlDNtHYLHtSlNCmUkuKIdvqUnafki9rRCfeRbcPGbLhvgde6UEjLT8"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm leading-[1.2] tracking-wider font-bold font-['Plus_Jakarta_Sans'] text-[#1f1b12] truncate">
                  Sicilian Extra Virgin Oil
                </div>
                <div className="text-[#564338] text-xs mt-1.5">Quantity: 1</div>
                <div className="text-[#974400] font-bold mt-1.5">£24.50</div>
              </div>
            </div>
          </div>

          {/* Price Breakdown - Optimized spacing */}
          <div className="space-y-2.5 pt-5 border-t border-[#ebe1d3]">
            <div className="flex justify-between text-sm text-[#564338]">
              <span>Subtotal</span>
              <span className="font-medium">£45.00</span>
            </div>
            <div className="flex justify-between text-sm text-[#564338]">
              <span>Delivery Fee</span>
              <span className="text-[#795900] font-medium">£8.95</span>
            </div>
            <div className="flex justify-between text-sm text-[#564338]">
              <span>Tax (VAT)</span>
              <span className="font-medium">£3.20</span>
            </div>
            <div className="flex justify-between items-baseline pt-4 border-t border-[#ebe1d3]">
              <span className="text-[32px] leading-[1.3] font-semibold text-[#1f1b12]">
                Total
              </span>
              <span className="text-[32px] leading-[1.3] font-semibold text-[#974400]">
                £57.15
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
