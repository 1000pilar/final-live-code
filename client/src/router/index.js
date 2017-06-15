import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SignIn from '@/components/Signin'
import SignUp from '@/components/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
