<template>
  <nav id="nav" class="auto bold flex align-stretch z1 animated relative flex align-center shadow follow-dark-mode">
    <router-link
      v-for="(route, index) in routes"
      :key="index"
      :to="route.path"
      exact-active-class="opaque selected"
      class="muted px1 py2 flex align-center button-hover"
    >
      <img
        v-if="index == 0"
        src="@/assets/logo.svg"
        class="mr2"
        :style="{ width: '2rem', height: '2rem' }"
      />
      {{ route.name }}
    </router-link>
    <div class="auto flex align-center"></div>
    <div class="flex mx1">
      <slot />
    </div>
    <router-link
      v-if="!currentUser()"
      to="/login"
      exact-active-class="opaque selected"
      class="muted px1 py2 flex align-center button-hover"
    >
      → Login
    </router-link>
    <router-link
      v-if="currentUser()"
      to="/logout"
      exact-active-class="opaque selected"
      class="muted px1 py2 flex align-center button-hover"
      >
      {{ currentUser().email }} →
    </router-link>
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
