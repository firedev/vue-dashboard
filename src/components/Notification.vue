<template lang="pug">
.z1.center-relative.absolute.top-0.my
  transition(
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp"
  )
    .relative.nowrap.my1.bg-orange.small.black.r1.px2.py1.mx-auto.shadow(
      v-show="show"
    )
      slot
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Notification extends Vue {
  show = false

  mounted() {
    this.show = true
    setTimeout(() => {
      this.show = true
    }, 2000)
  }
}
</script>
