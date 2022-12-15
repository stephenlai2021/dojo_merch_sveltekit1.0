<script>
  export let product
</script>

<div class="card text-center">
  <img src={product.image} alt="product thumb" class="thumb">
  <p class="font-bold text-gray-500 m-4 truncate">{ product.title }</p>
  <a href={`/products/${product.id}`} data-sveltekit-prefetch>
    <p class="btn my-4">View Details</p>
  </a> 
</div>

<style scoped>
  .thumb {
    /* max-height: 120px; */
    height: 120px;
    /* max-width: 70%; */
    margin: 0 auto;
  }
</style>