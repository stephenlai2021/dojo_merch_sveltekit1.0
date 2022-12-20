<script>
  import { supabaseClient } from "$lib/supabase/config";

  let title = "";
  let price = 0;
  let description = "";
  let category = "";
  let image = null;

  const handleSubmit = async () => {
    const product = {
      title,
      price,
      description,
      category,
      image,
    };

    /* insert data to supabase db doesnot return object !!! */
    // await supabaseClient.from("products").insert([product]);

    await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'        
      },
      body: JSON.stringify(product)
    })
  };
</script>

<div>
  <h1 class="font-bold text-center text-2xl">Product Details</h1>
  <div class="w-full max-w-md mx-auto">
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      method="POST"
      action="?/create"
    >
      <div class="mb-4">
        <label class="label" for="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          class="input shadow"
          placeholder="product title"
        />
      </div>
      <div class="mb-4">
        <label class="label" for="price">Price</label>
        <input
          id="price"
          name="price"
          type="text"
          class="input shadow"
          placeholder="product price"
        />
      </div>
      <div class="mb-4">
        <label class="label" for="description">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          class="input shadow"
          placeholder="product description"
        />
      </div>
      <div class="mb-4">
        <label class="label" for="category">Category</label>
        <input
          id="category"
          name="category"
          type="text"
          class="input shadow"
          placeholder="product category"
        />
      </div>
      <div class="mb-6">
        <label class="label" for="image">Image</label>
        <input
          id="image"
          name="image"
          type="text"
          class="input shadow"
          placeholder="product image"
        />
      </div>

      <div class="flex items-center justify-between">
        <button class="btn w-full hover:bg-blue-700">Add</button>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2022 Dojo Corp. All rights reserved.
    </p>
  </div>
</div>

<!-- <div class="w-full max-w-md mx-auto">
  <form
    class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    on:submit|preventDefault={handleSubmit}
  >
    <div class="mb-4">
      <label class="label" for="title">Title</label>
      <input
        id="title"
        type="text"
        class="input shadow"
        placeholder="product title"
        bind:value={title}
      />
    </div>
    <div class="mb-4">
      <label class="label" for="price">Price</label>
      <input
        id="price"
        type="text"
        class="input shadow"
        placeholder="product price"
        bind:value={price}
      />
    </div>
    <div class="mb-4">
      <label class="label" for="description">Description</label>
      <input
        id="description"
        type="text"
        class="input shadow"
        placeholder="product description"
        bind:value={description}
      />
    </div>
    <div class="mb-4">
      <label class="label" for="category">Category</label>
      <input
        id="category"
        type="text"
        class="input shadow"
        placeholder="product category"
        bind:value={category}
      />
    </div>
    <div class="mb-6">
      <label class="label" for="image">Image</label>
      <input
        id="image"
        type="text"
        class="input shadow"
        placeholder="product image"
        bind:value={image}
      />
    </div>

    <div class="flex items-center justify-between">
      <button class="btn w-full hover:bg-blue-700" type="submit">Add</button>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2022 Dojo Corp. All rights reserved.
  </p>
</div> -->
