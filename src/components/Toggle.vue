<template>
  <transition
    appear
    enter-active-class="animate__animated animate__slideInRight"
  >
    <div class="flex align-center pointer" @click="toggleDarkMode">
      <span>☀</span>
      <div class="r1 bg-white p flex mx1">
        <div class="bg-blue animated r1 p1" :class="{ on: isDarkMode }"></div>
        <div class="rounded bg-white p"></div>
      </div>
      <span class="muted small">☾</span>
    </div>
  </transition>
</template>

<style scoped>
.on {
  transform: translateX(50%);
}
</style>

<script>
export default {
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode
    },
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit('toggleDarkMode')
    },
  },
}
</script>
