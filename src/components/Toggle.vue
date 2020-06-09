<template>
  <div class="flex pointer" @click="toggleDarkMode">
    <span>☀</span>
    <div class="rounded bg-white p flex mx1">
      <div v-if="!isDarkMode" class="rounded bg-blue p px1"></div>
      <div class="rounded bg-white p"></div>
      <div v-if="isDarkMode" class="rounded bg-blue p px1"></div>
    </div>
    <span class="muted">☀</span>
  </div>
</template>

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
