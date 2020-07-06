<template lang="pug">
  transition(
    enter-active-class="animate__animated animate__fadeInRight"
    appear
  )
    .flex.align-center.pointer(
      @click="toggleDarkMode"
    )
      span
        | ☀
      .r1.bg-white.p.flex.mx1
        .bg-blue.animated.r1.p1(
          :class="{ on: isDarkMode }"
        )
        .rounded.bg-white.p
      span.muted.small
        | ☾
</template>

<style scoped>
.on {
  transform: translateX(50%);
}
</style>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Toggle extends Vue {
  isDarkMode(): boolean {
    return this.$store.getters.isDarkMode
  }

  toggleDarkMode() {
    this.$store.commit('toggleDarkMode')
  }
}
</script>
