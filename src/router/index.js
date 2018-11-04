import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import List from '@/components/List'
import Sengen from '@/components/Sengen'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
