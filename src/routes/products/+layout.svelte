<script>
  import { selectedCategory } from "$lib/stores";
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";
  import { supabaseClient } from "$lib/supabase/config";
  import Navbar from "$lib/components/Navbar.svelte";
  import CartCount from "$lib/components/CartCount.svelte";

  let selected;
  let categories = [
    "All categories",
    "women's clothing",
    "men's clothing",
    "jewelery",
    "electronics",
  ];

  const submitLogout = async ({ cancel }) => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.log(error);
    }
    cancel();
  };

  const checkout = async () => {
    console.log('checkout')
  }

  $: console.log("user email: ", $page.data.session.user.email);
</script>

<svelte:head>
  <title>ShopWare | Products</title>
</svelte:head>

<div>
  <header class="shadow-sm bg-white">
    <nav class=" mx-auto p-4 flex">
      <div class="font-bold text-gray-600">Products</div>

      {#if $page.url.pathname !== "/products"}
        <div class="ml-auto flex hover:cursor-pointer" on:keydown on:click={checkout}>
          <i class="material-icons mr-1 text-[#12b488] text-3xl">shopping_cart</i>
          <CartCount />
        </div>
      {/if}

      {#if $page.url.pathname === "/products"}
        <select
          bind:value={selected}
          class="ml-auto p-1 rounded-md border"
          on:change={() => ($selectedCategory = selected)}
        >
          {#each categories as category}
            <option value={category}>
              {category}
            </option>
          {/each}
        </select>
      {/if}

    </nav>
  </header>

  <div class="container mx-auto p-4">
    <slot />
  </div>
  
  <footer class="container mx-auto p-4 flex justify-end border-t-2">
    <ul class="flex gap-4 menu">
      {#if $page.url.pathname !== "/products"}
        <li>
          <a data-sveltekit-prefetch href="/products" class="btn">Products</a>
        </li>
      {/if}

      {#if $page.url.pathname !== "/dashboard"}
        <li>
          <a href="/dashboard" class="btn">Dashboard</a>
        </li>
      {/if}

      {#if $page.url.pathname !== "/"}
        <li class="icon-logout">
          <form action="/logout" method="POST" use:enhance={submitLogout}>
            <button type="submit" class="btn-primary">
              <i class="material-icons text-[#12b488]">logout</i>
            </button>
          </form>
        </li>
      {/if}
    </ul>
  </footer>
</div>

<style>
  select {
    font-size: 18px;
    color: darkgray;
    outline: none;
  }
</style>
