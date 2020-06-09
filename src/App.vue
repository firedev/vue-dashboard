<template>
  <div
    id="app"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <div class="absolute right-0 m2">
      <Toggle />
    </div>
    <Nav />
    <div class="center">
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
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode
    },
  },
}
</script>
