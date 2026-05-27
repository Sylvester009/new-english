"use server"
import 'server-only'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function logout() {
  const supabase = await createClient()
  
  // 1. Destroys the session securely on Supabase auth servers
  // 2. Automatically clears all authentication cookies from the browser
  await supabase.auth.signOut()
  
  redirect('/store')
}
