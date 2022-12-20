import { supabaseClient } from "$lib/supabase/config"
import { redirect, json } from "@sveltejs/kit";

export const GET = async () => {
  const { data, error } = await supabaseClient.from('products').select('*')
  console.log(data)

  return new Response(JSON.stringify(data), { status: 200 })
}

export const POST = async ({ request }) => {
  const { product } = request.json()
  console.log('product: ', product)

  await supabaseClient.from("products").insert([product]);

  return json(product)

  // throw redirect(303, '/products')
}