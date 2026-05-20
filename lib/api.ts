// lib/api.ts
import { Product } from '@/types/product';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export class ProductAPI {
    // Fetch all products
    static async getAllProducts(): Promise<Product[]> {
        try {
            const response = await fetch(`${API_BASE_URL}/api/products`, {
                next: { revalidate: 3600 },
            });

            if (!response.ok) throw new Error('Failed to fetch products');
            return response.json();
        } catch (error) {
            console.error('Error fetching products:', error);
            // Fallback to local data
            const products = await import('@/data/products.json');
            return products.default;
        }
    }

    // Fetch product by ID
    static async getProductById(id: string): Promise<Product | null> {
        try {
            // Check if we're in a browser or server environment
            const baseUrl = typeof window !== 'undefined' ? '' : process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

            const response = await fetch(`${baseUrl}/api/products/${id}`, {
                next: { revalidate: 3600 },
            });

            if (response.status === 404) {
                console.log(`Product with id ${id} not found`);
                return null;
            }

            if (!response.ok) {
                throw new Error(`Failed to fetch product: ${response.status}`);
            }

            const product = await response.json();
            return product;
        } catch (error) {
            console.error('Error fetching product from API:', error);

            // Fallback to local data
            try {
                const products = await import('@/data/products.json');
                const product = products.default.find((p: Product) => p.id === id);
                return product || null;
            } catch (fallbackError) {
                console.error('Fallback also failed:', fallbackError);
                return null;
            }
        }
    }

    // Fetch products by category
    static async getProductsByCategory(category: string): Promise<Product[]> {
        try {
            const baseUrl = typeof window !== 'undefined' ? '' : process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

            const response = await fetch(
                `${baseUrl}/api/products?category=${encodeURIComponent(category)}`,
                { next: { revalidate: 3600 } }
            );

            if (!response.ok) throw new Error('Failed to fetch products');
            return response.json();
        } catch (error) {
            console.error('Error fetching products by category:', error);
            // Fallback to local data
            const products = await import('@/data/products.json');
            return products.default.filter((p: Product) => p.category === category);
        }
    }
}