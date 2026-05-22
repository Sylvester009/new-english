'use client';

import {ProductType} from '../data';
import Link from 'next/link';
import Image from 'next/image';
import {useProducts} from '@/hooks/useProducts';
import localProducts from '@/data/products.json';
import {useCartStore} from '@/store/cart-store';

type ProductListProps = {
  productType: ProductType;
  search: string;
};

export default function ProductList({productType, search}: ProductListProps) {
  const {products, isLoading, error} = useProducts({
    category: productType,
    search,
    initialData: localProducts.filter(p => p.category === productType),
  });

  const addToCart = useCartStore(state => state.addToCart);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        {Array.from({length: 6}).map((_, i) => (
          <div key={i} className="bg-white rounded-xl p-4 animate-pulse">
            <div className="h-40 bg-gray-200 rounded-lg mb-4" />
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-lg font-semibold text-red-600">
          Error loading products
        </p>
        <p className="text-sm text-gray-400 mt-2">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-[#974400] text-white rounded-lg hover:opacity-90"
        >
          Retry
        </button>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-lg font-semibold text-gray-600">No products found</p>
        <p className="text-sm text-gray-400 mt-2">
          Try adjusting your search or selecting another category
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
      {products.map(product => (
        <div
          key={product.id}
          className="bg-[#fffaf5] rounded-2xl p-5 border border-[#eadccf] hover:-translate-y-1 transition-all duration-500"
        >
          <Link href={`/${product.id}`} className="block cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-4/3 bg-[#fcf2e3] border border-stone-100">
              <Image
                alt={product.name}
                src={product.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={false}
                loading="lazy"
              />

              {product.tag && (
                <div className="absolute top-2 left-2">
                  <span className="bg-[#f6edde] text-[#795900] tracking-[0.18em] px-2 py-1 rounded-full text-[10px] label-md uppercase backdrop-blur-sm">
                    {product.tag}
                  </span>
                </div>
              )}
            </div>
          </Link>
          <div className="space-y-3">
            <h3 className="title-sm primary leading-snug">{product.name}</h3>
            <div className="flex justify-between items-center">
              <span className="text-[20px] italic text-[#974400] font-medium">
                #{product.price.toFixed(2)}
              </span>
              <button
                onClick={() => addToCart(product)}
                className="border border-[#974400] text-[#974400] bg-transparent hover:bg-[#974400] hover:text-white p-2 rounded-lg hover:opacity-90 transition-all active:scale-95 flex items-center justify-center"
              >
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
