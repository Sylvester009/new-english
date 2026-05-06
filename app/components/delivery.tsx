export default function Delivery({steps, setSteps}: {steps: number, setSteps: any}) {
  return (
    <div className="lg:col-span-7 space-y-10">
      <section>
        <h1 className="font-headline-md text-headline-md text-on-background mb-8 italic">
          Delivery Details
        </h1>
        <div className="space-y-6">
          {/* <!-- Address Grid --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-label-bold text-on-surface-variant">
                FIRST NAME
              </label>
              <input
                className="bg-white border-2 border-outline-variant rounded-lg p-3 focus:outline-none focus:border-secondary-container focus:ring-4 focus:ring-secondary-container/10 transition-all font-body-md"
                type="text"
                value="Julian"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-label-bold text-on-surface-variant">
                LAST NAME
              </label>
              <input
                className="bg-white border-2 border-outline-variant rounded-lg p-3 focus:outline-none focus:border-secondary-container focus:ring-4 focus:ring-secondary-container/10 transition-all font-body-md"
                type="text"
                value="Ainsley"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-bold text-label-bold text-on-surface-variant">
              STREET ADDRESS
            </label>
            <input
              className="bg-white border-2 border-outline-variant rounded-lg p-3 focus:outline-none focus:border-secondary-container focus:ring-4 focus:ring-secondary-container/10 transition-all font-body-md"
              placeholder="123 Artisan Lane"
              type="text"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-label-bold text-on-surface-variant">
                CITY
              </label>
              <input
                className="bg-white border-2 border-outline-variant rounded-lg p-3 focus:outline-none focus:border-secondary-container focus:ring-4 focus:ring-secondary-container/10 transition-all font-body-md"
                placeholder="London"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-label-bold text-on-surface-variant">
                POSTCODE
              </label>
              <input
                className="bg-white border-2 border-outline-variant rounded-lg p-3 focus:outline-none focus:border-secondary-container focus:ring-4 focus:ring-secondary-container/10 transition-all font-body-md"
                placeholder="W1U 3EG"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-label-bold text-on-surface-variant">
                PHONE
              </label>
              <input
                className="bg-white border-2 border-outline-variant rounded-lg p-3 focus:outline-none focus:border-secondary-container focus:ring-4 focus:ring-secondary-container/10 transition-all font-body-md"
                placeholder="+44 20 7946 0958"
                type="tel"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="font-title-sm text-title-sm text-on-background mb-6">
          Choose Delivery Method
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <!-- Standard Delivery --> */}
          <div className="relative group cursor-pointer p-5 rounded-xl bg-white border-2 border-outline-variant hover:border-secondary-container transition-all flex items-start gap-4 shadow-sm">
            <div className="mt-1">
              <span
                className="material-symbols-outlined text-primary"
                data-icon="radio_button_checked"
                data-weight="fill"
              >
                radio_button_checked
              </span>
            </div>
            <div>
              <div className="font-label-bold text-label-bold">
                STANDARD DELIVERY
              </div>
              <div className="text-on-surface-variant text-sm mt-1">
                3-5 Business Days. Perfect for pantry staples.
              </div>
              <div className="text-primary font-bold mt-2">£4.50</div>
            </div>
          </div>
          {/* <!-- Express Bakery Delivery --> */}
          <div className="relative group cursor-pointer p-5 rounded-xl bg-surface-container-low border-2 border-secondary-container flex items-start gap-4 shadow-md">
            <div className="mt-1">
              <span
                className="material-symbols-outlined text-secondary material-symbols-filled"
                data-icon="speed"
                data-weight="fill"
              >
                speed
              </span>
            </div>
            <div>
              <div className="font-label-bold text-label-bold flex items-center gap-2">
                EXPRESS BAKERY
                <span className="px-2 py-0.5 bg-tertiary-container/20 text-tertiary text-[10px] rounded-full">
                  POPULAR
                </span>
              </div>
              <div className="text-on-surface-variant text-sm mt-1">
                Next Day Morning. Guaranteed freshness for breads.
              </div>
              <div className="text-primary font-bold mt-2">£8.95</div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col md:flex-row gap-4 pt-6">
        <button onClick={() => setSteps(steps + 1)} className="flex-1 px-8 py-4 bg-primary-container text-on-primary-container font-label-bold text-label-bold rounded-lg shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
          CONTINUE TO REVIEW
          <span
            className="material-symbols-outlined text-sm"
            data-icon="arrow_forward"
          >
            arrow_forward
          </span>
        </button>
        <button onClick={() => setSteps(steps - 1)} className="px-8 py-4 border-2 border-primary text-primary font-label-bold text-label-bold rounded-lg hover:bg-primary/5 active:scale-[0.98] transition-all">
          BACK TO INFO
        </button>
      </div>
    </div>
  );
}
