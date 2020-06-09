<template>
  <div v-on="$listeners" class="flex pointer">
    <span>☀</span>
    <div class="rounded bg-white p flex mx1">
      <div v-if="!value" class="rounded bg-blue p px1"></div>
      <div class="rounded bg-white p"></div>
      <div v-if="value" class="rounded bg-blue p px1"></div>
    </div>
    <span class="muted">☀</span>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
  },
}
</script>
