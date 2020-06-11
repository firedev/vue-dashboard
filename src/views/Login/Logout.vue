<script>
import { auth } from '@/main'

export default {
  mounted() {
    auth
      .currentUser()
      .logout()
      .then(() =>
        this.$router.push({
          name: 'Login',
          params: { message: 'Bye!' },
        })
      )
      .catch(error => console.log('Error: ' + error))
  },
  render() {
    return null
  },
}
</script>
