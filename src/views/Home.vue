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
    <apexchart
      id="chart"
      width="100%"
      height="500px"
      type="area"
      :options="chartOptions"
      :series="series"
    ></apexchart>
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

<script>
import VueApexCharts from 'vue-apexcharts'
import Header from '@/components/Header.vue'
import { db } from '@/firebase'

export default {
  components: {
    Header,
    apexchart: VueApexCharts,
  },
  firestore() {
    return {
      traffic: {
        // collection reference.
        ref: db.collection('traffic'),
        // Bind the collection as an object if you would like to.
        objects: true,
        resolve: traffic => {
          const activeUsers = []
          const newUsers = []
          const todaysDate = new Date('February 7, 2020')
          const range = 7
          const previousDate = todaysDate.setDate(todaysDate.getDate() - range)
          Object.keys(traffic.activeUsers).map(key => {
            if (new Date(traffic.activeUsers[key][0]) > previousDate) {
              activeUsers.push(traffic.activeUsers[key])
            }
          })
          Object.keys(traffic.newUsers).map(key => {
            if (new Date(traffic.newUsers[key][0]) > previousDate) {
              newUsers.push(traffic.newUsers[key])
            }
          })
          this.series = [
            { name: 'active users', data: activeUsers },
            { name: 'new users', data: newUsers },
          ]
        },
        reject: console.log,
      },
    }
  },
  data() {
    return {
      ranges: { days: 7, weeks: 30, months: 365 },
      selected: 'days',
      chartOptions: {
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
      },
      series: [],
    }
  },
  methods: {
    toggle(selected) {
      this.selected = selected
      const activeUsers = []
      const newUsers = []
      const todaysDate = new Date('February 7, 2020')
      const range = JSON.parse(JSON.stringify(this.ranges))[selected]
      const previousDate = todaysDate.setDate(todaysDate.getDate() - range)

      this.$binding('activeUsers', db.collection('traffic').doc('activeUsers'))
        .then(data =>
          Object.keys(data).map(key => {
            if (new Date(data[key][0]) > previousDate) {
              activeUsers.push(data[key])
            }
          })
        )
        .catch(console.error)

      this.$binding('newUsers', db.collection('traffic').doc('newUsers'))
        .then(data =>
          Object.keys(data).map(key => {
            if (new Date(data[key][0]) > previousDate) {
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
    },
  },
}
</script>
