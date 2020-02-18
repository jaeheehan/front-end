import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage'
import LoginPage from '../views/LoginPage'
import RegisterPage from '../views/RegisterPage'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    }
  ]

})

export default router
