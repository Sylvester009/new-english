import {useCheckoutStore} from '@/store/checkout-store';

export default function Delivery() {
  const nextStep = useCheckoutStore(state => state.nextStep);
  const prevStep = useCheckoutStore(state => state.prevStep);

  const deliveryMethod = useCheckoutStore(state => state.deliveryMethod);

  const setDeliveryMethod = useCheckoutStore(state => state.setDeliveryMethod);

  const deliveryInfo = useCheckoutStore(state => state.deliveryInfo);

  const updateDeliveryInfo = useCheckoutStore(
    state => state.updateDeliveryInfo,
  );

  const isValid =
    deliveryMethod === 'pickup'
      ? deliveryInfo.firstName && deliveryInfo.lastName && deliveryInfo.phone
      : deliveryInfo.firstName &&
        deliveryInfo.lastName &&
        deliveryInfo.phone &&
        deliveryInfo.address &&
        deliveryInfo.city &&
        deliveryInfo.postcode;

  return (
    <div className="lg:col-span-7 space-y-10">
      {/* Delivery Address Section */}
      <section>
        <h1 className="font-['Noto_Serif'] text-[32px] leading-[1.3] font-semibold text-[#1f1b12] mb-8 italic">
          Delivery Details
        </h1>
        <div className="space-y-5">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338]">
                FIRST NAME
              </label>
              <input
                className="bg-white border-2 border-[#ddc1b3] rounded-xl p-3.5 focus:outline-none focus:border-[#fcc340] focus:ring-4 focus:ring-[#fcc340]/10 transition-all font-['Plus_Jakarta_Sans'] text-base leading-[1.5] placeholder:text-[#8a7266]/50"
                type="text"
                name="firstName"
                value={deliveryInfo.firstName}
                onChange={e =>
                  updateDeliveryInfo({
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338]">
                LAST NAME
              </label>
              <input
                className="bg-white border-2 border-[#ddc1b3] rounded-xl p-3.5 focus:outline-none focus:border-[#fcc340] focus:ring-4 focus:ring-[#fcc340]/10 transition-all font-['Plus_Jakarta_Sans'] text-base leading-[1.5] placeholder:text-[#8a7266]/50"
                type="text"
                name="lastName"
                value={deliveryInfo.lastName}
                onChange={e =>
                  updateDeliveryInfo({
                    lastName: e.target.value,
                  })
                }
              />
            </div>
          </div>

          {/* Street Address */}
          {deliveryMethod === 'delivery' && (
            <div className="flex flex-col gap-2">
              <label className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338]">
                STREET ADDRESS
              </label>
              <input
                className="bg-white border-2 border-[#ddc1b3] rounded-xl p-3.5 focus:outline-none focus:border-[#fcc340] focus:ring-4 focus:ring-[#fcc340]/10 transition-all font-['Plus_Jakarta_Sans'] text-base leading-[1.5] placeholder:text-[#8a7266]/50"
                placeholder="123 Artisan Lane"
                type="text"
                name="address"
                value={deliveryInfo.address}
                onChange={e =>
                  updateDeliveryInfo({
                    address: e.target.value,
                  })
                }
              />
            </div>
          )}

          {/* City, Postcode, Phone */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338]">
                CITY
              </label>
              <input
                className="bg-white border-2 border-[#ddc1b3] rounded-xl p-3.5 focus:outline-none focus:border-[#fcc340] focus:ring-4 focus:ring-[#fcc340]/10 transition-all font-['Plus_Jakarta_Sans'] text-base leading-[1.5] placeholder:text-[#8a7266]/50"
                placeholder="London"
                type="text"
                name="city"
                value={deliveryInfo.city}
                onChange={e =>
                  updateDeliveryInfo({
                    city: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338]">
                POSTCODE
              </label>
              <input
                className="bg-white border-2 border-[#ddc1b3] rounded-xl p-3.5 focus:outline-none focus:border-[#fcc340] focus:ring-4 focus:ring-[#fcc340]/10 transition-all font-['Plus_Jakarta_Sans'] text-base leading-[1.5] placeholder:text-[#8a7266]/50"
                placeholder="W1U 3EG"
                type="text"
                name="postcode"
                value={deliveryInfo.postcode}
                onChange={e =>
                  updateDeliveryInfo({
                    postcode: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#564338]">
                PHONE
              </label>
              <input
                className="bg-white border-2 border-[#ddc1b3] rounded-xl p-3.5 focus:outline-none focus:border-[#fcc340] focus:ring-4 focus:ring-[#fcc340]/10 transition-all font-['Plus_Jakarta_Sans'] text-base leading-[1.5] placeholder:text-[#8a7266]/50"
                placeholder="+44 20 7946 0958"
                type="tel"
                name="phone"
                value={deliveryInfo.phone}
                onChange={e =>
                  updateDeliveryInfo({
                    phone: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Method Section */}
      <section>
        <h2 className="font-['Noto_Serif'] text-xl leading-[1.4] font-semibold text-[#1f1b12] mb-6">
          Choose Delivery Method
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Standard Pickup */}
          <div
            onClick={() => setDeliveryMethod('pickup')}
            className={
              deliveryMethod === 'pickup'
                ? 'relative group p-5 rounded-xl bg-[#fcf2e3] border-2 border-[#fcc340] flex items-start gap-4 shadow-md'
                : 'relative group cursor-pointer p-5 rounded-xl bg-white border-2 border-[#ddc1b3] hover:border-[#fcc340] transition-all flex items-start gap-4 shadow-sm hover:shadow-md'
            }
          >
            <div className="mt-0.5">
              <span
                className="material-symbols-outlined text-[#974400] material-symbols-filled"
                data-icon="radio_button_checked"
                data-weight="fill"
              >
                radio_button_checked
              </span>
            </div>
            <div className="flex-1">
              <div className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#1f1b12]">
                STANDARD PICKUP
              </div>
              <div className="text-[#564338] text-sm mt-1.5">
                3-5 Business Days. Perfect for pantry staples.
              </div>
              <div className="text-[#974400] font-bold mt-2">Free</div>
            </div>
          </div>

          {/* Express Bakery Delivery */}
          <div
            onClick={() => setDeliveryMethod('delivery')}
            className={
              deliveryMethod === 'delivery'
                ? 'relative group p-5 rounded-xl bg-[#fcf2e3] border-2 border-[#fcc340] flex items-start gap-4 shadow-md'
                : 'relative group cursor-pointer p-5 rounded-xl bg-white border-2 border-[#ddc1b3] hover:border-[#fcc340] transition-all flex items-start gap-4 shadow-sm hover:shadow-md'
            }
          >
            <div className="mt-0.5">
              <span
                className="material-symbols-outlined text-[#795900] material-symbols-filled"
                data-icon="speed"
                data-weight="fill"
              >
                speed
              </span>
            </div>
            <div className="flex-1">
              <div className="text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#1f1b12] flex items-center gap-2 flex-wrap">
                EXPRESS BAKERY
                <span className="px-2.5 py-0.5 bg-[#b15878]/20 text-[#93405f] text-[10px] font-bold rounded-full tracking-wider">
                  POPULAR
                </span>
              </div>
              <div className="text-[#564338] text-sm mt-1.5">
                Next Day Morning. Guaranteed freshness for breads.
              </div>
              <div className="text-[#974400] font-bold mt-2">#895</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <div className="flex flex-col md:flex-row gap-4 pt-6">
        <button
          onClick={nextStep}
          disabled={!isValid}
          className="flex-1 px-8 py-4 bg-[#bb5808] text-[#fffbff] text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          CONTINUE TO REVIEW
          <span
            className="material-symbols-outlined text-sm"
            data-icon="arrow_forward"
          >
            arrow_forward
          </span>
        </button>
        <button
          onClick={prevStep}
          className="px-8 py-4 border-2 border-[#974400] text-[#974400] text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] rounded-xl hover:bg-[#974400]/5 active:scale-[0.98] transition-all"
        >
          BACK TO INFO
        </button>
      </div>
    </div>
  );
}
