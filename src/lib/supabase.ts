import { createClient } from '@supabase/supabase-js'

// Ensure URL has https:// prefix
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('Supabase Config:', {
  url: supabaseUrl,
  hasKey: !!supabaseAnonKey
})

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)