// app/[id]/page.tsx
import {ProductAPI} from '@/lib/api';
import ProductDetails from '@/app/components/productDetails';
import {notFound} from 'next/navigation';
import {getProductByCategory, getProductById} from '../actions/product';

interface ProductPageProps {
  params: Promise<{id: string}>;
}

export async function generateMetadata({params}: ProductPageProps) {
  const {id} = await params;
  const product = await getProductById(id);

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

export default async function ProductDetailsPage({params}: ProductPageProps) {
  const {id} = await params;
  const product = await getProductById(id);
  if (!product) {
    notFound();
  }

  const relatedProducts = await getProductByCategory(product.category);
  const filteredRelated = relatedProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return <ProductDetails product={product} relatedProducts={filteredRelated} />;
}
