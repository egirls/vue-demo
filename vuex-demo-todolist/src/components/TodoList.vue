<template>
  <div>
   全部：
    <ul>
      <li
        v-for="(item,itemKey) in items"
        :key="itemKey"
        :class="{finished:item.isFinished}"
        @click="onClick(item,itemKey)">
        {{item.message}}
      </li>
    </ul>
    <router-link to='completed-todos'>已完成</router-link>
  </div>
</template>
<script>
export default {
  name: 'TodoList',
  data () {
    return {
      items: this.$store.getters.allTodos,
    }
  },

  methods: {

    onClick (item,itemKey) {
      const currentTodo = {message: item.message, isFinished: !item.isFinished};
      this.$store.commit('UPDATETODO', {itemKey, currentTodo});
    },
  }
}
</script>

<style>
  .finished {
    text-decoration: line-through;
  }
</style>
