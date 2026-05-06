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
        <h1 className="font-headline-md text-headline-md text-on-surface mb-8">
          Payment Method
        </h1>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <label className="cursor-pointer border-2 border-primary bg-primary/5 p-6 rounded-xl flex flex-col items-center gap-3 transition-all">
            <input
              checked
              className="hidden"
              name="payment_method"
              type="radio"
            />
            <span className="material-symbols-outlined text-primary text-3xl">
              credit_card
            </span>
            <span className="font-label-bold text-label-bold text-on-surface">
              Card
            </span>
          </label>
          <label className="cursor-pointer border-2 border-surface-variant hover:border-outline p-6 rounded-xl flex flex-col items-center gap-3 transition-all">
            <input className="hidden" name="payment_method" type="radio" />
            <span className="material-symbols-outlined text-on-surface-variant text-3xl">
              account_balance_wallet
            </span>
            <span className="font-label-bold text-label-bold text-on-surface-variant">
              Apple Pay
            </span>
          </label>
        </div>
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="font-label-bold text-[12px] text-on-surface-variant uppercase tracking-widest ml-1">
              Cardholder Name
            </label>
            <input
              className="w-full bg-surface-container-low border-2 border-outline-variant rounded-lg px-4 py-3 font-body-md form-input-focus transition-all"
              placeholder="John D. Artisan"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-bold text-[12px] text-on-surface-variant uppercase tracking-widest ml-1">
              Card Number
            </label>
            <div className="relative">
              <input
                className="w-full bg-surface-container-low border-2 border-outline-variant rounded-lg px-4 py-3 font-body-md form-input-focus transition-all"
                placeholder="•••• •••• •••• ••••"
                type="text"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                <span className="material-symbols-outlined text-outline-variant">
                  credit_card
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-[12px] text-on-surface-variant uppercase tracking-widest ml-1">
                Expiry Date
              </label>
              <input
                className="w-full bg-surface-container-low border-2 border-outline-variant rounded-lg px-4 py-3 font-body-md form-input-focus transition-all"
                placeholder="MM / YY"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-[12px] text-on-surface-variant uppercase tracking-widest ml-1">
                CVV
              </label>
              <input
                className="w-full bg-surface-container-low border-2 border-outline-variant rounded-lg px-4 py-3 font-body-md form-input-focus transition-all"
                placeholder="•••"
                type="text"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-6 border-t border-surface-variant">
        <h3 className="font-title-sm text-title-sm text-on-surface mb-6">
          Billing Address
        </h3>
        <div className="space-y-4">
          <label className="flex items-center gap-4 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input
                checked
                className="peer appearance-none w-6 h-6 border-2 border-outline-variant rounded bg-surface-container-low checked:bg-primary checked:border-primary transition-all"
                type="checkbox"
              />
              <span className="material-symbols-outlined material-symbols-filled absolute text-white opacity-0 peer-checked:opacity-100 text-sm pointer-events-none">
                check
              </span>
            </div>
            <span className="font-body-md text-on-surface">
              Same as delivery address
            </span>
          </label>
          <p className="text-[14px] text-on-surface-variant ml-10">
            42 Baker Street, London, W1U 8ED, United Kingdom
          </p>
        </div>
      </section>
      <div className="flex flex-col md:flex-row gap-4 pt-6">
        <button className="flex-1 px-8 py-4 bg-primary-container text-on-primary-container font-label-bold text-label-bold rounded-lg shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"></button>
        <button
          onClick={() => setSteps(steps - 1)}
          className="px-8 py-4 border-2 border-primary text-primary font-label-bold text-label-bold rounded-lg hover:bg-primary/5 active:scale-[0.98] transition-all"
        >
          BACK TO Review
        </button>
      </div>
    </div>
  );
}
