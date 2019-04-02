<template>
  <div id="app">
    <img src="./assets/logo.png"/>
    <br />
    <span>TodoList</span>
    <input v-on:keyup.enter="addNewItem" v-model="newItem"/>
    <router-view :key="key"/>
</div>
</template>

<script>
    export default {
      name: 'App',

      data () {
        return {
          newItem: null
      }
  },

  computed: {
    key () {
      return this.$route.name !==  undefined
      ?this.$route.name + + new Date()
      :this.$route + + new Date()
  }
},

methods: {
    addNewItem () {
      const newTodo = {message: this.newItem, isFinished: false};
      this.$store.dispatch('addTodo',newTodo);
      this.newItem = ''
  }
}
}
</script>
