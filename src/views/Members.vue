<template>
  <div>
    <Header>Members Only</Header>

    <form class="flex justify-center" @submit.prevent="onSubmit">
      <div class="px1">
        <input v-model="searchEmail" type="text" placeholder="Email" />
      </div>
      <div class="px1">
        <button type="submit">Search</button>
      </div>
    </form>

    <transition
      appear
      appear-active-class="animate__animated animate__flipInX"
      leave-active-class="animate__animated animate__flipOutX"
    >
      <div v-show="show" class="md-flex justify-center md-col-4 m4">
        <div class="shadow block r2 p2 center contrast-dark-mode">
          <div class="h1">🔒</div>
          <div class="h3 bold">Member-zone</div>
        </div>
      </div>
    </transition>
    <div v-show="!show" class="animate__animated animate__fadeIn delay-5 my2">
      <table class="border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Trial ends</th>
          </tr>
        </thead>
        <tr>
          <td>{{ name }}</td>
          <td>{{ email }}</td>
          <td>{{ trialEndDate }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue'
import Vue from 'vue'

interface IRecord {
  name: string
  email: string
  trialEndDate: string
}

export default Vue.extend({
  components: {
    Header,
  },
  data() {
    return {
      email: '...',
      name: '...',
      searchEmail: 'nick@firedev.com',
      show: true,
      trialEndDate: '...',
    }
  },
  methods: {
    onSubmit() {
      this.show = false
      this.getUserData({ email: this.searchEmail })
    },
    getUserData(params: { email: string }) {
      const url = new URL(
        'https://firedev-vue-dashboard.netlify.app/.netlify/functions/getUserData',
      )
      url.search = new URLSearchParams(params).toString()

      this.name = '...'
      this.email = '...'
      this.trialEndDate = '...'

      fetch(url.toString())
        .then((res) => res.json())
        .then((data: IRecord) => {
          this.name = data.name
          this.email = data.email
          this.trialEndDate = data.trialEndDate
        })
    },
  },
})
</script>
