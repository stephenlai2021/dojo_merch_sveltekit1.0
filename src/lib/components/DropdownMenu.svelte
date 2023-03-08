<script>
  import { selected,selectedCategory } from '$lib/stores'

  let categories = [
    "All categories",
    "women's clothing",
    "men's clothing",
    "jewelery",
    "electronics",
  ];
</script>

<select
  bind:value={$selected}
  class="p-1 rounded-md border drop-down-menu"
  on:change={() => ($selectedCategory = $selected)}
>
  {#each categories as category}
    <option value={category}>
      {category}
    </option>
  {/each}
</select>

<style>
  select {
    font-size: 18px;
    color: darkgray;
    outline: none;
    margin-left: auto;
  }

  /* @media (max-width: 500px) {
    .drop-down-menu {
      display: none;
    }
  } */
</style>
