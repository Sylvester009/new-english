import {useEffect, useMemo, useState} from 'react';
import {Product, products, ProductType} from '../data';
import Link from 'next/link';

type ProductListProps = {
  productType: ProductType;
};

export default function ProductList({productType}: ProductListProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1s fake delay

    return () => clearTimeout(timer);
  }, [productType]);

  const filteredProducts = useMemo(
    () => products.filter(p => p.category === productType),
    [productType],
  );

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

  if (filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-lg font-semibold text-gray-600">No products found</p>
        <p className="text-sm text-gray-400 mt-2">
          Try selecting another category
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
      {filteredProducts.map(product => (
        <Link
          key={product.id}
          href={`/${product.id}`}
          className="block cursor-pointer"
        >
          <div className="bg-white rounded-xl card-shadow p-4 group">
            <div className="relative overflow-hidden rounded-lg mb-4 aspect-4/3 bg-[#fcf2e3] border border-stone-100">
              <img
                alt={product.name}
                src={product.image}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {product.tag && (
                <div className="absolute top-2 left-2">
                  <span className="bg-[#F2D7D9]/20 text-[#4A3F35] px-2 py-1 rounded-full text-[10px] label-md uppercase tracking-wider backdrop-blur-sm">
                    {product.tag}
                  </span>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <h3 className="headline-md text-[18px]! primary">
                {product.name}
              </h3>
              <div className="flex justify-between items-center">
                <span className="label-md text-lg! primary">
                  ${product.price.toFixed(2)}
                </span>
                <button className="bg-[#4A3F35] text-[#FDF8F5] p-2 rounded-lg hover:opacity-90 transition-all active:scale-95 flex items-center justify-center">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
