<script>
  import { shoppingItem, value } from '$lib/stores'

  export let product

  // JSON.stringify('quantity', $value)

  // let value = 0

  const decreaseCounter = () => {
    // if (value === 0) return value = 0
    // value--
    // $shoppingItem = { product: product[0].title, count: value, total: (product[0].price * value).toFixed(2) }
    
    if ($value === 0) return $value = 0
    $value--
    $shoppingItem = { product: product[0].title, count: $value, total: (product[0].price * $value).toFixed(2) }
  }
  
  const increaseCounter = () => {
    // value++
    // $shoppingItem = { product: product[0].title, count: value, total: (product[0].price * value).toFixed(2) }

    $value++
    $shoppingItem = { product: product[0].title, count: $value, total: (product[0].price * $value).toFixed(2) }
  }
</script>

<div class="counter flex">
  <button class="minus btn mr-1" on:keydown on:click={decreaseCounter}>-</button>
  <div class="value btn mr-1">{value}</div>
  <button class="plus btn" on:keydown on:click={increaseCounter}>+</button>
</div>

<style>
  .counter {
    width: 100px;
  }
</style>