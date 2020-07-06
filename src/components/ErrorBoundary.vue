<template lang="pug">
  div(v-if="!!error")
    | Error: {{ error }}
  div(v-else)
    slot
</template>

<script lang="ts">
interface Data {
  error: Error?,
}

export default {
  data(): Data { return {
    error: null,
  }},
  errorCaptured(error: Error) {
    this.error = error
  },
}
</script>
