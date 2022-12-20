<script>
  import {
    shoppingList,
    shoppingItem,
    shoppingCount,
    // filteredShoppingList,
    isAddToCart
  } from "$lib/stores";
  import Counter from "./Counter.svelte";

  export let product;

  const addToCart = () => {
    // $shoppingList = [$shoppingItem, ...$shoppingList]
    // $shoppingList = $shoppingList.filter(
    $shoppingList = [$shoppingItem, ...$shoppingList].filter(
      (value, index, self) =>
        index ===
        self.findIndex((t) => t.product === value.product)
    );
    $isAddToCart = true
    console.log("Your shopping list: ", $shoppingList);
  };
</script>

<div class="card">
  <div class="grid lg:grid-cols-2 xs:grid-cols-1">
    <div class="p-7">
      <img src={product[0].image} alt="product" class="mx-auto my-7" />
    </div>
    <div class="p-7">
      <h2 class="text-4xl my-7">
        <p>{product[0].title}</p>
      </h2>
      <p class="text-xl my-7">Price - ${product[0].price}</p>
      <h3 class="font-bold border-b-2 mb-4 pb-2">
        <p class="mb-7">{product[0].description}</p>
      </h3>
      <div class="cart flex">
        <button class="btn flex item-center mr-2" on:click={addToCart}>
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to cart</span>
        </button>
        <Counter {product} />
      </div>
    </div>
  </div>
</div>

<style scoped>
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
