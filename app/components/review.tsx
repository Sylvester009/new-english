import {useCartStore} from '@/store/cart-store';
import {useCheckoutStore} from '@/store/checkout-store';

export default function Review() {
  const nextStep = useCheckoutStore(state => state.nextStep);
  const prevStep = useCheckoutStore(state => state.prevStep);

  const items = useCartStore(state => state.items);

  const deliveryMethod = useCheckoutStore(state => state.deliveryMethod);

  const deliveryInfo = useCheckoutStore(state => state.deliveryInfo);

  const isValid =
    deliveryMethod === 'pickup'
      ? true
      : deliveryInfo.address && deliveryInfo.city && deliveryInfo.postcode;

  return (
    <div className="flex-1">
      <h1 className="font-['Noto_Serif'] text-[48px] leading-[1.2] tracking-[-0.02em] font-bold text-[#1f1b12] mb-12">
        Review Your Order
      </h1>

      {/* Delivery Details Section */}
      <section className="mb-12 bg-[#fcf2e3] p-6 sm:p-8 rounded-xl border border-[#ddc1b3]/30 shadow-[0_12px_32px_-4px_rgba(121,89,0,0.08)]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-['Noto_Serif'] text-xl leading-[1.4] font-semibold text-[#1f1b12] flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[#974400]"
              data-icon="local_shipping"
            >
              local_shipping
            </span>
            Delivery Details
          </h2>
          <button
            className="text-[#974400] text-sm leading-[1.2] tracking-wider font-bold font-['Plus_Jakarta_Sans'] hover:underline transition-all"
            onClick={prevStep}
          >
            Edit
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {deliveryMethod === 'delivery' ? (
            <div>
              <p className="text-[#564338] text-xs uppercase tracking-widest font-bold mb-2">
                Shipping Address
              </p>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-normal text-[#1f1b12]">
                {deliveryInfo.firstName} {deliveryInfo.lastName}
                <br />
                {deliveryInfo.address}
                <br />
                {deliveryInfo.city}, {deliveryInfo.postcode}
              </p>
            </div>
          ) : (
            <div>
              <p className="text-[#564338] text-xs uppercase tracking-widest font-bold mb-2">
                Pickup Location
              </p>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-normal text-[#1f1b12]">
                Store Pickup Selected
                <br />
                Ready for collection at nearest branch
              </p>
            </div>
          )}
          <div>
            <p className="font-['Plus_Jakarta_Sans'] text-base leading-normal text-[#1f1b12] flex flex-col">
              <span className="font-bold">
                {deliveryMethod === 'delivery'
                  ? 'Home Delivery'
                  : 'Store Pickup'}
              </span>

              <span className="text-[#564338]">
                {deliveryMethod === 'delivery'
                  ? 'Arrives in 3–5 business days'
                  : 'Ready for pickup in store'}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Order Items Section */}
      {/* Order Items Section */}
      <section className="space-y-6">
        <h2 className="font-['Noto_Serif'] text-xl leading-[1.4] font-semibold text-[#1f1b12] mb-6">
          Your Selection
        </h2>

        <div className="grid gap-4">
          {items.length === 0 ? (
            <div className="text-sm text-[#8a7266] text-center py-8">
              No items in cart
            </div>
          ) : (
            items.map(item => (
              <div
                key={item.id}
                className="flex items-center gap-4 sm:gap-6 p-4 sm:p-5 bg-[#ffffff] rounded-xl border border-[#ddc1b3]/20 hover:border-[#974400]/30 transition-all group shadow-sm hover:shadow-md"
              >
                {/* Image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-[#ebe1d3]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={item.image_url}
                    alt={item.name}
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-['Noto_Serif'] text-lg leading-[1.4] font-semibold text-[#1f1b12] truncate">
                    {item.name}
                  </h3>

                  <p className="text-[#564338] text-sm mt-1">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-[#1f1b12] font-medium text-sm bg-[#fcf2e3] px-3 py-1 rounded-full">
                      Qty: {item.quantity}
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="text-right shrink-0">
                  <p className="font-['Noto_Serif'] text-lg leading-[1.4] font-semibold text-[#1f1b12]">
                    #{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Navigation Buttons */}
      <div className="flex flex-col md:flex-row gap-4 pt-8">
        <button
          onClick={nextStep}
          disabled={!isValid}
          className="flex-1 px-8 py-4 bg-[#bb5808] text-[#fffbff] text-sm leading-[1.2] tracking-wider font-bold font-['Plus_Jakarta_Sans'] rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          CONTINUE TO PAYMENT
          <span
            className="material-symbols-outlined text-sm"
            data-icon="arrow_forward"
          >
            arrow_forward
          </span>
        </button>
        <button
          onClick={prevStep}
          className="px-8 py-4 border-2 border-[#974400] text-[#974400] text-sm leading-[1.2] tracking-wider font-bold font-['Plus_Jakarta_Sans'] rounded-xl hover:bg-[#974400]/5 active:scale-[0.98] transition-all"
        >
          BACK TO DELIVERY
        </button>
      </div>
    </div>
  );
}
