import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cejrtyhpaurbngczawbr.supabase.co'
const supabaseAnonKey = 'sb_publishable_dBHG0RUogZMhs4sotbmIog_6neS8Q9F'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
