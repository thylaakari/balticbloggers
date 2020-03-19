import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      auth: true
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('../views/Welcome.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue')
  },
  {
    path: '/enter',
    name: 'Enter',
    component: () => import('../views/Enter.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/blogger/:id',
    name: 'Blogger',
    meta: {
      auth: true
    },
    component: () => import('../views/Blogger.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    meta: {
      auth: true
    },
    component: () => import('../views/Menu.vue')
  },
  {
    path: '/filtere',
    name: 'Filter',
    meta: {
      auth: true
    },
    component: () => import('../views/Filtere.vue')
  },
  {
    path: '/search',
    name: 'Search',
    meta: {
      auth: true
    },
    component: () => import('../views/Search.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = Backendless.LocalCache.get("user-token")
  const requireAuth = to.matched.some(record => record.meta.auth)
  if (requireAuth && !currentUser) {
    next('/welcome')
  }
  else {
    next()
  }
})

export default router
