import { supabaseClient } from "$lib/supabase/config";
import { redirect } from "@sveltejs/kit"

export const load = async ({ locals }) => {
  const { data, error } = await supabaseClient.from("products").select("*");
  // console.log("products: ", data);

  if (!locals.session) {
    throw redirect(303, '/')
  }

  return { products: data };
};