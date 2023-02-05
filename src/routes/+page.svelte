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

<div class="form login">
  <div class="form-content">
    <header>Login</header>
    <form action="?/login" method="POST">
      <div class="field input-field">
        <input type="email" name="email" placeholder="Email" class="input" />
      </div>

      <div class="field input-field">
        <input
          type={passwordType}
          name="password"
          placeholder="Password"
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

      <div class="form-link">
        <a href="/" class="forgot-pass">Forgot password?</a>
      </div>

      <div class="field button-field">
        <button type="submit">Login</button>
      </div>
    </form>

    <div class="form-link">
      <span>
        Don't have an account?
        <a href="/signup" class="link" on:click={() => ($showLogin = false)}>
          Signup
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
