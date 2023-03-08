<script>
  import { selectedCategory, showMenu, mobile, selected } from "$lib/stores";
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";
  import { onMount } from "svelte";
  import { supabaseClient } from "$lib/supabase/config";
  import { goto } from "$app/navigation";
  import CartCount from "$lib/components/CartCount.svelte";
  import Menu from "$lib/components/Menu.svelte";
  import IconLogo from "$lib/images/logo.png";
  import avatar from "$lib/images/avatar.png";
  import DropdownMenu from "$lib/components/DropdownMenu.svelte";

  console.log("user: ", $page.data.session.user);
  console.log("user email: ", $page.data.session.user.email);
  console.log(
    "user avatar: ",
    $page.data.session.user.user_metadata.avatar_url
  );

  let userEmail = $page.data.session.user.email;
  let userAvatar = $page.data.session.user.user_metadata?.avatar_url;

  const submitLogout = async ({ cancel }) => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.log(error);
    }
    cancel();
  };

  const handleMenuOpen = () => {
    if ($showMenu) {
      $showMenu = false;
    } else {
      $showMenu = true;
    }
    document.body.addEventListener("click", handleMenuClose);
  };

  const handleMenuClose = () => {
    $showMenu = false;
    document.body.removeEventListener("click", handleMenuClose);
  };

  const checkOut = async () => {
    const res = await fetch("/api/checkout");
    const data = await res.json();
    console.log("checkout url:", data.url);
    goto(data.url);
  };

  onMount(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 500) $mobile = true;
      if (window.innerWidth > 500) $mobile = false;
    });
  });
</script>

<svelte:head>
  <title>ShopWare | Products</title>
</svelte:head>

<div>
  <header class="shadow-sm bg-white">
    <nav class="wrapper p-4">
      {#if $mobile}
        <img src={IconLogo} width="36" height="36" alt="" />
      {:else}
        <div
          class="font-bold text-gray-600 title cursor-pointer"
          on:keydown
          on:click={() => goto("/products")}
        >
          Products
        </div>
      {/if}

      {#if $page.url.pathname !== "/products"}
        <div
          class="ml-auto flex hover:cursor-pointer icon-cart-wrapper"
          on:keydown
          on:click={checkOut}
        >
          <i class="material-icons mr-1 text-[#12b488] text-2xl">
            shopping_cart
          </i>
          <CartCount />
        </div>
      {/if}

      {#if $page.url.pathname === "/products"}
        <div class="dropdown-menu-top">
          <DropdownMenu />
        </div>
      {/if}

      {#if $page.url.pathname === "/products"}
        <div
          class="ml-auto relative flex hover:cursor-pointer"
          on:keydown
          on:click={checkOut}
        >
          <i class="material-icons mr-1 text-[#12b488] text-2xl">
            shopping_cart
          </i>
          <CartCount />
        </div>
        <div class="user-avatar-wrapper">
          <img
            class="icon-avatar"
            src={userAvatar ? userAvatar : avatar}
            alt=""
            on:keydown
            on:click|stopPropagation={handleMenuOpen}
          />
        </div>
      {/if}
    </nav>
  </header>

  {#if $showMenu}
    <Menu />
  {/if}

  <div class=" mx-auto p-4">
    <div class="dropdown-menu-main">
      <DropdownMenu />
    </div>
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
  .dropdown-menu-top {
    margin-left: auto;
  }

  .dropdown-menu-main {
    display: none;
  }

  .menu {
    align-items: center;
  }

  .drop-down-menu {
    margin-left: auto;
  }

  .title {
    font-size: 25px;
  }

  .icon-avatar {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    margin-left: 20px;
  }

  .wrapper {
    display: flex;
    align-items: center;
    position: relative;
  }

  select {
    font-size: 18px;
    color: darkgray;
    outline: none;
  }

  @media (max-width: 500px) {
    .wrapper {
      justify-content: space-between;
    }

    .dropdown-menu-top {
      display: none;
    }

    .dropdown-menu-main {
      display: block;
      text-align: center;
      justify-content: center;
      margin-bottom: 20px;
    }
  }
</style>
