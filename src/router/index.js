import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import List from '@/components/List'
import Sengen from '@/components/Sengen'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'sengen',
          name: 'Sengen',
          component: Sengen
        },
        {
          path: 'list',
          name: 'List',
          component: List
        }
      ]
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})
