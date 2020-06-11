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
          class="shadow block r2 p2 m2 center contrast-dark-mode flex-1"
        >
          <img :src="`/logos/${tech.name.toLowerCase()}-logo.svg`" />
          <div class="h3 bold">
            {{ tech.name }}
          </div>
          <div class="flex justify-center">
            <div
              v-for="use in tech.used"
              :key="use"
              class="r1 py px1 m small muted follow-dark-mode"
            >
              {{ use }}
            </div>
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
  components: {
    Header,
  },
  data() {
    return {
      stack: [
        { name: 'Vue', used: ['Components', 'Router', 'Transitions'] },
        { name: 'CSS3', used: ['Animation', 'Variables', 'Flexbox'] },
        { name: 'Netlify', used: ['Hosting', 'Authorization'] },
        { name: 'Slack', used: ['Messaging'] },
      ],
    }
  },
}
</script>
