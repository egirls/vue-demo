<template>
  <div id="app">
    <img src="./assets/logo.png"/>
    <br />
    <span>TodoList</span>
    <input v-on:keyup.enter="addNewItem" v-model="newItem"/>
    <router-view/>
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

  methods: {
    addNewItem () {
      const newTodo = {message: this.newItem, isFinished: false};
      this.$store.commit('ADDTODO',newTodo);
      this.newItem = ''
    }
  }
}
</script>
