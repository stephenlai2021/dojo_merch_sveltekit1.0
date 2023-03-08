<script>
  import ProductDetails from "$lib/components/ProductDetails.svelte";

  export let data;
  const { products } = data;
</script>

<svelte:head>
  <title>Product | {products[0].title}</title>
  <meta name="description" content={products.description} />
</svelte:head>

<div>
  <ProductDetails {products} />
</div>
