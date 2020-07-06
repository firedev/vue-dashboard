<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import { auth } from '@/main'

@Component
export default class Logout extends Vue {
  private mounted() {
      auth?.currentUser()?.logout()?.then(() =>
          this.$router.push({
            name: 'Login',
            params: { message: 'Bye!' },
          }),
        )
      // tslint:disable-next-line:no-console
      .catch((error: Error) => console.log('Error: ' + error))
  }

  private render() {
    return null
  }
}
</script>
