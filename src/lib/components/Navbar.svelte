<script>
  import { page } from "$app/stores";
  import supabase from "$lib/supabase/config";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  const logout = async () => {
    // await supabase.auth.signOut();

    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("something went wrong");
    } else {
      console.log("user logout, redirect to login page");
      goto("/");
    }
  };
</script>

<ul class="flex gap-4 ml-auto">
  {#if $page.url.pathname !== "/products"}
    <li>
      <a data-sveltekit-prefetch href="/products" class="btn">Products</a>
    </li>
  {/if}
  <!-- {#if $page.url.pathname !== "/dashboard" && $page.url.pathname !== "/products"} -->
  {#if $page.url.pathname !== "/dashboard"}
    <li>
      <a href="/dashboard" class="btn">Dashboard</a>
    </li>
  {/if}
  <li>
    <i class="material-icons text-[#12b488]" on:keydown on:click={logout}>logout</i>
  </li>
</ul>

<style>
  /* .btn-logout {
    color: #12b488;
    font-weight: 600;
  } */
</style>
