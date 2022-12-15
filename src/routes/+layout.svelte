<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import { page } from "$app/stores";
  
  console.log("id: ", $page.params.id);
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
</svelte:head>

{#if $page.url.pathname !== "/products" && $page.url.pathname !== `/products/${$page.params.id}`}
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <a class="font-bold" href="/">Sveltekit Dojo</a>
      {#if $page.url.pathname !== "/"}
      <Navbar />
      {/if}
    </nav>
  </header>
{/if}
<div class="container mx-auto p-4">
  <slot />
</div>
