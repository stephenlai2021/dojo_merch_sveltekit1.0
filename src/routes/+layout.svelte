<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";
  import { invalidateAll } from "$app/navigation";
  import { supabaseClient } from "$lib/supabase/config";
  import { onMount } from "svelte";

  const submitLogout = async ({ cancel }) => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.log(error);
    }
    cancel();
  };

  onMount(() => {
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange(() => {
      console.log("Auth state change detected");
      invalidateAll();
    });
    return () => {
      subscription.unsubscribe();
    };
  });
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
      <div class="font-bold">Sveltekit Dojo</div>
      {#if $page.url.pathname !== "/"}
        <!-- <Navbar /> -->

        <ul class="flex gap-4 ml-auto">
          {#if $page.url.pathname !== "/products" && $page.url.pathname !== "/signup"}
            <li>
              <a data-sveltekit-prefetch href="/products" class="btn"
                >Products</a
              >
            </li>
          {/if}

          {#if $page.url.pathname !== "/dashboard" && $page.url.pathname !== "/signup"}
            <li>
              <a href="/dashboard" class="btn">Dashboard</a>
            </li>
          {/if}

          {#if $page.url.pathname !== "/" && $page.url.pathname !== "/signup"}
            <li>
              <form action="/logout" method="POST" use:enhance={submitLogout}>
                <button type="submit" class="btn-primary">
                  <i class="material-icons text-[#12b488]">logout</i>
                </button>
              </form>
            </li>
          {/if}
        </ul>
      {/if}
    </nav>
  </header>
{/if}
<div class="container mx-auto p-4">
  <slot />
</div>
