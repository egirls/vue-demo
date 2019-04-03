import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

Vue.use(Router, store)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    component: () => import('./components/common/Content.vue'),
    children: [{
      path: '',
      name: 'Home',
      component: () => import('./components/common/Home.vue'),
      beforeEnter (to, from, next) {
        const userRole = store.state.userRole
        if (userRole === 'user') {
          next()
        } else {
          next({
            path: '/login'
          })
        }
      }
    },
    {
      path: 'personal-message-table',
      name: 'PersonalMessageTßable',
      component: () => import('./components/common/PersonalMessageTable.vue')
    }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./components/pages/Login.vue')
  },
  {
    path: '/PageNotFound',
    name: 'PageNotFound',
    component: () => import('./components/pages/PageNotFound.vue')
  },
  {
    path: '*',
    redirect: '/PageNotFound'
  }
  ]
})
