<template>
  <nav id="nav" class="z1 animated relative flex p2 shadow follow-dark-mode">
    <div class="auto flex">
      <div v-for="(route, index) in routes" :key="index">
        <span v-if="!!index" class="px1 muted">|</span>
        <router-link
          :key="index"
          :to="route.path"
          exact-active-class="opaque bold"
          class="muted"
          >{{ route.name }}</router-link
        >
      </div>
    </div>
    <router-link
      v-if="!currentUser()"
      to="/login"
      exact-active-class="opaque bold"
      class="px2 muted pointer bold"
    >
      → Login
    </router-link>
    <router-link
      v-if="currentUser()"
      to="/logout"
      class="px2 muted poinler bold"
    >
      {{ currentUser().email }} →
    </router-link>
    <slot />
  </nav>
</template>

<script>
import { routes } from '@/router'
import { auth } from '@/main'

export default {
  props: {
    isDarkMode: Boolean,
  },
  computed: {
    routes() {
      return routes.filter(r => r.meta && r.meta.isInMenu)
    },
  },
  methods: {
    currentUser() {
      return auth.currentUser()
    },
  },
}
</script>
