<script>
  import { mobilePhone } from "$lib/stores";
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import Counter from "$lib/components/Counter.svelte";

  export let products;
  
  const resizeWindow = () => {
    if (window.innerWidth <= 390) $mobilePhone = true;
    if (window.innerWidth > 390) $mobilePhone = false;
  };

  onMount(() => {
    window.addEventListener("resize", () => {
      resizeWindow();
    });
  });

  $: if (browser) resizeWindow();
</script>

<div class="card">
  <div class="grid lg:grid-cols-2 xs:grid-cols-1">
    <div class="p-7">
      <img
        src={products[0].image}
        alt="product"
        class="mx-auto product-image"
      />
    </div>
    <div class="p-7">
      <p class="product-title">{products[0].title}</p>
      <p class="text-xl my-7">Price - ${products[0].price}</p>
      <h3 class="font-bold border-b-2 mb-4 pb-2">
        <p class="mb-7 product-desription">{products[0].description}</p>
      </h3>
      <div class="cart flex">
        <Counter {products} />
      </div>
    </div>
  </div>
</div>

<style scoped>
  .product-image {
    margin: 28px auto;
    /* border: 1px solid; */
  }

  .product-title {
    font-size: 36px;
  }

  .btn {
    display: flex;
    align-items: center;
  }

  img {
    /* max-width: 300px; */
    width: 500px;
  }

  @media (max-width: 500px) {
    .product-image {
      margin: 0 auto;
      width: 90%;
    }

    .product-title {
      font-size: 24px;
    }
  }

  @media (max-width: 575px) {
    img {
      /* max-width: 200px; */
    }
  }
</style>
