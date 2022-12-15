<script>
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<div>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex">
      <a href="/products" class="font-bold">Dojo Merch</a>
      <!-- <a href="/dashboard" class="btn ml-auto">Dashboard</a> -->
    </nav>
  </header>
  <div class="container mx-auto p-4">
    <slot />
  </div>
  <footer class="container mx-auto p-4 flex justify-between border-t-2">
    <Navbar class="w-full" />
  </footer>
</div>
