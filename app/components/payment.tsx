import {useCartStore} from '@/store/cart-store';
import {useCheckoutStore} from '@/store/checkout-store';

interface PaymentProps {
  handlepayment: () => void;
  isSubmitting: boolean;
}

export default function Payment({handlepayment, isSubmitting}: PaymentProps) {
  const subtotal = useCartStore(state => state.subtotal);

  const subTotal = subtotal();
  const deliveryFee = subTotal > 0 ? 8.95 : 0;

  const tax = subTotal * 0.075;

  const total = subTotal + deliveryFee + tax;

  const prevStep = useCheckoutStore(state => state.prevStep);

  const paymentInfo = useCheckoutStore(state => state.paymentInfo);

  const setPaymentMethod = useCheckoutStore(state => state.setPaymentMethod);

  const updatePaymentInfo = useCheckoutStore(state => state.updatePaymentInfo);

  const deliveryInfo = useCheckoutStore(state => state.deliveryInfo);

  const isValid =
    paymentInfo.cardholderName &&
    paymentInfo.cardNumber &&
    paymentInfo.expiry &&
    paymentInfo.cvv;

  return (
    <div className="flex-1">
      <section>
        <h1 className="font-['Noto_Serif'] text-[32px] leading-[1.3] font-semibold text-[#1f1b12] mb-8">
          Payment Method
        </h1>

        {/* Payment Method Selection */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {/* Card Option - Selected */}
          <label
            onClick={() => setPaymentMethod('card')}
            className={`cursor-pointer border-2 p-5 rounded-xl flex flex-col items-center gap-3 transition-all ${
              paymentInfo.method === 'card'
                ? 'border-[#974400] bg-[#974400]/5'
                : 'border-[#ebe1d3]'
            }`}
          >
            {' '}
            <input className="hidden" name="payment_method" type="radio" />
            <span className="material-symbols-outlined text-[#974400] text-3xl">
              credit_card
            </span>
            <span className="text-sm leading-[1.2] tracking-wider font-bold font-['Plus_Jakarta_Sans'] text-[#1f1b12]">
              Card
            </span>
          </label>

          {/* Apple Pay Option */}
          <label
            onClick={() => setPaymentMethod('apple_pay')}
            className={`cursor-pointer border-2 p-5 rounded-xl flex flex-col items-center gap-3 transition-all ${
              paymentInfo.method === 'apple_pay'
                ? 'border-[#974400] bg-[#974400]/5'
                : 'border-[#ebe1d3]'
            }`}
          >
            {' '}
            <input className="hidden" name="payment_method" type="radio" />
            <span className="material-symbols-outlined text-[#564338] text-3xl">
              account_balance_wallet
            </span>
            <span className="text-sm leading-[1.2] tracking-wider font-bold font-['Plus_Jakarta_Sans'] text-[#564338]">
              Apple Pay
            </span>
          </label>
        </div>

        {/* Card Details Form */}
        <div className="space-y-5">
          {/* Cardholder Name */}
          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase ml-1">
              Cardholder Name
            </label>
            <input
              className="w-full bg-[#fcf2e3] border-2 border-[#ddc1b3] rounded-xl px-4 py-3.5 font-['Plus_Jakarta_Sans'] text-base leading-normal focus:outline-none focus:border-[#fcc340] focus:ring-4 focus:ring-[#fcc340]/10 transition-all placeholder:text-[#8a7266]/50"
              placeholder="John D. Artisan"
              type="text"
              value={paymentInfo.cardholderName}
              onChange={e =>
                updatePaymentInfo({
                  cardholderName: e.target.value,
                })
              }
            />
          </div>

          {/* Card Number */}
          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase ml-1">
              Card Number
            </label>
            <div className="relative">
              <input
                className="w-full bg-[#fcf2e3] border-2 border-[#ddc1b3] rounded-xl px-4 py-3.5 pr-12 font-['Plus_Jakarta_Sans'] text-base leading-normal focus:outline-none focus:border-[#fcc340] focus:ring-4 focus:ring-[#fcc340]/10 transition-all placeholder:text-[#8a7266]/50"
                placeholder="•••• •••• •••• ••••"
                type="text"
                value={paymentInfo.cardNumber}
                onChange={e =>
                  updatePaymentInfo({
                    cardNumber: e.target.value,
                  })
                }
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <span className="material-symbols-outlined text-[#ddc1b3]">
                  credit_card
                </span>
              </div>
            </div>
          </div>

          {/* Expiry Date & CVV */}
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase ml-1">
                Expiry Date
              </label>
              <input
                className="w-full bg-[#fcf2e3] border-2 border-[#ddc1b3] rounded-xl px-4 py-3.5 font-['Plus_Jakarta_Sans'] text-base leading-normal focus:outline-none focus:border-[#fcc340] focus:ring-4 focus:ring-[#fcc340]/10 transition-all placeholder:text-[#8a7266]/50"
                placeholder="MM / YY"
                type="text"
                value={paymentInfo.expiry}
                onChange={e =>
                  updatePaymentInfo({
                    expiry: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase ml-1">
                CVV
              </label>
              <input
                className="w-full bg-[#fcf2e3] border-2 border-[#ddc1b3] rounded-xl px-4 py-3.5 font-['Plus_Jakarta_Sans'] text-base leading-normal focus:outline-none focus:border-[#fcc340] focus:ring-4 focus:ring-[#fcc340]/10 transition-all placeholder:text-[#8a7266]/50"
                placeholder="•••"
                type="text"
                value={paymentInfo.cvv}
                onChange={e =>
                  updatePaymentInfo({
                    cvv: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Billing Address Section */}
      <section className="pt-8 mt-8 border-t border-[#ebe1d3]">
        <h3 className="font-['Noto_Serif'] text-xl leading-[1.4] font-semibold text-[#1f1b12] mb-6">
          Billing Address
        </h3>
        <div className="space-y-4">
          <label className="flex items-center gap-4 cursor-pointer group hover:bg-[#fcf2e3]/30 p-2 -ml-2 rounded-lg transition-colors">
            <div className="relative flex items-center justify-center">
              <input
                checked={paymentInfo.billingSameAsDelivery}
                onChange={e =>
                  updatePaymentInfo({
                    billingSameAsDelivery: e.target.checked,
                  })
                }
                className="peer appearance-none w-6 h-6 border-2 border-[#ddc1b3] rounded-md bg-[#fcf2e3] checked:bg-[#974400] checked:border-[#974400] transition-all cursor-pointer"
                type="checkbox"
              />
              <span className="material-symbols-outlined material-symbols-filled absolute text-white opacity-0 peer-checked:opacity-100 text-sm pointer-events-none">
                check
              </span>
            </div>
            <span className="font-['Plus_Jakarta_Sans'] text-base leading-normal text-[#1f1b12] group-hover:text-[#974400] transition-colors">
              Same as delivery address
            </span>
          </label>
          <p className="text-sm text-[#564338] ml-10 bg-[#fcf2e3]/50 p-3 rounded-lg border border-[#ebe1d3]">
            {deliveryInfo.address}, {deliveryInfo.city}
          </p>
        </div>
      </section>

      {/* Navigation Buttons */}
      <div className="flex flex-col md:flex-row gap-4 pt-8">
        <button
          type="button"
          disabled={!isSubmitting}
          onClick={handlepayment}
          className=" w-full cursor-pointer px-6 py-3 bg-[#974400] text-white rounded-xl text-sm font-bold tracking-wider uppercase hover:bg-[#7a3700] transition disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
        >
          Pay ${total}
        </button>
        <button
          onClick={prevStep}
          className="w-1/3 px-8 py-4 border-2 border-[#974400] text-[#974400] text-sm leading-[1.2] tracking-wider font-bold font-['Plus_Jakarta_Sans'] rounded-xl hover:bg-[#974400]/5 active:scale-[0.98] transition-all"
        >
          BACK TO REVIEW
        </button>
      </div>
    </div>
  );
}
