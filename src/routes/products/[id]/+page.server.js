import { supabaseClient } from "$lib/supabase/config";

export const load = async ({ params }) => {
  const { data, error } = await supabaseClient
    .from("products")
    .select("*")
    .eq("id", params.id);
  console.log("products: ", data);

  if (error) {
    console.log('error: ', error)
  }
  return { products: data }
};