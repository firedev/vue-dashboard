<template>
  <div>
    <Header>Stack</Header>

    <div class="flex flex-wrap justify-center">
      <transition
        v-for="(tech, index) in stack"
        :key="index"
        appear
        appear-active-class="animate__animated animate__flipInY"
        >
        <div
          :class="`delay-${index}`"
          class="shadow block r2 p2 m2 center contrast-dark-mode"
        >
          <img :src="`/logos/${tech.toLowerCase()}-logo.svg`" />
          <div class="h3 bold">
            {{tech}}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 8rem;
  height: 5rem;
}
</style>
<script>
import Header from '@/components/Header.vue'

export default {
  data() {
    return {
      stack: [
        'Vue',
        'HTML5',
        'CSS3',
        'Netlify',
      ],
    }
  },
  components: {
    Header,
  },
}
</script>
