import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    component: () => import('./components/common/Content.vue'),
    children: [{
      path: '',
      name: 'Home',
      component: () => import('./components/common/Home.vue')
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
    path: '*',
    name: '404',
    component: () => import('./components/pages/404.vue')
  }
  ]
})
