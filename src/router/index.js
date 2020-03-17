import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
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
    path: '/blogger',
    name: 'Blogger',
    component: () => import('../views/Blogger.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/Menu.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
