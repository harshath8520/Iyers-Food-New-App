import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// IMPORTANT: Replace these with your actual Supabase project credentials.
// You can find them in your Supabase dashboard under: Project Settings -> API.
const SUPABASE_URL = 'https://lusoaotlfxfrpmydtb.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_WcXzhxVxPYONNquB5DlSiw_akXk8DPg';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
