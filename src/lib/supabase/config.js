import { createClient } from "@supabase/auth-helpers-sveltekit"
import {
	SUPABASE_ANON_KEY,
	SUPABASE_URL,
} from "$env/static/private"

export const supabaseClient = createClient(
	SUPABASE_URL,
	SUPABASE_ANON_KEY,
)