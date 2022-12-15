import supabase from "$lib/supabase/config";

// export const load = async ({ fetch, params }) => {
//   const fetchProduct = async () => {
//     const productRes = await fetch(`https://fakestoreapi.com/products/${params.id}`)
//     const product = await productRes.json()
//     console.log('product: ', product)
//     return product
//   }
//   return { product: fetchProduct() }
// }

// export const load = async ({ params }) => {
//   const { data, error } = await supabase
//     .from("products")
//     .select("*")
//     .eq("id", params.id);
//   console.log("data: ", data);
//   return { product: data };
// };
