import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '../components/login_register/login.vue'
import Register from '../components/login_register/register.vue'
import Tutormanage from '../components/Tutor_management/tutor_management.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/tutor_management',
      name: 'Tutormanage',
      component: Tutormanage
    },
    {path: '', redirect: '/login'}
  ]
})
