<script>
  import supabase from "$lib/supabase/config";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  let email = "";
  let password = "";
  let isSignup = false;
  let user = null;

  // onMount(async () => {
  //   const { data } = await supabase.auth.getUser();
  //   user = data;
  // });

  const signup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    user = data.user;
    console.log("data", data);
    console.log("error", error);
  };

  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log("data", data);
    console.log("error", error);
  };

  if (user) {
    goto("/products");
  }
</script>

<div>
  <form
    on:submit|preventDefault={() => (isSignup ? signup() : login())}
    class="flex flex-col gap-2 max-w-md mx-auto mt-8"
  >
    <input
      type="email"
      placeholder="Email"
      bind:value={email}
      class="p-2 bg-gray-600 rounded"
    />
    <input
      type="password"
      placeholder="Password"
      bind:value={password}
      class="p-2 bg-gray-600 rounded"
    />
    <button type="submit" class="p-2 text-white bg-green-500 rounded">
      {#if isSignup}
        <span>Sign up</span>
      {:else}
        <span>Log in</span>
      {/if}
    </button>
  </form>
  <button
    on:click={() => (isSignup = !isSignup)}
    class="w-full mt-8 text-sm text-center underline text-slate-300"
  >
    {#if isSignup}
      <span>Have an account? Log in instead</span>
    {:else}
      <span>Create a new account</span>
    {/if}
  </button>
</div> -->

<!-- <div class="w-full max-w-md mx-auto">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST" action="?/create">
    <div class="mb-4">
      <label class="label" for="title">Title</label>
      <input id="title" type="text" class="input shadow" placeholder="product title" />
    </div>
    <div class="mb-4">
      <label class="label" for="price">Price</label>
      <input id="price" type="text"  class="input shadow" placeholder="product price" />
    </div>
    <div class="mb-4">
      <label class="label" for="description">Description</label>
      <input id="description" type="text"  class="input shadow" placeholder="product description" />
    </div>
    <div class="mb-4">
      <label class="label" for="category">Category</label>
      <input id="category" type="text" class="input shadow" placeholder="product category" />
    </div>
    <div class="mb-6">
      <label class="label" for="image">Image</label>
      <input id="image" type="text" class="input shadow" placeholder="product image" />
    </div>

    <div class="flex items-center justify-between">
      <button class="btn w-full hover:bg-blue-700">Add</button>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2022 Dojo Corp. All rights reserved.
  </p>
</div>

<style>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>
