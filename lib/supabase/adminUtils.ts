import 'server-only'
import { createAdminClient } from './admin'

export async function getAllSystemUsers() {
  // Use the admin client to bypass security boundaries safely on the server
  const supabaseAdmin = await createAdminClient()

  // Access the administrative listUsers management endpoint
  const { data: { users }, error } = await supabaseAdmin.auth.admin.listUsers()

  if (error) {
    console.error('Error fetching system users:', error.message)
    return []
  }

  // Returns array of objects containing emails, system metadata, login timestamps, etc.
  return users 
}
