import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

import Content from './components/Content.vue'
import Content2 from './components/Content2.vue'

const  router = new VueRouter({
	mode:'history',
	routes: [
        {path: '/home', component: Content},
	    {path: '/page', component: Content2},
	]
})

new Vue({
	router,
    render: h => h(App),
}).$mount('#app')
