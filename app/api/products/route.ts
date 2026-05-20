import { NextRequest, NextResponse } from 'next/server';
import products from '@/data/products.json';

export const revalidate = 3600;

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const category = searchParams.get('category');

        let filteredProducts = [...products];

        if (category && category !== 'undefined' && category !== 'null') {
            filteredProducts = filteredProducts.filter(
                product => product.category === category
            );
        }

        return NextResponse.json(filteredProducts, {
            headers: {
                'Cache-Control': 's-maxage=3600, stale-while-revalidate=59',
            },
        });
    } catch (error) {
        console.error('Error in API route:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}