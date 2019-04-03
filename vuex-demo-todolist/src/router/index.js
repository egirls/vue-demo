import Vue from 'vue';
import Router from 'vue-router';
import TodoList from '@/components/TodoList.vue';
import DoneTodos from '@/components/DoneTodos.vue'

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'TodoList',
      component: TodoList,
    },
    {
      path: '/completed-todos',
      name: 'DoneTodos',
      component: DoneTodos
    }
  ],
});
