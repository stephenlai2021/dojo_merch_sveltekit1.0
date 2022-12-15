import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://itzgmdgndusfvggjclwk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0emdtZGduZHVzZnZnZ2pjbHdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA2NTgwNDYsImV4cCI6MTk4NjIzNDA0Nn0.pNt5W8ccp8TnrKhRaDzYPuVjKrcazjWh06QUMZ0ZC90'

// let process;
// let supabaseUrl
// let supabaseKey

// if (process && process.env) {
//   supabaseUrl = process.env.SUPABASE_URL;
//   supabaseKey = process.env.SUPABASE_API_KEY;
// } else {
//   supabaseUrl = import.meta.env.SUPABASE_URL;
//   supabaseKey = import.meta.env.SUPABASE_API_KEY;
//  }


const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
