'use server'

import { createClient } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'

// We must create an Admin client to use the auth.admin API
// We cannot use the standard helper because it uses ANON_KEY
function getAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
  
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
}

export async function inviteMemberAction(organizationId: string, email: string, name: string) {
  const adminAuthClient = getAdminClient()

  // Invite user by email, passing the organization_id and full_name in the metadata
  const { data, error } = await adminAuthClient.auth.admin.inviteUserByEmail(email, {
    data: {
      full_name: name,
      organization_id: organizationId,
      role: 'corretor'
    }
  })

  if (error) {
    console.error('Error inviting user:', error)
    throw new Error(error.message)
  }

  revalidatePath('/equipes')
  return { success: true, user: data.user }
}
