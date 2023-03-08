<script>
  import { showLogin } from "$lib/stores";
  import { enhance } from "$app/forms";
  import { supabaseClient } from "$lib/supabase/config";
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

  const signInWithProvider = async (provider) => {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: provider,
    });

    if (data) console.log("github account | client: ", data);

    if (error) console.log(error);
  };

  const submitSocialLogin = async ({ action, cancel }) => {
    switch (action.searchParams.get("provider")) {
      case "google":
        await signInWithProvider("google");
        break;
      case "discord":
        await signInWithProvider("discord");
        break;
      case "github":
        await signInWithProvider("github");
        break;
      default:
        break;
    }
    cancel();
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
    <form method="POST" use:enhance={submitSocialLogin} class="btn-github-wrapper field">
      <button class="btn-github" formaction="?/login&provider=github">
        <img class="google-img" src="https://icons-for-free.com/iconfiles/png/512/part+1+github-1320568339880199515.png" alt="" />
        <span>Login with Github</span>
      </button>
    </form>
  </div>

  <div class="media-options">
    <a href="/" class="field google">
      <img src={imgGoogle} alt="" class="google-img" />
      <span>Login with Google</span>
    </a>
  </div>
</div>

<style>
  .media-option {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }

  .btn-github {
    width: 100%;
  }

  .login {
    margin-top: 30px;
  }
</style>
