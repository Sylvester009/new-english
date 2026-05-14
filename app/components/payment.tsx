export default function Payment({
  steps,
  setSteps,
}: {
  steps: number;
  setSteps: any;
}) {
  return (
    <div className="flex-1">
      <section>
        <h1 className="font-['Noto_Serif'] text-[32px] leading-[1.3] font-semibold text-[#1f1b12] mb-8">
          Payment Method
        </h1>

        {/* Payment Method Selection */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {/* Card Option - Selected */}
          <label className="cursor-pointer border-2 border-[#974400] bg-[#974400]/5 p-5 sm:p-6 rounded-xl flex flex-col items-center gap-3 transition-all hover:bg-[#974400]/10 hover:shadow-md">
            <input
              defaultChecked
              className="hidden"
              name="payment_method"
              type="radio"
            />
            <span className="material-symbols-outlined text-[#974400] text-3xl">
              credit_card
            </span>
            <span className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#1f1b12]">
              Card
            </span>
          </label>

          {/* Apple Pay Option */}
          <label className="cursor-pointer border-2 border-[#ebe1d3] hover:border-[#ddc1b3] p-5 sm:p-6 rounded-xl flex flex-col items-center gap-3 transition-all hover:bg-[#fcf2e3]/50 hover:shadow-md">
            <input className="hidden" name="payment_method" type="radio" />
            <span className="material-symbols-outlined text-[#564338] text-3xl">
              account_balance_wallet
            </span>
            <span className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338]">
              Apple Pay
            </span>
          </label>
        </div>

        {/* Card Details Form */}
        <div className="space-y-5">
          {/* Cardholder Name */}
          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-[0.1em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase ml-1">
              Cardholder Name
            </label>
            <input
              className="w-full bg-[#fcf2e3] border-2 border-[#ddc1b3] rounded-xl px-4 py-3.5 font-['Plus_Jakarta_Sans'] text-base leading-[1.5] focus:outline-none focus:border-[#fcc340] focus:ring-4 focus:ring-[#fcc340]/10 transition-all placeholder:text-[#8a7266]/50"
              placeholder="John D. Artisan"
              type="text"
            />
          </div>

          {/* Card Number */}
          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-[0.1em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase ml-1">
              Card Number
            </label>
            <div className="relative">
              <input
                className="w-full bg-[#fcf2e3] border-2 border-[#ddc1b3] rounded-xl px-4 py-3.5 pr-12 font-['Plus_Jakarta_Sans'] text-base leading-[1.5] focus:outline-none focus:border-[#fcc340] focus:ring-4 focus:ring-[#fcc340]/10 transition-all placeholder:text-[#8a7266]/50"
                placeholder="•••• •••• •••• ••••"
                type="text"
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
              <label className="text-xs tracking-[0.1em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase ml-1">
                Expiry Date
              </label>
              <input
                className="w-full bg-[#fcf2e3] border-2 border-[#ddc1b3] rounded-xl px-4 py-3.5 font-['Plus_Jakarta_Sans'] text-base leading-[1.5] focus:outline-none focus:border-[#fcc340] focus:ring-4 focus:ring-[#fcc340]/10 transition-all placeholder:text-[#8a7266]/50"
                placeholder="MM / YY"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-[0.1em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase ml-1">
                CVV
              </label>
              <input
                className="w-full bg-[#fcf2e3] border-2 border-[#ddc1b3] rounded-xl px-4 py-3.5 font-['Plus_Jakarta_Sans'] text-base leading-[1.5] focus:outline-none focus:border-[#fcc340] focus:ring-4 focus:ring-[#fcc340]/10 transition-all placeholder:text-[#8a7266]/50"
                placeholder="•••"
                type="text"
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
                defaultChecked
                className="peer appearance-none w-6 h-6 border-2 border-[#ddc1b3] rounded-md bg-[#fcf2e3] checked:bg-[#974400] checked:border-[#974400] transition-all cursor-pointer"
                type="checkbox"
              />
              <span className="material-symbols-outlined material-symbols-filled absolute text-white opacity-0 peer-checked:opacity-100 text-sm pointer-events-none">
                check
              </span>
            </div>
            <span className="font-['Plus_Jakarta_Sans'] text-base leading-[1.5] text-[#1f1b12] group-hover:text-[#974400] transition-colors">
              Same as delivery address
            </span>
          </label>
          <p className="text-sm text-[#564338] ml-10 bg-[#fcf2e3]/50 p-3 rounded-lg border border-[#ebe1d3]">
            42 Baker Street, London, W1U 8ED, United Kingdom
          </p>
        </div>
      </section>

      {/* Navigation Buttons */}
      <div className="flex flex-col md:flex-row gap-4 pt-8">
        <button className="flex-1 px-8 py-4 bg-[#bb5808] text-[#fffbff] text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-sm">lock</span>
          PAY £57.15
        </button>
        <button
          onClick={() => setSteps(steps - 1)}
          className="px-8 py-4 border-2 border-[#974400] text-[#974400] text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] rounded-xl hover:bg-[#974400]/5 active:scale-[0.98] transition-all"
        >
          BACK TO REVIEW
        </button>
      </div>
    </div>
  );
}
