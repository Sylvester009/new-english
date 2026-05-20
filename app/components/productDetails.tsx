'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from './footer';
import Header from './header';
import { Product } from '@/types/product';

interface ProductDetailsProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetails({ product, relatedProducts }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log(`Added ${quantity} of ${product.name} to cart`);
    setIsAddingToCart(false);
  };

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 lg:pt-14 pb-20">
        {/* Breadcrumb with Schema.org markup */}
        <nav className="mb-6 flex items-center gap-2 text-sm font-medium font-['Plus_Jakarta_Sans'] text-[#8a7266]" aria-label="Breadcrumb">
          <Link className="hover:text-[#974400] transition-colors" href="/store">
            Home
          </Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <Link 
            className="hover:text-[#974400] transition-colors" 
            href={`/store?category=${encodeURIComponent(product.category)}`}
          >
            {product.category}
          </Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-[#974400] font-bold" aria-current="page">
            {product.name}
          </span>
        </nav>

        {/* Product Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-16">
          {/* Gallery - Optimized Images */}
          <div className="lg:col-span-7">
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-sm border border-[#ebe1d3]/50 bg-[#fcf2e3]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority // Priority for main product image
                quality={85}
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-[#fcc340]/30 text-[#974400] text-sm font-bold font-['Plus_Jakarta_Sans'] px-3 py-1 rounded-full uppercase text-[10px] tracking-widest">
                {product.tag || product.category}
              </span>
              <div className="flex items-center gap-1 text-[#564338]">
                <span className="material-symbols-outlined text-sm material-symbols-filled text-[#fcc340]">
                  star
                </span>
                <span className="text-sm font-bold font-['Plus_Jakarta_Sans']">
                  4.9 (120 reviews)
                </span>
              </div>
            </div>

            <h1 className="font-['Noto_Serif'] text-[48px] leading-[1.1] font-bold text-[#974400]">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-4 pt-1">
              <span className="font-['Noto_Serif'] text-[32px] leading-[1.3] font-semibold text-[#974400]">
                £{product.price.toFixed(2)}
              </span>
              <span className="text-[#564338] line-through font-['Plus_Jakarta_Sans'] text-base leading-normal">
                £{(product.price * 1.2).toFixed(2)}
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                Save 20%
              </span>
            </div>

            <p className="font-['Plus_Jakarta_Sans'] text-lg leading-[1.6] text-[#564338] mt-2">
              {product.description}
            </p>

            <div className="border-t border-[#ddc1b3]/40 pt-4"></div>

            {/* Quantity & Add to Bag */}
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-[#ddc1b3] rounded-xl p-1 bg-[#ffffff] shadow-sm">
                  <button 
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-[#fcf2e3] rounded-lg transition-colors disabled:opacity-50"
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    <span className="material-symbols-outlined text-[#1f1b12]">
                      remove
                    </span>
                  </button>
                  <span className="w-12 text-center font-bold text-[#1f1b12] font-['Plus_Jakarta_Sans']">
                    {quantity}
                  </span>
                  <button 
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-[#fcf2e3] rounded-lg transition-colors"
                    aria-label="Increase quantity"
                  >
                    <span className="material-symbols-outlined text-[#1f1b12]">
                      add
                    </span>
                  </button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  className="flex-1 bg-[#4A3F35] text-[#FDF8F5] py-3.5 rounded-xl font-bold font-['Plus_Jakarta_Sans'] tracking-wide shadow-md hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="material-symbols-outlined text-sm">
                    {isAddingToCart ? 'hourglass_empty' : 'shopping_bag'}
                  </span>
                  {isAddingToCart ? 'Adding...' : 'Add to Bag'}
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#ba1a1a] mt-1 font-['Plus_Jakarta_Sans'] font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ba1a1a] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ba1a1a]"></span>
                </span>
                <span>Only 12 left for today&apos;s delivery</span>
              </div>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-[#ddc1b3]/50">
              <div className="flex flex-col items-center text-center gap-1.5">
                <span className="material-symbols-outlined text-[#bb5808] text-2xl">
                  oven_gen
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1f1b12] font-['Plus_Jakarta_Sans']">
                  Stone Baked
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5">
                <span className="material-symbols-outlined text-[#bb5808] text-2xl">
                  timer
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1f1b12] font-['Plus_Jakarta_Sans']">
                  36h Ferment
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5">
                <span className="material-symbols-outlined text-[#bb5808] text-2xl">
                  eco
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1f1b12] font-['Plus_Jakarta_Sans']">
                  100% Organic
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <div className="flex items-baseline justify-between mb-10">
              <h2 className="font-['Noto_Serif'] text-[32px] leading-[1.3] font-semibold text-[#974400]">
                Other {product.category} Products
              </h2>
              <Link
                className="text-sm font-bold font-['Plus_Jakarta_Sans'] text-[#974400] underline underline-offset-4 hover:opacity-80 transition-opacity"
                href={`/store?category=${encodeURIComponent(product.category)}`}
              >
                Explore More
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(item => (
              <div
                key={item.id}
                className="bg-[#ffffff] rounded-xl border border-[#ddc1b3]/50 p-4 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-[#f6edde]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <h4 className="font-['Noto_Serif'] text-lg font-semibold text-[#1f1b12] mb-1">
                  {item.name}
                </h4>
                <p className="text-sm font-bold font-['Plus_Jakarta_Sans'] text-[#564338] mb-4">
                  £{item.price.toFixed(2)}
                </p>
                <button className="w-full py-2.5 bg-[#fcc340] text-[#6f5100] font-bold font-['Plus_Jakarta_Sans'] rounded-xl text-sm flex items-center justify-center gap-2 hover:brightness-105 active:scale-[0.98] transition-all">
                  <span className="material-symbols-outlined text-sm">add</span>
                  Quick Add
                </button>
              </div>
            ))}
            </div>
          </section>
        )}

        {/* Customer Reviews Section */}
        <section className="mt-16 bg-[#fcf2e3] rounded-3xl p-6 lg:p-8 border border-[#ddc1b3]/50">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
            <div className="md:w-1/3">
              <h2 className="font-['Noto_Serif'] text-[48px] leading-[1.2] tracking-[-0.02em] font-bold text-[#974400]">
                Community Voice
              </h2>
              <div className="flex items-center gap-4 mt-4">
                <span className="text-5xl font-['Noto_Serif'] font-bold text-[#1f1b12]">
                  4.9
                </span>
                <div>
                  <div className="flex text-[#fcc340]">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined material-symbols-filled"
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-bold font-['Plus_Jakarta_Sans'] text-[#564338]">
                    Based on 120 reviews
                  </p>
                </div>
              </div>
              <button className="mt-8 w-full border-2 border-[#974400] text-[#974400] py-3 rounded-xl font-bold font-['Plus_Jakarta_Sans'] hover:bg-[#974400] hover:text-white active:scale-[0.98] transition-all">
                Write a Review
              </button>
            </div>
            <div className="md:w-2/3 space-y-6">
              {/* Review 1 */}
              <div className="border-b border-[#ddc1b3]/50 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-[#974400] font-['Plus_Jakarta_Sans']">
                      Eleanor M.
                    </h4>
                    <div className="flex text-[#bb5808] scale-75 origin-left">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined material-symbols-filled text-sm"
                        >
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-sm font-medium font-['Plus_Jakarta_Sans'] text-[#564338]">
                    2 days ago
                  </span>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-base leading-normal text-[#564338] italic">
                  &ldquo;The crust on this sourdough is unlike anything
                  I&apos;ve found outside of London. Perfectly charred and the
                  interior stays moist for days. My new weekly essential.&rdquo;
                </p>
              </div>
              {/* Review 2 */}
              <div className="pb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-[#974400] font-['Plus_Jakarta_Sans']">
                      Thomas H.
                    </h4>
                    <div className="flex text-[#bb5808] scale-75 origin-left">
                      {[...Array(4)].map((_, i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined material-symbols-filled text-sm"
                        >
                          star
                        </span>
                      ))}
                      <span className="material-symbols-outlined text-sm">
                        star
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-medium font-['Plus_Jakarta_Sans'] text-[#564338]">
                    1 week ago
                  </span>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-base leading-normal text-[#564338] italic">
                  &ldquo;Outstanding tang and beautiful crumb. It pairs
                  perfectly with just about anything. I only wish it didn&apos;t
                  sell out so quickly in the mornings!&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Bottom Navigation Bar (Mobile only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-safe pt-2 bg-[#FDF8F5]/95 backdrop-blur-md border-t border-stone-200 z-50 shadow-[0_-4px_20px_rgba(74,63,53,0.04)] rounded-t-2xl">
        {[
          { icon: 'storefront', label: 'Shop', href: '/store', active: false },
          { icon: 'search', label: 'Search', href: '/search', active: false },
          { icon: 'shopping_bag', label: 'Cart', href: '/cart', active: false },
          { icon: 'person', label: 'Account', href: '/account', active: false },
        ].map(item => (
          <Link
            key={item.label}
            className={`flex flex-col items-center justify-center rounded-xl px-4 py-1 transition-all ${
              item.active ? 'text-[#4A3F35] bg-[#F2D7D9]/30' : 'text-stone-400'
            }`}
            href={item.href}
          >
            <span className="material-symbols-outlined" data-icon={item.icon}>
              {item.icon}
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-medium uppercase tracking-wider">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </>
  );
}