<script>
  import { cartItems, totalCartQuantity } from "$lib/stores";

  export let products;

  let value = 0;
  let product = {
    quantity: 1,
  };

  const decreaseQuantity = (id) => {
    if (value === 0) {
      return (value = 0);
    }
    value--;

    product = {
      id: products[0].id,
      title: products[0].title,
      quantity: value,
      total: (products[0].price * value).toFixed(2),
    };
    $cartItems = [...$cartItems, product];
    $cartItems = $cartItems.filter((item) =>
      item.id === id ? item.quantity === value : item.quantity
    );
    localStorage.setItem("cart items", JSON.stringify($cartItems));

    if ($cartItems.length === 1) {
      $totalCartQuantity = $cartItems[0].quantity;
      localStorage.setItem("cart quantity: ", $totalCartQuantity);
    } else {
      $totalCartQuantity = 0
      
      $cartItems.forEach((item) => {
        $totalCartQuantity = $totalCartQuantity + item.id
        localStorage.setItem("cart quantity: ", $totalCartQuantity);
      });
    }
  };

  const increaseQuantity = (id) => {
    value++;

    product = {
      id: products[0].id,
      title: products[0].title,
      quantity: value,
      total: (products[0].price * value).toFixed(2),
    };
    $cartItems = [...$cartItems, product];
    $cartItems = $cartItems.filter((item) =>
      item.id === id ? item.quantity === value : item.quantity
    );
    localStorage.setItem("cart items", JSON.stringify($cartItems));

    if ($cartItems.length === 1) {
      $totalCartQuantity = $cartItems[0].quantity;
      localStorage.setItem("cart quantity: ", $totalCartQuantity);
    }
    if ($cartItems.length >=2 ) {
      $totalCartQuantity = 0

      $cartItems.forEach((item) => {
        $totalCartQuantity = $totalCartQuantity + item.quantity
        localStorage.setItem("cart quantity: ", $totalCartQuantity);
      });
    }
  };

  $: console.log("cart items: ", $cartItems);
</script>

<div class="counter flex">
  <button
    class="minus btn mr-1"
    on:keydown
    on:click={() => decreaseQuantity(products[0].id)}>-</button
  >
  <!-- on:click={decreaseQuantity}>-</button -->
  <div class="value btn mr-1">{value}</div>
  <!-- <div class="value btn mr-1">{product.quantity}</div> -->
  <button
    class="plus btn"
    on:keydown
    on:click={() => increaseQuantity(products[0].id)}>+</button
  >
  <!-- on:click={increaseQuantity}>+</button -->
</div>

<style>
  .value {
    display: flex;
    align-items: center;
  }

  .counter {
    /* width: 100px; */
  }
</style>
