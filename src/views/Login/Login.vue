<template>
  <div class="flex mx-auto container justify-center">
    <div class="flex flex-column mx-auto" style="max-width: 40rem">
      <Header>Login</Header>
      <transition appear enter-active-class="animate__animated animate__fadeInRight">
      <input type="email" placeholder="Email" class="my"/>
      </transition>
      <transition appear enter-active-class="animate__animated animate__fadeInRight delay-1">
      <input type="password" placeholder="Password" class="my" />
      </transition>
      <div class="my"></div>
      <transition appear enter-active-class="animate__animated animate__fadeInUp delay-2">
      <button class="py2">Sign In</button>
      </transition>
      <transition appear enter-active-class="animate__animated animate__fadeIn delay-3">
      <div class="flex justify-center my2">
        <router-link to="/register">Register an account</router-link>
        <div class="mx1">|</div>
        <router-link class="muted" to="/reset">Forgot password</router-link>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { open as netlifyOpen } from 'netlify-identity-widget'
import Header from '@/components/Header.vue'

export default {
  components: {
    Header,
  },
  mounted() {
    netlifyOpen();
  },
}
</script>
