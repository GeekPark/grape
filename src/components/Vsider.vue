<template lang="jade">
ul#vsider
  li(v-for='item in list')
    router-link.link(:to='item.url') {{item.title}}
</template>

<script>
import login from './login'

const list = [{
  title: 'Index',
  url: '/'
},{
  title: 'Login',
  url: '/login'
},]

export default {
  name: 'vsider',
  data () {
    return {
      list
    }
  }
}
</script>

<style lang="stylus">
#vsider
  float left

  a
    text-decoration none
    color #2c3e50
</style>
