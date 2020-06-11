<template>
  <nav
    id="nav"
    class="z1 animated relative flex p2 shadow follow-dark-mode"
  >
    <div v-for="(route, index) in routes" :key="index">
      <span v-if="!!index" class="px1 muted">|</span>
      <router-link :key="index" :to="route.path">{{ route.name }}</router-link>
    </div>
  </nav>
</template>

<style lang="scss">
#nav {
  a {
    opacity: 0.5;
    &.router-link-exact-active {
      font-weight: bold;
      opacity: 1;
    }
  }
}
</style>

<script>
import { routes } from '@/router'

export default {
  props: {
    isDarkMode: Boolean,
  },
  computed: {
    routes() {
      return routes
    },
  },
}
</script>
