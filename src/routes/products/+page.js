import supabase from "$lib/supabase/config";

// export const load = async ({ fetch }) => {
//   const fetchProducts = async () => {
//     const productsRes = await fetch('https://fakestoreapi.com/products')
//     const products = await productsRes.json()
//     console.log('products: ', products)
//     return products
//   }
//   return { products: fetchProducts() }
// }

// export const load = async () => {
//   const { data, error } = await supabase.from("products").select("*");
//   console.log("data: ", data);

//   return { products: data };
// };
