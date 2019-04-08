import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

Vue.use(Router, store)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    component: () => import('./components/pages/Frame.vue'),
    children: [{
      path: '',
      name: 'Home',
      component: () => import('./components/common/Home.vue'),
      beforeEnter (to, from, next) {
        const userRole = store.state.userRole
        console.log(userRole)
        if (userRole === '管理员') {
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
      name: 'PersonalMessageTable',
      component: () => import('./components/common/PersonalMessageTable.vue')
    },
    {
      path: 'theChart',
      name: 'TheChart',
      component: () => import('./components/common/TheChart.vue')
    },
    {
      path: 'theECharts',
      name: 'TheECharts',
      component: () => import('./components/common/TheECharts.vue')
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
