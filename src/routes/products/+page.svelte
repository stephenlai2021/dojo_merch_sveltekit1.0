<script>
  import ProductCard from '$lib/components/ProductCard.svelte'

  export let data;
  const { products } = data;
  console.log('products: ', products)
</script>

<div />

<div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
  {#each products as product}
    <ProductCard {product} />   
  {/each}
</div>
