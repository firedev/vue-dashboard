<template>
  <div class="z1 center-relative absolute top-0 my">
    <transition
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOutUp"
    >
      <div
        v-show="show"
        class="relative nowrap my1 bg-orange small black r1 px2 py1 mx-auto shadow"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    this.show = true
    setTimeout(() => {
      this.show = false
    }, 2000)
  },
}
</script>
