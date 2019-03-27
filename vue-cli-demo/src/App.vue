<template>
  <div id="app">
    <Navigation :counter = "count" />
    <router-view>
      <Content  :count = "count" />
      <Content2 />
    </router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Content from './components/Content.vue'
import Content2 from './components/Content2.vue'

export default {
  name: 'app',

  //数据
  data(){
      return {
        count: 0
      };
  },
  //组件
  components: {
    Navigation,
    Content,
    Content2
  }

}
</script>