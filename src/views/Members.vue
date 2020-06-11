<template>
  <div>
    <Header>Members Only</Header>

    <transition appear appear-active-class="animate__animated animate__flipInX">
      <div class="md-flex justify-center">
        <div class="shadow block r2 p2 m2 center contrast-dark-mode md-col-6">
          <div class="h1">🔒</div>
          <div class="h3 bold">
            Member-zone to test Authentication
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header,
  },
}
</script>
