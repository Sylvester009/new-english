import products from '@/data/products.json';

import StoreClient from './storeClient';

export const iframeHeight = '800px';

export const description = 'A sidebar with a header and a search form.';

export async function generateStaticParams() {
  const categories = [...new Set(products.map(p => p.category))];

  return categories.map(category => ({
    category: category.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default async function StorePage() {
  // You can fetch initial data here if needed
  const categories = [...new Set(products.map(p => p.category))];

  return <StoreClient categories={categories} />;
}
