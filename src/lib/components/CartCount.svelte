<script>
  import { isAddToCart, shoppingList, totalShoppingCount } from '$lib/stores'

  $: if ($isAddToCart && $shoppingList) {
    console.log('shopping list | cart count: ', $shoppingList)

    $totalShoppingCount = 0

    $shoppingList.map(item => {
      return $totalShoppingCount += item.count
    })

    console.log('total cart counts: ', $totalShoppingCount)
  }
</script>

<div class="quantity-wrapper text-[#12b488] font-bold">
  <span class="quantity">{$totalShoppingCount}</span> 
</div>

<style>
  .quantity-wrapper {
    position: absolute;
    top: -24px;
    right: 0;
  }

  .quantity {
    font-size: 14px;
    background: red;
    /* height: 24px; */
    color: white;
    padding: 0 5px;
    /* width: 10px; */
    border-radius: 50px;

  }
</style>