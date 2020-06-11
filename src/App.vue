<template>
  <div
    id="app"
    class="animated"
    :class="{ 'light-mode': !isDarkMode, 'dark-mode': isDarkMode }"
  >
    <Nav :is-dark-mode="isDarkMode">
      <Toggle />
    </Nav>
    <div class="center container mx-auto px2">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  min-height: 100%;
}
a {
  color: var(--teal);
}
.light-mode,
.light-mode .follow-dark-mode,
.dark-mode .contrast-dark-mode {
  background-color: var(--light-gray);
  color: var(--dark-blue);
}
.dark-mode,
.dark-mode .follow-dark-mode,
.light-mode .contrast-dark-mode {
  background-color: var(--dark-blue);
  color: var(--white);
}
.light-mode .contrast-dark-mode {
  background-color: #47a;
}
.animate__animated {
  animation-duration: 0.6s;
}
</style>

<script>
import 'animate.css'
import Nav from '@/components/Nav.vue'
import Toggle from '@/components/Toggle.vue'

export default {
  components: {
    Nav,
    Toggle,
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode
    },
  },
}
</script>
