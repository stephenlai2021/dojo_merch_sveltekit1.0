<script>
  import { totalCartQuantity } from '$lib/stores'
  // import { browser } from '$app/environment'

  // totalCartQuantityVal.subscribe(value => browser && localStorage.setItem('cart quantity', value))

  // let cartQuantity 

  // const getCartQuantity = () => {
  //   return localStorage.getItem('cart quantity') || 0
  // }

  // $: cartQuantity = localStorage.getItem('cart quantity') || 0
</script>

<div class="quantity-wrapper text-[#12b488] font-bold">
  <span class="quantity">{$totalCartQuantity}</span> 
  <!-- <span class="quantity">{JSON.parse(localStorage.getItem("cart quantity"))}</span>  -->
  <!-- <span class="quantity">{localStorage.getItem("cart quantity") || 0}</span>  -->
  <!-- <span class="quantity">{getCartQuantity()}</span>  -->
  <!-- <span class="quantity">{cartQuantity}</span>  -->
</div>

<style>
  .quantity-wrapper {
    position: absolute;
    top: -20px;
    right: -6px;
    /* bottom: -3px; */
  }

  .quantity {
    font-size: 12px;
    background: red;
    font-weight: 600;
    color: white;
    /* color: red; */
    padding: 3px;
    border-radius: 4px;
    border-radius: 50px;

  }
</style>