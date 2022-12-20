<div class="w-full max-w-md mx-auto mt-8">
  <h1 class="text-center text-2xl">Sign up</h1>
  <form
    class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    method="POST"
    action="?/signup"
  >
    <div class="mb-4">
      <label class="label" for="title">Email</label>
      <input
        id="title"
        type="email"
        name="email"
        class="input shadow"
        placeholder="Enter email"
      />
    </div>
    <div class="mb-4">
      <label class="label" for="price">Password</label>
      <input
        id="price"
        type="password"
        name="password"
        class="input shadow"
        placeholder="Enter password"
      />
    </div>

    <div class="flex items-center justify-between">
      <button class="btn w-full hover:bg-[#52EEA1]" type="submit">Submit</button>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    <!-- &copy;2022 Dojo Corp. All rights reserved. -->
    Already have an account yet? Please
    <b class="font-bold text-green-500 text-sm">
      <a href="/">login</a>
    </b> here 😀
  </p>
</div>

<!-- <style>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>  -->
