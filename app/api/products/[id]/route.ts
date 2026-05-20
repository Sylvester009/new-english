import { NextRequest, NextResponse } from 'next/server';
import products from '@/data/products.json';

export const revalidate = 3600;

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;

        // Find product by id
        const product = products.find(p => p.id === id);

        if (!product) {
            return NextResponse.json(
                { error: 'Product not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(product, {
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