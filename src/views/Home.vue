<template>
  <div>
    <div class="flex align-center">
    <Header />
    <div class="auto justify-start">
    </div>
    <div class="bg-light-blue p r1 pointer">
      <div :class="selected" class="toggle flex r1 overflow-hidden">
        <div @click="toggle('days')" class="days animated button button-hover">Days</div>
        <div @click="toggle('weeks')" class="weeks animated button button-hover">Weeks</div>
        <div @click="toggle('months')" class="months animated button button-hover">Months</div>
      </div>
    </div>
  </div>
  </div>
</template>

<style>
.toggle * { background: var(--light-blue) }
.days .days, .weeks .weeks, .months .months { background: var(--blue) }
.days .days::after, .weeks .weeks::after, .months .months::after { opacity: 0 }
</style>
<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header,
  },
  data() {
    return {
      selected: 'days',
    }
  },
  methods: {
    toggle(selected) { this.selected = selected }
  },
}
</script>
