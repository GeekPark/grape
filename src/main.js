// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './routers.js'
import vsider from './components/Vsider.vue'
/* eslint-disable no-new */
Vue.component(vsider.name, vsider)

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
