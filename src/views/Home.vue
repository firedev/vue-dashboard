<template>
  <div>
    <div class="flex flex-wrap align-center justify-center mb2">
      <Header></Header>
      <div class="auto md-show justify-start"></div>
      <div :class="selected" class="toggle flex r1 overflow-hidden pointer">
        <div class="days animated button button-hover" @click="toggle('days')">
          Days
        </div>
        <div
          class="weeks animated button button-hover"
          @click="toggle('weeks')"
        >
          Weeks
        </div>
        <div
          class="months animated button button-hover"
          @click="toggle('months')"
        >
          Months
        </div>
      </div>
    </div>
    <VueApexCharts
      id="chart"
      width="99%"
      height="500px"
      type="area"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<style>
.toggle .days,
.toggle .weeks,
.toggle .months {
  background: var(--light-blue);
}
.days .days,
.weeks .weeks,
.months .months {
  background: var(--blue);
}
.days .days::after,
.weeks .weeks::after,
.months .months::after {
  opacity: 0;
}
.dark-mode line,
.dark-mode text {
  color: var(--light-gray);
  stroke: var(--light-gray);
}
</style>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'

import VueApexCharts from 'vue-apexcharts'
import Header from '@/components/Header.vue'
import { db } from '@/firebase'

type Users = [string, number][]
type Series = {
  name: string
  data: Users
}[]

@Component({
  components: {
    Header,
    VueApexCharts,
  },
})
export default class Home extends Vue {
  ranges = { days: 7, weeks: 30, months: 365 }
  selected = 'days'
  chartOptions = {
    colors: ['#14f1d9', '#7b42f6'],
    legend: {
      labels: {
        colors: [this.$store.getters.isDarkMode ? 'white' : 'black'],
      },
      position: 'top',
    },
    tooltip: {
      theme: 'dark',
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    chart: {
      id: 'users',
    },
    xaxis: {
      type: 'datetime',
    },
  }
  series: Series = []

  toggle(selected: string) {
    this.selected = selected
    const activeUsers: Users = []
    const newUsers: Users = []
    const todaysDate = new Date('February 7, 2020')
    const range = JSON.parse(JSON.stringify(this.ranges))[selected]
    const previousDate = todaysDate.setDate(todaysDate.getDate() - range)

    this.$binding('activeUsers', db.collection('traffic').doc('activeUsers'))
      .then((data: Users) =>
        Object.keys(data).map((key) => {
          if (new Date(data[key][0]).getTime() > previousDate) {
            activeUsers.push(data[key])
          }
        })
      )
      .catch(console.error)

    this.$binding('newUsers', db.collection('traffic').doc('newUsers'))
      .then((data: Users) =>
        Object.keys(data).map((key) => {
          if (new Date(data[key][0]).getTime() > previousDate) {
            newUsers.push(data[key])
          }
        })
      )
      .catch(console.error)

    this.series = [
      { name: 'active users', data: activeUsers },
      { name: 'new users', data: newUsers },
    ]
    window.dispatchEvent(new Event('resize'))
  }
}
</script>
