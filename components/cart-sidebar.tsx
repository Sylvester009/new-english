'use client';

import Link from 'next/link';

export function CartSidebar({open, onClose}: {open: boolean; onClose: any}) {
  return (
    <>
      <div
        className={`
        fixed inset-y-0 right-0 z-50 w-full max-w-md
        bg-[#fff8f1] shadow-2xl flex flex-col
        transform transition-transform duration-500 ease-in-out
        ${open ? 'translate-x-0' : 'translate-x-full'}
      `}
      >
        {' '}
        {/* <!-- Cart Header --> */}
        <div className="px-8 py-6 border-b border-surface-dim flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="material-symbols-outlined terracotta"
              data-icon="shopping_bag"
            >
              shopping_bag
            </span>
            <h2 className="headline-md primary">Your Cart</h2>
            <span className="bg-surface-container-highest on-surface px-2 py-0.5 rounded-full label-md">
              3 Items
            </span>
          </div>
          <button
            className="p-2 hover:bg-surface-container-low rounded-full transition-colors"
            onClick={onClose}
          >
            <span
              className="material-symbols-outlined on-surface-variant"
              data-icon="close"
            >
              close
            </span>
          </button>
        </div>
        {/* <!-- Cart Items List --> */}
        <div className="flex-1 overflow-y-auto px-8 py-4 space-y-4">
          {/* <!-- Item 1 --> */}
          <div className="flex gap-4 group">
            <div className="w-24 h-24 shrink-0 bg-surface-container-low rounded-lg overflow-hidden border border-surface-dim">
              <img
                alt="Artisanal Sourdough"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Close-up of a rustic sourdough bread loaf with a crispy golden crust on a wooden table with soft morning light"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcMX0TEcm5Kvsk79NbP8vFlGd22WDTxneOl4gqdJ6HldFDTOB1ScRNmT2hL3J8OGyCH0MbmWzPFqXeGyfp6EH_IxJWxmPyo2A5AdofPTs4D8nw6itE6jVk0lSM1L9U-ims7TM3dmPwIX8PIy1d0djIdUHfvWQfhBumHvPehUHbg8byHqfSWYGlymy8jg6jLXwATdt8QC4cYoV1FMQTCl62wMkBa4ScJ-zz9KLMlNHOgndEiwzR0leznJZSMWGVJQNVUf_0e1kix_k"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="headline-md text-base primary">
                    Heritage Sourdough
                  </h3>
                  <span className="label-md primary">$12.00</span>
                </div>
                <p className="body-md text-sm on-surface-variant mt-1">
                  Slow-fermented, 24-hour rise
                </p>
              </div>
              <div className="flex items-center justify-between">
                {/* <!-- Quantity Picker --> */}
                <div className="flex items-center border border-outline-variant rounded-lg px-3 py-1 bg-surface-container-lowest">
                  <button className="on-surface-variant hover:text-terracotta transition-colors flex items-center">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="remove"
                    >
                      remove
                    </span>
                  </button>
                  <span className="px-4 label-md">1</span>
                  <button className="on-surface-variant hover:text-terracotta transition-colors flex items-center">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="add"
                    >
                      add
                    </span>
                  </button>
                </div>
                <button className="text-outline hover:text-error transition-colors flex items-center gap-1">
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
          {/* <!-- Item 2 --> */}
          <div className="flex gap-4 group">
            <div className="w-24 h-24 shrink-0 bg-surface-container-low rounded-lg overflow-hidden border border-surface-dim">
              <img
                alt="French Croissants"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Golden flaky croissants stacked on a white ceramic plate with a sprinkle of flour and warm bakery atmosphere"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk7XIoZuCmY9ABbD2mf6959gpvmjTGnlRpzwqnjnakOix8270SJiPzfpL5ad-3DvB2-D4tXJ92iVEkChlD7DJuJcczY6Jm3viww4lL9H6BekL7SwKO8yb5xnzxpl61wyjkjwcN-I2m64zMWQyWynhNxlXmKZpAdlR-gvA1en4l6Wwh7DU9236qJpM-9rOIILUhfXjXQANWdzQd4Um81IOyrnc8uVicrlmOC7_HqJTy_B3W1o-go5fvgr4KQ5S3yiF-NFAZnONK6bk"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="headline-md text-base primary">
                    Buttery Croissants
                  </h3>
                  <span className="label-md primary">$18.00</span>
                </div>
                <p className="body-md text-sm on-surface-variant mt-1">
                  Box of 4, AOP butter
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center border border-outline-variant rounded-lg px-3 py-1 bg-surface-container-lowest">
                  <button className="on-surface-variant hover:text-terracotta transition-colors flex items-center">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="remove"
                    >
                      remove
                    </span>
                  </button>
                  <span className="px-4 label-md">1</span>
                  <button className="on-surface-variant hover:text-terracotta transition-colors flex items-center">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="add"
                    >
                      add
                    </span>
                  </button>
                </div>
                <button className="text-outline hover:text-error transition-colors flex items-center gap-1">
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
          {/* <!-- Item 3 --> */}
          <div className="flex gap-4 group">
            <div className="w-24 h-24 shrink-0 bg-surface-container-low rounded-lg overflow-hidden border border-surface-dim">
              <img
                alt="Gourmet Jam"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="A small elegant glass jar of ruby red strawberry preserve with a handwritten label on a stone surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkWjv1VkdFflt7B38N3y0Me7KcjW-bjF0dpLdbOAssyhhzp27OvR85i7QrEcvijshdItscRwbhIxIQH62CPVkQdUr1aTwuCrChN4pJiO49we5ow57wtZfKWRexq_QEVdEdh2A3JP2h1EmwEZmsP3-Rqehml1W9fiqR1hNkZh02fpLvh1q15Z2kbss6vI3dE_LVfzbhonR2iv25Cr3NHTlnzOClNnqMZNoJGB5aBweFd0bcZFVxhpr-AbtX38iTY9YKsUxxABvTGw0"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="headline-md text-base primary">
                    Summer Berry Jam
                  </h3>
                  <span className="label-md primary">$9.50</span>
                </div>
                <p className="body-md text-sm on-surface-variant mt-1">
                  Small batch, organic fruit
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center border border-outline-variant rounded-lg px-3 py-1 bg-surface-container-lowest">
                  <button className="on-surface-variant hover:text-terracotta transition-colors flex items-center">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="remove"
                    >
                      remove
                    </span>
                  </button>
                  <span className="px-4 label-md">1</span>
                  <button className="on-surface-variant hover:text-terracotta transition-colors flex items-center">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="add"
                    >
                      add
                    </span>
                  </button>
                </div>
                <button className="text-outline hover:text-error transition-colors flex items-center gap-1">
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
        </div>
        {/* <!-- Cart Footer / Checkout --> */}
        <div className="px-8 py-8 border-t border-surface-dim bg-surface-container-low">
          <div className="space-y-3 mb-6">
            <div className="flex justify-between body-md on-surface-variant">
              <span>Subtotal</span>
              <span className="on-surface font-semibold">$39.50</span>
            </div>
            <div className="flex justify-between body-md on-surface-variant">
              <span>Shipping</span>
              <span className="italic text-xs">Calculated at checkout</span>
            </div>
            <div className="flex justify-between headline-md primary pt-2 border-t border-surface-dim">
              <span>Total</span>
              <span className="terracotta">$39.50</span>
            </div>
          </div>
          <div className="space-y-3">
            <Link href="/checkout">
              <button className="w-full bg-terracotta primary hover:text-white py-4 rounded-lg button hover:bg-[#B25919] transition-all active:scale-[0.98] shadow-lg shadow-terracotta/20">
                Proceed to Checkout
              </button>
            </Link>
            <p className="text-center text-[10px] text-outline label-md uppercase tracking-[0.2em]">
              Secure Checkout by New English
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
