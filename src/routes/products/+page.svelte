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

<div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
  {#each filteredProducts as product}
    <ProductCard {product} />
  {/each}
</div>
