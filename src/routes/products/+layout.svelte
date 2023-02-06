<script>
  import { selectedCategory, showMenu, mobile } from "$lib/stores";
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";
  import { onMount } from "svelte";
  import { supabaseClient } from "$lib/supabase/config";
  import { goto } from '$app/navigation'
  import Navbar from "$lib/components/Navbar.svelte";
  import CartCount from "$lib/components/CartCount.svelte";
  import Menu from "$lib/components/Menu.svelte";
  import IconLogo from "$lib/images/logo.png";
  import IconAvatar from "$lib/images/avatar.png";

  let userEmail = $page.data.session.user.email;

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

  const handleMenuOpen = () => {
    if ($showMenu) { $showMenu = false }
    else { $showMenu = true }
		document.body.addEventListener('click', handleMenuClose)
	}

	const handleMenuClose = () => {
		$showMenu = false
		document.body.removeEventListener('click', handleMenuClose)
	}

  const checkOut = async () => {
    const res = await fetch('/api/checkout')
    const data = await res.json()
    console.log('checkout url:', data.url)
    goto(data.url)
  }

  onMount(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 500) $mobile = true;
      if (window.innerWidth > 500) $mobile = false;
    });
  });

  $: console.log("user email: ", $page.data.session.user.email);
</script>

<svelte:head>
  <title>ShopWare | Products</title>
</svelte:head>

<div>
  <header class="shadow-sm bg-white">
    <nav class="wrapper p-4">
      {#if $mobile}
        <img src={IconLogo} width="36" height="36" alt="">
      {:else}
        <div class="font-bold text-gray-600 title">Products</div>
      {/if}

      {#if $page.url.pathname !== "/products"}
        <div class="ml-auto flex hover:cursor-pointer icon-cart-wrapper">
          <i 
            class="material-icons mr-1 text-[#12b488] text-3xl"
            on:keydown
            on:click={checkOut}
          >
            shopping_cart
          </i>
          <CartCount />
        </div>
      {/if}

      {#if $page.url.pathname === "/products"}
        <select
          bind:value={selected}
          class="p-1 rounded-md border drop-down-menu"
          on:change={() => ($selectedCategory = selected)}
        >
          {#each categories as category}
            <option value={category}>
              {category}
            </option>
          {/each}
        </select>
      {/if}

      {#if $page.url.pathname === "/products"}
        <img
          class="icon-avatar"
          src={IconAvatar}
          alt=""
          on:keydown
          on:click|stopPropagation={handleMenuOpen}
        />
      {/if}
    </nav>
  </header>

  {#if $showMenu}
    <Menu />
  {/if}

  <div class=" mx-auto p-4">
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
  .icon-cart-wrapper {
    position: relative;
    /* border: 1px solid; */
  }

  .drop-down-menu {
    margin-left: auto;
  }

  .title {
    font-size: 25px;
  }

  .icon-avatar {
    width: 32px;
    margin-left: 30px;
    cursor: pointer;
  }

  .wrapper {
    display: flex;
    align-items: center;
    position: relative;
    /* border: 1px solid; */
  }

  select {
    font-size: 18px;
    color: darkgray;
    outline: none;
  }

  @media (max-width: 500px) {
    .icon-avatar {
      margin-left: 0;
    }
    .wrapper {
      justify-content: space-between;
    }
    .drop-down-menu {
      margin-left: 0;
    }
  }

  @media (max-width: 575px) {
    .icon-avatar {
      margin-left: 10px;
    }
  }
</style>
