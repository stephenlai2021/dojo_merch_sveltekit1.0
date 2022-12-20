<script>
  import { shoppingList } from '$lib/stores'
  import ProductDetails from "$lib/components/ProductDetails.svelte";

  export let data;
  const { product } = data;
  // console.log("product: ", product);

  $: console.log(JSON.stringify($shoppingList, null, 2))
</script>

<svelte:head>
  <title>Nuxt Dojo | {product.title}</title>
  <meta name="description" content={product.description} />
</svelte:head>

<div>
  <ProductDetails {product} />
</div>
