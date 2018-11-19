import Vue from 'vue'
import Router from 'vue-router'
import 'firebaseui'
import firebaseApp from '@/firebase/firebaseApp.js'
import Main from '@/components/Main'
import List from '@/components/List'
import Sengen from '@/components/Sengen'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'

Vue.use(Router)

const fireAuth = firebaseApp.firebase().auth()

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'sengen',
          name: 'Sengen',
          component: Sengen,
          meta: { requiresAuth: true }
        },
        {
          path: 'list',
          name: 'List',
          component: List,
          meta: { requiresAuth: true }
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

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => {
    return record.meta.requiresAuth
  })
  if (requiresAuth) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    fireAuth.onAuthStateChanged(user => {
      if (user) {
        if (!user.emailVerified) {
          // メール認証が行われていない
          next({
            path: '/signin',
            query: { emailVerified: false }
          })
        } else {
          next()
        }
      } else {
        next({
          path: '/signin',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next() // next() を常に呼び出すようにしてください!
  }
})

export default router
