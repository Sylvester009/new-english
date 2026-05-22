'use client';

import {useCartStore} from '@/store/cart-store';
import Image from 'next/image';

export default function CartItem() {
  const {items, increaseQuantity, decreaseQuantity, removeFromCart} =
    useCartStore();

  return (
    <div className="flex-1 overflow-y-auto px-8 py-4 space-y-4">
      {/* <!-- Item 1 --> */}

      {items.map(item => (
        <div key={item.id} className="flex gap-4 group pb-4">
          <div className="w-24 h-24 shrink-0 bg-[#fcf2e3] rounded-lg overflow-hidden border border-[#e2d9ca]">
            <Image
              src={item.image}
              alt={item.name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between pb-1">
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-[15px] font-semibold tracking-wide primary">
                  {item.name}
                </h3>
                <span className="label-md primary">#{item.price}</span>
              </div>
              <p className="body-md text-sm on-surface-variant py-1 pb-2">
                {item.description}
              </p>
            </div>
            <div className="flex items-center justify-between">
              {/* <!-- Quantity Picker --> */}
              <div className="flex items-center border border-outline-variant rounded-lg px-3 py-1 bg-[#ffffff]">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="on-surface-variant hover:text-terracotta transition-colors flex items-center"
                >
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="remove"
                  >
                    remove
                  </span>
                </button>
                <span className="px-4 label-md">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="on-surface-variant hover:text-terracotta transition-colors flex items-center"
                >
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="add"
                  >
                    add
                  </span>
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-outline hover:text-error transition-colors flex items-center gap-1"
              >
                <span
                  className="material-symbols-outlined text-lg"
                  data-icon="delete"
                >
                  delete
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
