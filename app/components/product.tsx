import {useEffect, useMemo, useState} from 'react';
import {Product, products, ProductType} from '../data';
import Link from 'next/link';

type ProductListProps = {
  productType: ProductType;
  search: string;
};

export default function ProductList({productType, search}: ProductListProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1s fake delay

    return () => clearTimeout(timer);
  }, [productType]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = product.category === productType;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [productType, search]);

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
      {filteredProducts.map(product => (
        <Link
          key={product.id}
          href={`/${product.id}`}
          className="block cursor-pointer"
        >
          <div className="bg-[#fffaf5] rounded-2xl p-5 border border-[#eadccf] hover:-translate-y-1 transition-all duration-500">
            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-4/3 bg-[#fcf2e3] border border-stone-100">
              <img
                alt={product.name}
                src={product.image}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {product.tag && (
                <div className="absolute top-2 left-2">
                  <span className="bg-[#f6edde] text-[#795900] tracking-[0.18em] px-2 py-1 rounded-full text-[10px] label-md uppercase backdrop-blur-sm">
                    {product.tag}
                  </span>
                </div>
              )}
            </div>
            <div className="space-y-3">
              <h3 className="title-sm primary leading-snug">{product.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-[20px] italic text-[#974400] font-medium">
                  #{product.price.toFixed(2)}
                </span>
                <button className="border border-[#974400] text-[#974400] bg-transparent hover:bg-[#974400] hover:text-white p-2 rounded-lg hover:opacity-90 transition-all active:scale-95 flex items-center justify-center">
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
