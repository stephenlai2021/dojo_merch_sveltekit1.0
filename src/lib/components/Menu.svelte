<script>
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  import { enhance } from "$app/forms";
  import { supabaseClient } from "$lib/supabase/config";
  import DropdownMenu from '$lib/components/DropdownMenu.svelte'

	console.log('user email: ', $page.data.session.user.email)
  console.log('user avatar: ', $page.data.session.user.user_metatdata)

  let userEmail = $page.data.session.user.email.substring(
    0,
    $page.data.session.user.email.lastIndexOf("@")
  );

  const slidefade = (node, params) => {
    const existingTransform = getComputedStyle(node).transform.replace(
      "none",
      ""
    );
    return {
      delay: params.delay || 0,
      duration: params.duration || 200,
      easing: params.easing,
      css: (t, u) =>
        `transform-origin: top right; transform: ${existingTransform} scale(${t}); opacity: ${t};`,
    };
  };

  const submitLogout = async ({ cancel }) => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.log(error);
    }
    cancel();
  };
</script>

<ul class="menu" transition:slidefade on:keydown on:click|stopPropagation>
  <!-- <li><DropdownMenu /></li> -->
  <li>{userEmail}</li>
  <li class="icon-logout">
    <form action="/logout" method="POST" use:enhance={submitLogout}>
      <button type="submit" class="btn-primary">
        <!-- <i class="material-icons text-[#12b488]">logout</i> -->
				Logout
      </button>
    </form>
  </li>
</ul>

<style>
  .menu {
    position: absolute;
    top: 75px;
    right: 30px;
    z-index: 500;
    padding: 5px;
    background: #fff;
    position: absolute;
    border-radius: 4px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
  }

  .menu li {
    width: 150px;
    font-size: 16px;
    padding: 10px 15px;
    box-shadow: none;
    border-radius: 0;
    list-style: none;
    word-break: break-all;
    display: flex;
    align-items: center;
  }

  .menu li:last-child {
    margin-bottom: 0;
  }

  .menu li:hover {
    background: #f5f5f5;
  }
</style>
