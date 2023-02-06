<script>
  import ProductCard from "$lib/components/ProductCard.svelte";
  import { selectedCategory } from "$lib/stores";

  export let data;
  const { products } = data;

  let filteredProducts;
  $: filteredProducts = products.filter((product) => {
    if ($selectedCategory === "-- Please choose an category --") return product;
    return product.category === $selectedCategory;
  });
</script>

<div />

<div class="layout">
  {#each filteredProducts as product}
    <ProductCard {product} />
  {/each}
</div>

<style>
  .layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 10px;
  }
</style>
