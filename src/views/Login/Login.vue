<template>
  <div class="flex mx-auto container justify-center">
    <form @submit.prevent="onSubmit">
      <div class="flex flex-column mx-auto" style="max-width: 40rem">
        <Header>Login</Header>
        <Notification v-if="!!message">{{ message }}</Notification>
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
        <transition
          appear
          enter-active-class="animate__animated animate__fadeIn delay-0"
          >
          <input
            v-model="password"
            type="password"
            autocomplete="current-password"
            class="my"
            placeholder="Password"
            />
        </transition>
        <div class="my"></div>
        <transition
          appear
          enter-active-class="animate__animated animate__fadeInUp delay-0"
          >
          <button class="py2">Sign In</button>
        </transition>
        <transition
          appear
          enter-active-class="animate__animated animate__fadeIn delay-1"
          >
          <div class="flex justify-center my2">
            <router-link to="/request">Request an account</router-link>
        <div class="mx1">|</div>
        <router-link class="muted" to="/reset">Forgot password</router-link>
          </div>
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
  }
})
export default class Logout extends Vue {
  email = ''
  password = ''

  get message() {
    return this.$route.params.message
  }

  onSubmit() {
    const email = this.email
    const password = this.password
    auth
      .login(email, password, true)
      .then(() => this.$router.replace('/'))
  }
}
</script>
