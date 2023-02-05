<script>
  import { showLogin } from "$lib/stores";
  import imgGoogle from "$lib/images/google.png";
  import imgFacebook from "$lib/images/facebook.png";

  let passwordType = "password";

  const togglePassword = () => {
    if (passwordType === "password") {
      passwordType = "text";
    } else {
      passwordType = "password";
    }
  };
</script>

<div class="form signup">
  <div class="form-content">
    <header>Signup</header>
    <form action="?/register" method="POST">
      <div class="field input-field">
        <input type="email" name="email" placeholder="Email" class="input" />
      </div>

      <div class="field input-field">
        <input
          type={passwordType}
          name="password"
          placeholder="Create password"
          class="password"
        />
        <i
          class="bx eye-icon"
          class:bx-hide={passwordType === "password"}
          class:bx-show={passwordType === "text"}
          on:keydown
          on:click={togglePassword}
        />
      </div>

      <!-- <div class="field input-field">
        <input
          type="password"
          placeholder="Confirm password"
          class="password"
        />
        <i class="bx bx-hide eye-icon" />
      </div> -->

      <div class="field button-field">
        <button type="submit">Signup</button>
      </div>
    </form>

    <div class="form-link">
      <span>
        Already have an account?
        <a href="/" class="link" on:click={() => ($showLogin = true)}>
          Login
        </a>
      </span>
    </div>
  </div>

  <div class="line" />

  <div class="media-options">
    <a href="/" class="field facebook">
      <img class="facebook-icon" src={imgFacebook} alt="" />
      <span>Login with Facebook</span>
    </a>
  </div>

  <div class="media-options">
    <a href="/" class="field google">
      <img src={imgGoogle} alt="" class="google-img" />
      <span>Login with Google</span>
    </a>
  </div>
</div>

<style>
</style>
