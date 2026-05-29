"use client"

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

interface UseProductsProps {
  category: string
  search: string
  initialData?: any[]
}

export function useProducts({ category, search }: UseProductsProps) {
  const [products, setProducts] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const supabase = createClient()

    async function fetchProducts() {
      setIsLoading(true)
      setError(null)

      try {
        // 1. Initialize your Supabase base query pointing to products
        let query = supabase.from('products').select('*')

        // 2. Apply category filters dynamically if specified
        if (category && category !== 'all') {
          query = query.eq('category', category)
        }

        // 3. Apply search filters across titles if specified
        if (search) {
          query = query.ilike('name', `%${search}%`)
        }

        // 4. Sort items cleanly by arrival date
        query = query.order('created_at', { ascending: false })

        const { data, error: supabaseError } = await query

        if (supabaseError) {
          throw new Error(supabaseError.message)
        }

        setProducts(data || [])
      } catch (err: any) {
        setError(err.message || 'An error occurred while fetching products.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [category, search]) // Triggers automatic re-fetching when inputs change

  return { products, isLoading, error }
}
