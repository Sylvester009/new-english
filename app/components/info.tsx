import {useCartStore} from '@/store/cart-store';
import {useCheckoutStore} from '@/store/checkout-store';
import {useRouter} from 'next/navigation';

export default function Info() {
  const router = useRouter();

  const {items, increaseQuantity, decreaseQuantity, removeFromCart} =
    useCartStore();
  const nextStep = useCheckoutStore(state => state.nextStep);

  return (
    <div className="lg:col-span-7 space-y-10">
      <header className="mb-6 md:mb-8">
        <h1 className="font-['Noto_Serif'] text-[48px] leading-[1.2] tracking-[-0.02em] font-bold text-[#974400]">
          Your Basket
        </h1>
        <p className="text-[#795900] font-['Plus_Jakarta_Sans'] text-base leading-normal mt-2">
          Carefully selected items ready for your table.
        </p>
      </header>
      <div className="grid grid-cols-1 w-full gap-6 lg:gap-8 items-start">
        {/* Cart Items Section */}
        <div className="lg:col-span-8 space-y-4 md:space-y-5">
          {items.length === 0 ? (
            <div className="text-center text-sm text-[#8a7266] py-10">
              Your cart is empty
            </div>
          ) : (
            items.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-[0_4px_20px_rgba(74,63,53,0.04)] p-5 md:p-6 flex flex-col sm:flex-row gap-5 items-center border border-[#f6edde] transition-all hover:shadow-[0_8px_30px_rgba(74,63,53,0.08)]"
              >
                {/* Image */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 border border-[#fcf2e3]">
                  <img
                    alt={item.name}
                    className="w-full h-full object-cover"
                    src={item.image_url}
                  />
                </div>

                {/* Info */}
                <div className="grow space-y-2 text-center sm:text-left">
                  <h3 className="font-['Noto_Serif'] text-[32px] leading-[1.3] font-semibold text-[#974400]">
                    {item.name}
                  </h3>

                  <p className="text-[#8a7266] font-['Plus_Jakarta_Sans'] text-base leading-normal">
                    {item.description}
                  </p>
                </div>

                {/* Right side */}
                <div className="flex flex-col items-center sm:items-end gap-3 min-w-[120px]">
                  <span className="font-['Noto_Serif'] text-[32px] leading-[1.3] font-semibold text-[#974400]">
                    #{item.price.toFixed(2)}
                  </span>

                  {/* Quantity controls */}
                  <div className="flex items-center bg-[#fff8f1] rounded-full border border-[#ddc1b3] px-2 py-1.5">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="p-1.5 hover:text-[#974400] transition-colors cursor-pointer rounded-full hover:bg-[#fcf2e3]/50"
                    >
                      <span className="material-symbols-outlined text-sm">
                        remove
                      </span>
                    </button>

                    <span className="px-3 font-bold text-[#974400] min-w-[32px] text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="p-1.5 hover:text-[#974400] transition-colors cursor-pointer rounded-full hover:bg-[#fcf2e3]/50"
                    >
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-[#ba1a1a] text-sm font-medium flex items-center gap-1.5 hover:opacity-70 transition-opacity py-1"
                  >
                    <span className="material-symbols-outlined text-sm">
                      delete
                    </span>
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4 pt-8">
        <button
          onClick={nextStep}
          disabled={items.length === 0}
          className={`flex-1 px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
            items.length === 0
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-[#bb5808] text-[#fffbff] hover:brightness-110 active:scale-[0.98]'
          }`}
        >
          CONTINUE TO DELIVERY
          <span
            className="material-symbols-outlined text-sm"
            data-icon="arrow_forward"
          >
            arrow_forward
          </span>
        </button>
        <button
          onClick={() => {
            router.push('/store');
          }}
          className="px-8 py-4 border-2 border-[#974400] text-[#974400] text-sm leading-[1.2] tracking-wider font-bold font-['Plus_Jakarta_Sans'] rounded-xl hover:bg-[#974400]/5 active:scale-[0.98] transition-all"
        >
          BACK TO SHOPPING
        </button>
      </div>
    </div>
  );
}
