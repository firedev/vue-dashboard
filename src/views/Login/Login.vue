<template>
  <div class="flex mx-auto container center justify-center">
    <div class="flex flex-column mx-auto" style="max-width: 40rem">
      <img src="@/assets/logo.svg" />
      <h3>Sign In</h3>
      <input type="email" placeholder="Email" />
      <div class="my"></div>
      <input type="password" placeholder="Password" />
      <div class="my"></div>
      <button>Sign In</button>
      <div class="flex my2">
        <router-link to="/register">
          Register an account
        </router-link>
        <div class="mx1">|</div>
        <router-link class="muted" to="/reset">
          Forgot password
        </router-link>
      </div>
    </div>
  </div>
</template>
