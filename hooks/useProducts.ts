import { Product } from '@/types/product';
import { ProductAPI } from '@/lib/api';
import { useEffect, useState, useCallback, useRef } from 'react';

interface UseProductsOptions {
    category?: string;
    search?: string;
    initialData?: Product[];
}

export function useProducts({ category, search, initialData }: UseProductsOptions = {}) {
    const [products, setProducts] = useState<Product[]>(initialData || []);
    const [isLoading, setIsLoading] = useState(!initialData);
    const [error, setError] = useState<string | null>(null);
    const previousCategoryRef = useRef<string | undefined>(category);

    const fetchProducts = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);

            let data: Product[];
            if (category) {
                data = await ProductAPI.getProductsByCategory(category);
            } else {
                data = await ProductAPI.getAllProducts();
            }

            setProducts(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch products');
            // Fallback to initialData if available
            if (initialData) {
                setProducts(initialData);
            }
        } finally {
            setIsLoading(false);
        }
    }, [category, initialData]);

    useEffect(() => {
        if (previousCategoryRef.current !== category) {
            previousCategoryRef.current = category;
            fetchProducts();
        }
    }, [category, fetchProducts]);

    useEffect(() => {
        if (!initialData) {
            fetchProducts();
        }
    }, [fetchProducts, initialData]);

    // Filter products based on search
    const filteredProducts = useCallback(() => {
        if (search && search.trim() !== '') {
            return products.filter(product =>
                product.name.toLowerCase().includes(search.toLowerCase())
            );
        }
        return products;
    }, [products, search]);

    return {
        products: filteredProducts(),
        isLoading,
        error,
        refetch: fetchProducts
    };
}