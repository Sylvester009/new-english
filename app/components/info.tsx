export default function Info({steps, setSteps}: {steps: number, setSteps: any}) {
  return (
    <>
      <header className="mb-stack-md">
        <h1 className="font-display-lg text-display-lg text-primary">
          Your Basket
        </h1>
        <p className="text-secondary font-body-md mt-2">
          Carefully selected items ready for your table.
        </p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* <!-- Cart Items Section --> */}
        <div className="lg:col-span-8 space-y-stack-sm">
          {/* <!-- Cart Item 1 --> */}
          <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(74,63,53,0.04)] p-stack-sm flex flex-col sm:flex-row gap-6 items-center border border-surface-container transition-all hover:shadow-[0_8px_30px_rgba(74,63,53,0.08)]">
            <div className="w-32 h-32 rounded-lg overflow-hidden shrink-0 border border-surface-container-low">
              <img
                alt="Artisan Sourdough"
                className="w-full h-full object-cover"
                data-alt="Close-up of a rustic, freshly baked artisan sourdough loaf with flour dusting and golden crust on a wooden surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRUKZVbCxXkhmWdE78uLE86qQ-PxVPJVOsCG77FLh4sUcrhHMLeUy5TxzjUFSAVvzcytzngZBekLuXOOw7a_3gFkecEHkB2WOdSSlhRNQf8unf-mZkhLbSyi41kXOMAynbrjkpnqWHqac-g8wCCM5e49_5IIxKZODkkI-Q2uaDD6wJ9Rj_XuQReO5RAAvz_syi24ZgW-0IN-kkvl9Ae_ShxXUfPDUNAKdk_vttzsHWAcviEVR4X1u7ty_h79ZaLOwh2SwmzzBgn2k"
              />
            </div>
            <div className="grow space-y-2 text-center sm:text-left">
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="bg-secondary-fixed/20 text-on-secondary-fixed-variant px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest">
                  Freshly Baked
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary">
                Signature Sourdough Loaf
              </h3>
              <p className="text-outline font-body-md">
                Hand-kneaded, 24-hour slow ferment.
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-end gap-4 min-w-[120px]">
              <span className="font-display-lg text-headline-md text-primary">
                $8.50
              </span>
              <div className="flex items-center bg-background rounded-full border border-outline-variant px-2 py-1">
                <button className="p-1 hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-sm">
                    remove
                  </span>
                </button>
                <span className="px-4 font-bold text-primary">1</span>
                <button className="p-1 hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
              <button className="text-error font-label-md flex items-center gap-1 hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined text-sm">
                  delete
                </span>{' '}
                Remove
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(74,63,53,0.04)] p-stack-sm flex flex-col sm:flex-row gap-6 items-center border border-surface-container transition-all hover:shadow-[0_8px_30px_rgba(74,63,53,0.08)]">
            <div className="w-32 h-32 rounded-lg overflow-hidden shrink-0 border border-surface-container-low">
              <img
                alt="Grass-fed Butter"
                className="w-full h-full object-cover"
                data-alt="Top view of hand-wrapped artisan yellow butter on a marble slab with a small sprig of herbs"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyPQCXMaqiwR2GVM2sngv6IthzoQsiiKDYcnxyv7epVO5cLzFfmTuiSQnxfMAOuTHX3vllMvaCJ0SS-Ne5izrluyFJdI3ub7WxbMSOXZlum5Df4fyA4vpsqCvVmj71ifDDgWAbhb9yUH_FGJE4PqSFHy7TxcMjmgX1vZ7gzwF3n7yDC7vhfQQSAkE_CuhFJ4Lj5pegeC8WXZh5yd0KlnxYR087eogDZJSPKol8wspWhm0loCvDBdXnGoXj_83j249s_9yTd-wjcvA"
              />
            </div>
            <div className="grow space-y-2 text-center sm:text-left">
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="bg-secondary-fixed/20 text-on-secondary-fixed-variant px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest">
                  Organic
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary">
                Cultured Highland Butter
              </h3>
              <p className="text-outline font-body-md">
                Sea salt, grass-fed cream from local farms.
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-end gap-4 min-w-[120px]">
              <span className="font-display-lg text-headline-md text-primary">
                $12.00
              </span>
              <div className="flex items-center bg-background rounded-full border border-outline-variant px-2 py-1">
                <button className="p-1 hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-sm">
                    remove
                  </span>
                </button>
                <span className="px-4 font-bold text-primary">2</span>
                <button className="p-1 hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
              <button className="text-error font-label-md flex items-center gap-1 hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined text-sm">
                  delete
                </span>{' '}
                Remove
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(74,63,53,0.04)] p-stack-sm flex flex-col sm:flex-row gap-6 items-center border border-surface-container transition-all hover:shadow-[0_8px_30px_rgba(74,63,53,0.08)]">
            <div className="w-32 h-32 rounded-lg overflow-hidden shrink-0 border border-surface-container-low">
              <img
                alt="Heirloom Tomatoes"
                className="w-full h-full object-cover"
                data-alt="A collection of vibrant red, yellow, and green heirloom tomatoes of various sizes in a wooden bowl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKGQ5j7dSn5TLkqSjy4Mq9tpufxG8RHsZWnricDKB8XZ2_1o01syZ9V1Nnx3L5kDH1X-ngq7WGRdjxGt7Ksrydd2uqXKRKwR2WlAjQZOvTCQukfRbAUT8xz-ojNNkM-Yj_Vv9ngdm2iBGcLAqeATyQ1zVLEWhBcLUuWcp7kcaEf5Pv3HqRTHYOrrteZjl_qOULXDNB8bpJFfveqXM4H_DBqzVyJVbC1fOP8IEapqJxh5Ap0wgR5ooTce2jc53jUMjo6ukW-IE9PgY"
              />
            </div>
            <div className="grow space-y-2 text-center sm:text-left">
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="bg-secondary-fixed/20 text-on-secondary-fixed-variant px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest">
                  Local Artisan
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary">
                Heirloom Tomato Box
              </h3>
              <p className="text-outline font-body-md">
                Hand-picked medley from heritage vines.
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-end gap-4 min-w-[120px]">
              <span className="font-display-lg text-headline-md text-primary">
                $18.00
              </span>
              <div className="flex items-center bg-background rounded-full border border-outline-variant px-2 py-1">
                <button className="p-1 hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-sm">
                    remove
                  </span>
                </button>
                <span className="px-4 font-bold text-primary">1</span>
                <button className="p-1 hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
              <button className="text-error font-label-md flex items-center gap-1 hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined text-sm">
                  delete
                </span>{' '}
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 pt-6">
        <button onClick={() => setSteps(steps + 1)} className="flex-1 px-8 py-4 bg-primary-container text-on-primary-container font-label-bold text-label-bold rounded-lg shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
          CONTINUE TO DELIVERY
          <span
            className="material-symbols-outlined text-sm"
            data-icon="arrow_forward"
          >
            arrow_forward
          </span>
        </button>
        <button className="px-8 py-4 border-2 border-primary text-primary font-label-bold text-label-bold rounded-lg hover:bg-primary/5 active:scale-[0.98] transition-all">
          
        </button>
      </div>
    </>
  );
}
