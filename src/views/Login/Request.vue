<template>
  <div class="flex mx-auto container justify-center">
    <form @submit.prevent="onSubmit">
      <div class="flex flex-column mx-auto" style="max-width: 40rem">
        <Header>Request</Header>
        <Notification v-if="message">{{ message }}</Notification>
        <transition
          appear
          enter-active-class="animate__animated animate__fadeIn delay-0"
          >
          <input
            v-model="email"
            type="email"
            autocomplete="username"
            class="my"
            placeholder="Email"
            />
        </transition>
        <div class="my"></div>
        <transition
          appear
          enter-active-class="animate__animated animate__fadeInUp delay-0"
          >
          <button class="py2">Request Access</button>
        </transition>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'

import Header from '@/components/Header.vue'
import Notification from '@/components/Notification.vue'

@Component({
  components: {
    Header,
    Notification,
  },
})
export default class Request extends Vue {
  email = ''
  message():string {
    return this.$route.params.message
  }
  onSubmit() {
    const slackURL = new URL('https://slack.com/api/chat.postMessage')
    const data = {
      channel: 'vue-dashboard',
      text: `${this.email} requested access to Dashboard`,
      token: 'xoxb-3022756781-1184397085204-greOlkTqRhOb8u3nQ0oDwdUq',
    }
    slackURL.search = new URLSearchParams(data).toString()
    fetch(slackURL.toString(), { method: 'POST' })
      .then(() =>
        this.$router.push({
          name: 'Login',
          params: {
            message: 'Thanks, your request will be reviewed in a bit.',
          },
        }),
      )
  }
}
</script>
