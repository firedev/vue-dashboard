<template>
  <div>
    <div class="flex flex-wrap align-center justify-center mb2">
      <Header />
      <div class="auto md-show justify-start"></div>
      <div :class="selected" class="flex r1 overflow-hidden pointer">
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
      class="chart1"
      width="100%"
      height="500px"
      type="area"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<style>
.days, .weeks, .months { background: var(--light-blue); }
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

export default {
  components: {
    Header,
    apexchart: VueApexCharts,
  },
  data() {
    return {
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
      series: [
        {
          name: 'Active users',
          data: [
            [new Date('January 1, 2020'), 30],
            [new Date('January 5, 2020'), 70],
          ],
        },
        {
          name: 'New users',
          data: [
            [new Date('January 1, 2020'), 80],
            [new Date('January 5, 2020'), 20],
          ],
        },
      ],
    }
  },
  methods: {
    toggle(selected) {
      this.selected = selected
    },
  },
}
</script>
