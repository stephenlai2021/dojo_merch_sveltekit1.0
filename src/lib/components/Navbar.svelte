<script>
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";
  import { supabaseClient } from "$lib/supabase/config";

  const submitLogout = async ({ cancel }) => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.log(error);
    }
    cancel();
  };
</script>

<ul class="flex gap-4 ml-auto">
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
    <li>
      <form action="/logout" method="POST" use:enhance={submitLogout}>
        <button type="submit" class="btn-primary">
          <i class="material-icons text-[#12b488]">logout</i>
        </button>
      </form>
    </li>
  {/if}
</ul>