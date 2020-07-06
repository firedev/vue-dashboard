<template lang="pug">
  nav#nav.auto.bold.flex.flex-wrap.align-stretch.z1.animated.relative.flex.align-center.shadow.follow-dark-mode
    router-link(
      v-for="(route, index) in routes"
      :key="index"
      :to="route.path"
      exact-active-class="opaque selected"
      class="muted px1 py2 flex align-center button-hover"
    )
      img.mr2(
        v-if="index == 0"
        src="@/assets/logo.svg"
        :style="{ width: '2rem', height: '2rem' }"
      )
      | {{ route.name }}

    .auto.flex.flex-wrap.justify-end.align-center
      .flex.mx1
        slot

      router-link(
        v-if="!currentUser()"
        to="/login"
        exact-active-class="opaque selected"
        class="muted px1 py2 flex align-center button-hover"
      )
        | → Login

      router-link(
        v-if="currentUser()"
        to="/logout"
        exact-active-class="opaque selected"
        class="muted px1 py2 flex align-center nowrap button-hover"
      )
        | {{ currentUser().email }} →
</template>

<script lang="ts">
import { routes } from '@/router'
import { auth } from '@/main'

export default {
  props: {
    isDarkMode: Boolean,
  },
  computed: {
    routes() {
      return routes.filter((r) => r.meta && r.meta.isInMenu)
    },
  },
  methods: {
    currentUser() {
      return auth.currentUser()
    },
  },
}
</script>
