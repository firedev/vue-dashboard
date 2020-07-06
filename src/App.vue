<template lang="pug">
  div#app.animated(
    :class="{ 'light-mode': !isDarkMode, 'dark-mode': isDarkMode }"
  )
    ErrorBoundary
      Nav(:is-dark-mode="isDarkMode")
        Toggle
      .center.container.mx-auto.px2
        router-view
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

<script lang="ts">
import Vue from 'vue'
import 'animate.css'
import Nav from '@/components/Nav.vue'
import Toggle from '@/components/Toggle.vue'
import ErrorBoundary from '@/components/ErrorBoundary.vue'

export default Vue.extend({
  components: {
    Nav,
    Toggle,
    ErrorBoundary
  },
  computed: {
    isDarkMode(): boolean {
      return this.$store.getters.isDarkMode
    },
  },
})
</script>
