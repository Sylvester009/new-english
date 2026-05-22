import {useCartStore} from '@/store/cart-store';

export default function Review({
  steps,
  setSteps,
}: {
  steps: number;
  setSteps: any;
}) {
  const items = useCartStore(state => state.items);

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
            className="text-[#974400] text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] hover:underline transition-all"
            onClick={() => setSteps(2)}
          >
            Edit
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <p className="text-[#564338] text-xs uppercase tracking-[0.1em] font-bold font-['Plus_Jakarta_Sans'] mb-2">
              Shipping Address
            </p>
            <p className="font-['Plus_Jakarta_Sans'] text-base leading-[1.5] text-[#1f1b12]">
              Elizabeth Thorne
              <br />
              42 Cotswold Lane
              <br />
              Oxford, OX1 4BQ
              <br />
              United Kingdom
            </p>
          </div>
          <div>
            <p className="text-[#564338] text-xs uppercase tracking-[0.1em] font-bold font-['Plus_Jakarta_Sans'] mb-2">
              Method
            </p>
            <p className="font-['Plus_Jakarta_Sans'] text-base leading-[1.5] text-[#1f1b12] flex flex-col">
              <span className="font-bold">Express Bakery</span>
              <span className="text-[#564338]">
                Arrives tomorrow before 10 AM
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
                    src={item.image}
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
          onClick={() => setSteps(steps + 1)}
          className="flex-1 px-8 py-4 bg-[#bb5808] text-[#fffbff] text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
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
          onClick={() => setSteps(steps - 1)}
          className="px-8 py-4 border-2 border-[#974400] text-[#974400] text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] rounded-xl hover:bg-[#974400]/5 active:scale-[0.98] transition-all"
        >
          BACK TO DELIVERY
        </button>
      </div>
    </div>
  );
}
