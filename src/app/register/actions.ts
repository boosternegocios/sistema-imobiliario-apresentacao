'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
  const supabase = await createClient()
  
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const name = formData.get('name') as string

  // Signup
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
      }
    }
  })

  if (error) {
    redirect('/register?error=' + encodeURIComponent('Erro ao criar conta: ' + error.message))
  }

  revalidatePath('/', 'layout')
  // Por padrao, supabase ja loga o usuario após o signup (se confirmacao de email estiver desativada)
  redirect('/dashboard')
}
