<template>
  <div id="app">
    <Navigation :count = "count" />
    <Content  :count = "count" />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Content from './components/Content.vue'

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
    Content
  }
}
</script>