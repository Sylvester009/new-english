import { createClient } from '@/lib/supabase/client'

export async function uploadProductImage(file: File): Promise<string> {
  const supabase = createClient()
  
  // Create a completely unique filename to avoid collisions
  const fileExt = file.name.split('.').pop()
  const fileName = `${crypto.randomUUID()}.${fileExt}`
  const filePath = `products/${fileName}`

  const { error } = await supabase.storage
    .from('product-images')
    .upload(filePath, file, { cacheControl: '3600', upsert: false })

  if (error) throw new Error(`Upload failed: ${error.message}`)

  // Get the public access link
  const { data } = supabase.storage.from('product-images').getPublicUrl(filePath)
  return data.publicUrl
}
