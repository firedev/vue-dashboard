<template>
  <nav id="nav" class="flex p2 mb2 shadow">
    <div v-for="(route, index) in routes" :key="index">
      <span v-if="!!index" class="px1 muted">|</span>
      <router-link :key="index" :to="route.path">{{ route.name }}</router-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
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
  computed: {
    routes() {
      return routes
    },
  },
}
</script>
