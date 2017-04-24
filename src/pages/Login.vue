<template lang="jade">
#login-view.view
  grape-login
</template>

<script>
import Login from '../components/login'
export default {
  name: 'login-view',
  components: {
    'grape-login': Login
  }
}
</script>

<style lang="stylus">
</style>
