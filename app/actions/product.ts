"use server"

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

interface ProductInput {
    name: string
    description?: string
    image_url?: string
    price: number
    category: string
    tags: string[]
}

//Add a new product
export async function createProduct(data: ProductInput) {
    const supabase = await createClient()

    const { data: product, error } = await supabase
        .from('products')
        .insert([data])
        .select()
        .single()

    if (error) throw new Error(error.message)

    revalidatePath('/store') // Refresh cache on store page
    return product
}

//Get all products
export async function getProducts() {
    const supabase = await createClient()

    const { data: products, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) throw new Error(error.message)
    return products
}

//Get single product
export async function getProductById(id: string) {
    const supabase = await createClient()

    const { data: product, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single() // Expects exactly one row back

    if (error) {
        console.error(`Error fetching product ${id}:`, error.message)
        return null
    }

    return product
}

// Get products by category
export async function getProductByCategory(category: string) {
    const supabase = await createClient()

    const { data: product, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', category)

    if (error) {
        console.error(`Error fetching product by ${category}:`, error.message)
        return []
    }

    return product
}

//Edit an existing product
export async function updateProduct(id: string, data: Partial<ProductInput>) {
    const supabase = await createClient()

    const { data: updatedProduct, error } = await supabase
        .from('products')
        .update(data)
        .eq('id', id)
        .select()
        .single()

    if (error) throw new Error(error.message)

    revalidatePath('/store')
    return updatedProduct
}

//Remove a product
export async function deleteProduct(id: string) {
    const supabase = await createClient()

    const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id)

    if (error) throw new Error(error.message)

    revalidatePath('/store')
    return { success: true }
}
