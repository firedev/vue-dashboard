<template>
  <div class="flex mx-auto container justify-center">
    <div class="flex flex-column mx-auto" style="max-width: 40rem">
      <Header />
      <input type="email" placeholder="Email" />
      <div class="my"></div>
      <input type="password" placeholder="Password" />
      <div class="my"></div>
      <button class="py2">Sign In</button>
      <div class="flex justify-center my2">
        <router-link to="/register">Register an account</router-link>
        <div class="mx1">|</div>
        <router-link class="muted" to="/reset">Forgot password</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header,
  },
}
</script>
