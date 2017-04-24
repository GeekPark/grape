import Vue       from 'vue'
import VueRouter from 'vue-router'
import Login from './pages/Login.vue'
import Index from './pages/Index.vue'

Vue.use(VueRouter)

const base = 'GRAPE - '

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/',
      component: Index,
      meta: {title: `${base}Index`}
    },
    { path: '/login',
      component: Login,
      meta: {title: `${base}Login`}
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
