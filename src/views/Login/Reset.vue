<template>
  <div class="flex mx-auto container justify-center">
    <form @submit.prevent="onSubmit">
      <div class="flex flex-column mx-auto" style="max-width: 40rem">
        <Header>Reset</Header>
        <Notification v-if="message">{{ message }}</Notification>
        <transition
          appear
          enter-active-class="animate__animated animate__fadeInDown delay-0"
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
          <button class="py2">Reset Password</button>
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
import { auth } from '@/main'

@Component({
  components: {
    Header,
    Notification,
  },
})
export default class Reset extends Vue {
  private email = ''

  get message() {
    return this.$route.params.message
  }

  private onSubmit(): void {
    const email = this.email
    auth
    .requestPasswordRecovery(email)
    .then(() =>
      this.$router.push({
        name: 'Login',
        params: { message: 'Please check your email.' },
      }),
    )
    // tslint:disable-next-line:no-console
    .catch((error) => console.log('Error: ' + error))
  }
}
</script>
