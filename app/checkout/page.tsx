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
    <main className="max-w-full mx-auto">
        <Header />
      {/* <!-- Progress Tracker --> */}
      <div className="mb-12 md:mb-16 px-6 py-12 md:py-20">
        <div className="flex items-center justify-between max-w-2xl mx-auto relative">
          {/* <!-- Line background --> */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-surface-container -translate-y-1/2 z-0"></div>
          {/* <!-- Info (Completed) --> */}
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shadow-md">
              <span
                className="material-symbols-outlined text-sm material-symbols-filled"
                data-icon="check"
                data-weight="fill"
              >
                check
              </span>
            </div>
            <span className="font-label-bold text-label-bold text-on-surface-variant">
              Info
            </span>
          </div>
          {/* <!-- Delivery (Active) --> */}
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-lg ring-4 ring-primary-container/20">
              <span
                className="material-symbols-outlined text-sm material-symbols-filled"
                data-icon="local_shipping"
                data-weight="fill"
              >
                local_shipping
              </span>
            </div>
            <span className="font-label-bold text-label-bold text-primary font-bold">
              Delivery
            </span>
          </div>
          {/* <!-- Review (Pending) --> */}
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center">
              <span
                className="material-symbols-outlined text-sm"
                data-icon="rate_review"
              >
                rate_review
              </span>
            </div>
            <span className="font-label-bold text-label-bold text-on-surface-variant/60">
              Review
            </span>
          </div>
          {/* <!-- Payment (Pending) --> */}
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center">
              <span
                className="material-symbols-outlined text-sm"
                data-icon="payments"
              >
                payments
              </span>
            </div>
            <span className="font-label-bold text-label-bold text-on-surface-variant/60">
              Payment
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start px-6 py-12 md:py-20">
        {/* <!-- Left Side: Delivery Details Form --> */}
        <div className="lg:col-span-8 w-full">
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
        {/* <!-- Right Side: Order Summary --> */}
        <aside className="lg:col-span-4 bg-white rounded-2xl p-8 shadow-xl shadow-stone-900/5 sticky top-32">
          <h3 className="font-title-sm text-title-sm text-on-background mb-8 pb-4 border-b border-surface-variant">
            Order Summary
          </h3>
          <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {/* <!-- Item 1 --> */}
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-surface-variant">
                <img
                  alt="Artisan Sourdough"
                  className="w-full h-full object-cover"
                  data-alt="close-up of artisan sourdough bread on dark marble countertop with dramatic side lighting and flour dusting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnWh5Ki80o8C9O3lukOCmfWKd9LXXnVcDau5xFywLzId0mVQQdTwhtJIG2-6GCH5ddUKVPysc6hQ6cW0QfNgVMS5u1iIJjADxLYZxmJU8lZhBAwgUq7bmDoP9-vmMON_2HnMDpXHdWv9Y3kreBSIITRS8l5DUcrecAOF27bi5ZH8EG_QKep5PLg9CGz2TDtzbmU8ree_dr8t6zlYtGfCo2operIK7A9bwtdtaboX3lintrX8p9COLAxob6aTIFlLyadFPZvKhrf7c"
                />
              </div>
              <div className="flex-1">
                <div className="font-label-bold text-sm text-on-background">
                  Country Sourdough Loaf
                </div>
                <div className="text-on-surface-variant text-xs mt-1">
                  Quantity: 1
                </div>
                <div className="text-primary font-bold mt-1">£6.50</div>
              </div>
            </div>
            {/* <!-- Item 2 --> */}
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-surface-variant">
                <img
                  alt="Organic Strawberry Jam"
                  className="w-full h-full object-cover"
                  data-alt="jar of organic dark red strawberry jam with gold lid on a rustic wooden table with morning light"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSnpx1m2Qde6T7M2cW1NoQ5wGtImzGYtQphWExJSDy6HM1cK-Ut7jbWYsHYN-7PWDECUpFzk68Ww_TxBxTHFU16PGp_DpigEHiL77QCOnIo-B330i-76uBpbWgZ3Dkb89-qVlXfhn41zUE6G20zHWkTAbE1PCZ5AKeW_yd-Jq32kb-wMZq8Xa_H2f11FNflM2uxLpOueAzlHbefPW056sszkmP-ONJcClzuJ__gjM5CuMIup4M7zF9ojp0u5YejbG9S-h8ny6hs9g"
                />
              </div>
              <div className="flex-1">
                <div className="font-label-bold text-sm text-on-background">
                  Estate Strawberry Jam
                </div>
                <div className="text-on-surface-variant text-xs mt-1">
                  Quantity: 2
                </div>
                <div className="text-primary font-bold mt-1">£14.00</div>
              </div>
            </div>
            {/* <!-- Item 3 --> */}
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-surface-variant">
                <img
                  alt="Premium Olive Oil"
                  className="w-full h-full object-cover"
                  data-alt="tall elegant dark glass bottle of premium extra virgin olive oil with gold labeling and olive branch shadows"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC84U2ZxWHSEj3J9ytUG-L96Ikc9FQ17GSTzTM8abuHQxKwNQn5gEv5jDrYru_pMcP-T8l77vCCoVKGnaSyzveQTAS2LPjDL1nC1cMjdx8K-j8DZcAjNvKFir-48EIfA9YRdLuX2qnfhMLTICC10R8xpQjZUwdH8OzEf4DPglyY38XuttnIkf3Z_0oqOFRgdoNvhlynCa94afnBWXF78JbZxIlDNtHYLHtSlNCmUkuKIdvqUnafki9rRCfeRbcPGbLhvgde6UEjLT8"
                />
              </div>
              <div className="flex-1">
                <div className="font-label-bold text-sm text-on-background">
                  Sicilian Extra Virgin Oil
                </div>
                <div className="text-on-surface-variant text-xs mt-1">
                  Quantity: 1
                </div>
                <div className="text-primary font-bold mt-1">£24.50</div>
              </div>
            </div>
          </div>
          {/* <!-- Price Breakdown --> */}
          <div className="space-y-3 pt-6 border-t border-surface-variant">
            <div className="flex justify-between text-on-surface-variant">
              <span>Subtotal</span>
              <span>£45.00</span>
            </div>
            <div className="flex justify-between text-on-surface-variant">
              <span>Delivery Fee</span>
              <span className="text-secondary font-medium">£8.95</span>
            </div>
            <div className="flex justify-between text-on-surface-variant">
              <span>Tax (VAT)</span>
              <span>£3.20</span>
            </div>
            <div className="flex justify-between text-headline-md font-headline-md text-on-background pt-4">
              <span>Total</span>
              <span className="text-primary">£57.15</span>
            </div>
          </div>
          {/* <!-- Security Badge --> */}
          <div className="mt-8 p-4 rounded-lg bg-surface-container-low flex items-center gap-3">
            <span
              className="material-symbols-outlined text-secondary"
              data-icon="verified_user"
            >
              verified_user
            </span>
            <div className="text-[11px] font-label-bold text-on-surface-variant uppercase tracking-wider">
              SECURE CHECKOUT GUARANTEED
            </div>
          </div>
        </aside>
      </div>
      <Footer />
    </main>
  );
}
