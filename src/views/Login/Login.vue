<template>
  <div class="flex mx-auto container justify-center">
    <div class="absolute right-0 pr1">
      <Toggle @click="toggleDarkMode" :value="isDarkMode" />
    </div>
    <div class="flex flex-column mx-auto" style="max-width: 40rem">
      <img src="@/assets/logo.svg" />
      <h3>Sign In</h3>
      <input type="email" placeholder="Email" />
      <div class="my"></div>
      <input type="password" placeholder="Password" />
      <div class="my"></div>
      <button>Sign In</button>
      <div class="flex my">
        <router-link to="/register" class="white">
          Register an account
        </router-link>
        <div class="mx1">|</div>
        <router-link to="/reset">
          Forgot password
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Toggle from '@/components/Toggle.vue'

export default {
  data() { return {
    isDarkMode: true,
  }},
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
    },
  },
  components: {
    Toggle,
  },
}
</script>
