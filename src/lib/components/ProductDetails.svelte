<script>
  import {
    shoppingList,
    shoppingItem,
    shoppingCount,
    // filteredShoppingList,
    isAddToCart,
    mobilePhone
  } from "$lib/stores";
  import { onMount } from "svelte";
  import { browser } from '$app/environment'
  import Counter from "./Counter.svelte";

  export let products;

  let cartText = 'Add to cart'

  const addToCart = () => {
    $shoppingList = [$shoppingItem, ...$shoppingList].filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.product === value.product)
    );
    $isAddToCart = true;
    console.log("Your shopping list: ", $shoppingList);
  };

  const resizeWindow = () => {
    if (window.innerWidth <= 390) $mobilePhone = true;
    if (window.innerWidth > 390) $mobilePhone = false;
  }

  onMount(() => {
    window.addEventListener("resize", () => {
      resizeWindow()
    });
  })

  $: if ($mobilePhone) cartText = ''
  $: if (!$mobilePhone) cartText = 'Add to cart'

  $: if (browser) resizeWindow()
</script>

<div class="card">
  <div class="grid lg:grid-cols-2 xs:grid-cols-1">
    <div class="p-7">
      <img src={products[0].image} alt="product" class="mx-auto my-7" />
    </div>
    <div class="p-7">
      <h2 class="text-4xl my-7">
        <p>{products[0].title}</p>
      </h2>
      <p class="text-xl my-7">Price - ${products[0].price}</p>
      <h3 class="font-bold border-b-2 mb-4 pb-2">
        <p class="mb-7">{products[0].description}</p>
      </h3>
      <div class="cart flex">
        <button class="btn flex item-center mr-2" on:click={addToCart}>
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span class="cart-text">{cartText}</span>
        </button>
        <Counter {products} />
      </div>
    </div>
  </div>
</div>

<style scoped>
  .btn {
    display: flex;
    align-items: center;
  }

  img {
    /* max-width: 300px; */
    width: 300px;
  }

  @media (max-width: 575px) {
    img {
      max-width: 200;
    }
  }
</style>
