export default function Info({
  steps,
  setSteps,
}: {
  steps: number;
  setSteps: any;
}) {
  return (
    <div className="lg:col-span-7 space-y-10">
      <header className="mb-6 md:mb-8">
        <h1 className="font-['Noto_Serif'] text-[48px] leading-[1.2] tracking-[-0.02em] font-bold text-[#974400]">
          Your Basket
        </h1>
        <p className="text-[#795900] font-['Plus_Jakarta_Sans'] text-base leading-[1.5] mt-2">
          Carefully selected items ready for your table.
        </p>
      </header>
      <div className="grid grid-cols-1 w-full gap-6 lg:gap-8 items-start">
        {/* Cart Items Section */}
        <div className="lg:col-span-8 space-y-4 md:space-y-5">
          {/* Cart Item 1 - Sourdough */}
          <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(74,63,53,0.04)] p-5 md:p-6 flex flex-col sm:flex-row gap-5 items-center border border-[#f6edde] transition-all hover:shadow-[0_8px_30px_rgba(74,63,53,0.08)]">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 border border-[#fcf2e3]">
              <img
                alt="Artisan Sourdough"
                className="w-full h-full object-cover"
                data-alt="Close-up of a rustic, freshly baked artisan sourdough loaf with flour dusting and golden crust on a wooden surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRUKZVbCxXkhmWdE78uLE86qQ-PxVPJVOsCG77FLh4sUcrhHMLeUy5TxzjUFSAVvzcytzngZBekLuXOOw7a_3gFkecEHkB2WOdSSlhRNQf8unf-mZkhLbSyi41kXOMAynbrjkpnqWHqac-g8wCCM5e49_5IIxKZODkkI-Q2uaDD6wJ9Rj_XuQReO5RAAvz_syi24ZgW-0IN-kkvl9Ae_ShxXUfPDUNAKdk_vttzsHWAcviEVR4X1u7ty_h79ZaLOwh2SwmzzBgn2k"
              />
            </div>
            <div className="grow space-y-2 text-center sm:text-left">
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="bg-[#ffdea0]/20 text-[#5c4300] px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-[0.2em]">
                  Freshly Baked
                </span>
              </div>
              <h3 className="font-['Noto_Serif'] text-[32px] leading-[1.3] font-semibold text-[#974400]">
                Signature Sourdough Loaf
              </h3>
              <p className="text-[#8a7266] font-['Plus_Jakarta_Sans'] text-base leading-[1.5]">
                Hand-kneaded, 24-hour slow ferment.
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-end gap-3 min-w-[120px]">
              <span className="font-['Noto_Serif'] text-[32px] leading-[1.3] font-semibold text-[#974400]">
                $8.50
              </span>
              <div className="flex items-center bg-[#fff8f1] rounded-full border border-[#ddc1b3] px-2 py-1.5">
                <button className="p-1.5 hover:text-[#974400] transition-colors cursor-pointer rounded-full hover:bg-[#fcf2e3]/50">
                  <span className="material-symbols-outlined text-sm">
                    remove
                  </span>
                </button>
                <span className="px-3 font-bold text-[#974400] min-w-[32px] text-center">
                  1
                </span>
                <button className="p-1.5 hover:text-[#974400] transition-colors cursor-pointer rounded-full hover:bg-[#fcf2e3]/50">
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
              <button className="text-[#ba1a1a] text-sm font-medium flex items-center gap-1.5 hover:opacity-70 transition-opacity py-1">
                <span className="material-symbols-outlined text-sm">
                  delete
                </span>
                Remove
              </button>
            </div>
          </div>

          {/* Cart Item 2 - Butter */}
          <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(74,63,53,0.04)] p-5 md:p-6 flex flex-col sm:flex-row gap-5 items-center border border-[#f6edde] transition-all hover:shadow-[0_8px_30px_rgba(74,63,53,0.08)]">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 border border-[#fcf2e3]">
              <img
                alt="Grass-fed Butter"
                className="w-full h-full object-cover"
                data-alt="Top view of hand-wrapped artisan yellow butter on a marble slab with a small sprig of herbs"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyPQCXMaqiwR2GVM2sngv6IthzoQsiiKDYcnxyv7epVO5cLzFfmTuiSQnxfMAOuTHX3vllMvaCJ0SS-Ne5izrluyFJdI3ub7WxbMSOXZlum5Df4fyA4vpsqCvVmj71ifDDgWAbhb9yUH_FGJE4PqSFHy7TxcMjmgX1vZ7gzwF3n7yDC7vhfQQSAkE_CuhFJ4Lj5pegeC8WXZh5yd0KlnxYR087eogDZJSPKol8wspWhm0loCvDBdXnGoXj_83j249s_9yTd-wjcvA"
              />
            </div>
            <div className="grow space-y-2 text-center sm:text-left">
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="bg-[#ffdea0]/20 text-[#5c4300] px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-[0.2em]">
                  Organic
                </span>
              </div>
              <h3 className="font-['Noto_Serif'] text-[32px] leading-[1.3] font-semibold text-[#974400]">
                Cultured Highland Butter
              </h3>
              <p className="text-[#8a7266] font-['Plus_Jakarta_Sans'] text-base leading-[1.5]">
                Sea salt, grass-fed cream from local farms.
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-end gap-3 min-w-[120px]">
              <span className="font-['Noto_Serif'] text-[32px] leading-[1.3] font-semibold text-[#974400]">
                $12.00
              </span>
              <div className="flex items-center bg-[#fff8f1] rounded-full border border-[#ddc1b3] px-2 py-1.5">
                <button className="p-1.5 hover:text-[#974400] transition-colors cursor-pointer rounded-full hover:bg-[#fcf2e3]/50">
                  <span className="material-symbols-outlined text-sm">
                    remove
                  </span>
                </button>
                <span className="px-3 font-bold text-[#974400] min-w-[32px] text-center">
                  2
                </span>
                <button className="p-1.5 hover:text-[#974400] transition-colors cursor-pointer rounded-full hover:bg-[#fcf2e3]/50">
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
              <button className="text-[#ba1a1a] text-sm font-medium flex items-center gap-1.5 hover:opacity-70 transition-opacity py-1">
                <span className="material-symbols-outlined text-sm">
                  delete
                </span>
                Remove
              </button>
            </div>
          </div>

          {/* Cart Item 3 - Tomatoes */}
          <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(74,63,53,0.04)] p-5 md:p-6 flex flex-col sm:flex-row gap-5 items-center border border-[#f6edde] transition-all hover:shadow-[0_8px_30px_rgba(74,63,53,0.08)]">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 border border-[#fcf2e3]">
              <img
                alt="Heirloom Tomatoes"
                className="w-full h-full object-cover"
                data-alt="A collection of vibrant red, yellow, and green heirloom tomatoes of various sizes in a wooden bowl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKGQ5j7dSn5TLkqSjy4Mq9tpufxG8RHsZWnricDKB8XZ2_1o01syZ9V1Nnx3L5kDH1X-ngq7WGRdjxGt7Ksrydd2uqXKRKwR2WlAjQZOvTCQukfRbAUT8xz-ojNNkM-Yj_Vv9ngdm2iBGcLAqeATyQ1zVLEWhBcLUuWcp7kcaEf5Pv3HqRTHYOrrteZjl_qOULXDNB8bpJFfveqXM4H_DBqzVyJVbC1fOP8IEapqJxh5Ap0wgR5ooTce2jc53jUMjo6ukW-IE9PgY"
              />
            </div>
            <div className="grow space-y-2 text-center sm:text-left">
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="bg-[#ffdea0]/20 text-[#5c4300] px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-[0.2em]">
                  Local Artisan
                </span>
              </div>
              <h3 className="font-['Noto_Serif'] text-[32px] leading-[1.3] font-semibold text-[#974400]">
                Heirloom Tomato Box
              </h3>
              <p className="text-[#8a7266] font-['Plus_Jakarta_Sans'] text-base leading-[1.5]">
                Hand-picked medley from heritage vines.
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-end gap-3 min-w-[120px]">
              <span className="font-['Noto_Serif'] text-[32px] leading-[1.3] font-semibold text-[#974400]">
                $18.00
              </span>
              <div className="flex items-center bg-[#fff8f1] rounded-full border border-[#ddc1b3] px-2 py-1.5">
                <button className="p-1.5 hover:text-[#974400] transition-colors cursor-pointer rounded-full hover:bg-[#fcf2e3]/50">
                  <span className="material-symbols-outlined text-sm">
                    remove
                  </span>
                </button>
                <span className="px-3 font-bold text-[#974400] min-w-[32px] text-center">
                  1
                </span>
                <button className="p-1.5 hover:text-[#974400] transition-colors cursor-pointer rounded-full hover:bg-[#fcf2e3]/50">
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
              <button className="text-[#ba1a1a] text-sm font-medium flex items-center gap-1.5 hover:opacity-70 transition-opacity py-1">
                <span className="material-symbols-outlined text-sm">
                  delete
                </span>
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4 pt-8">
        <button
          onClick={() => setSteps(steps + 1)}
          className="flex-1 px-8 py-4 bg-[#bb5808] text-[#fffbff] text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          CONTINUE TO DELIVERY
          <span
            className="material-symbols-outlined text-sm"
            data-icon="arrow_forward"
          >
            arrow_forward
          </span>
        </button>
        <button className="px-8 py-4 border-2 border-[#974400] text-[#974400] text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] rounded-xl hover:bg-[#974400]/5 active:scale-[0.98] transition-all">
          BACK TO SHOPPING
        </button>
      </div>
    </div>
  );
}
