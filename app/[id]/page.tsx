// app/[id]/page.tsx
import { Metadata } from 'next';
import { ProductAPI } from '@/lib/api';
import products from '@/data/products.json';
import ProductDetails from '@/app/components/productDetails';
import { notFound } from 'next/navigation';
import { Product } from '@/types/product';

export async function generateStaticParams() {
  const allProducts = products;

  return allProducts.map(product => ({
    id: product.id, 
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await ProductAPI.getProductById(id) || products.find((p: Product) => p.id === id);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }

  return {
    title: `${product.name} | New English`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((p: Product) => p.id === id);

  if (!product) {
    notFound();
  }

  const relatedProducts = await ProductAPI.getProductsByCategory(
    product.category,
  );
  const filteredRelated = relatedProducts
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  return <ProductDetails product={product} relatedProducts={filteredRelated} />;
}