<template>
  <div>
    <Header>Stack</Header>

    <div class="flex flex-wrap justify-center container mx-auto">
      <transition
        v-for="(tech, index) in stack"
        :key="index"
        appear
        appear-active-class="animate__animated animate__flipInY"
      >
        <a
          :class="`delay-${index}`"
          class="shadow button-hover block r2 p2 m2 center contrast-dark-mode flex-1 md-col-4"
          style="max-width: 20rem"
          :href="tech.link"
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
        </a>
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
<script lang="ts">
import Header from '@/components/Header.vue'

export default {
  components: {
    Header,
  },
  data() {
    return {
      stack: [
        {
          link: 'https://vuejs.org',
          name: 'Vue',
          used: ['Components', 'Router', 'Transitions'],
        },
        {
          link: 'https://typescriptlang.org',
          name: 'Typescript',
          used: ['Type checking'],
        },
        {
          link: 'https://w3c.org',
          name: 'CSS3',
          used: ['Animation', 'Variables', 'Flexbox'],
        },
        {
          link: 'https://netlify.app',
          name: 'Netlify',
          used: ['Hosting', 'Functions', 'Authorization'],
        },
        {
          link: 'https://slack.com',
          name: 'Slack',
          used: ['Messaging'],
        },
        {
          link: 'https://apexcharts.com',
          name: 'ApexCharts',
          used: ['Charts'],
        },
        {
          link: 'https://firebase.com',
          name: 'Firebase',
          used: ['Firestore'],
        },
      ],
    }
  },
}
</script>
