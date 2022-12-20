<script>
  import ProductCard from '$lib/components/ProductCard.svelte'
  import { selectedCategory } from '$lib/stores'
  
  /* data passed as props from server side */
  export let data;  
  const { products } = data;
  // console.log('products: ', products)
  
  /* fetch products on client side */
  // let products = []
  // onMount(async () => {
    //   const res = await fetch('/api/products')
    //   const json = await res.json()
    //   products = json
    // })
    
    let filteredProducts
    $: filteredProducts = products.filter(product => {
      if ($selectedCategory === '-- Please choose an category --') return product
      return product.category === $selectedCategory
    })
</script>

<div />

<div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
  {#each filteredProducts as product}
    <ProductCard {product} />   
  {/each}
</div>
