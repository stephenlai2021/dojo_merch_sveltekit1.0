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

<div class="count text-[#12b488] font-bold">
  {$totalShoppingCount}
</div>

<style>
  .count {
    height: 25px;
  }
</style>