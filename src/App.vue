<template>
  <div
    id="app"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <div class="absolute right-0 m2">
      <Toggle :value="isDarkMode" @click="toggleDarkMode" />
    </div>
    <Nav />
    <div class="center">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
body {
  background-color: var(--dark-blue);
}
a {
  color: var(--teal);
}
.light-background {
  background-color: var(--light-gray);
  color: var(--dark-blue);
}
.dark-background {
  background-color: var(--dark-blue);
  color: var(--white);
}
</style>

<script>
import Nav from '@/components/Nav.vue'
import Toggle from '@/components/Toggle.vue'

export default {
  components: {
    Nav,
    Toggle,
  },
  data() {
    return {
      isDarkMode: true,
    }
  },
  updated() {
    document.body.style.backgroundColor = window.getComputedStyle(
      document.getElementById('app')
    ).backgroundColor
    document.body.style.color = window.getComputedStyle(
      document.getElementById('app')
    ).color
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
    },
  },
}
</script>
