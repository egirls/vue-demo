<template>
  <div>
  已完成：   
    <ul>
      <li
        v-for="(item,itemKey) in doneTodos"
        :key="itemKey">
        {{item.message}}
      </li>
    </ul>
    <router-link to='/'>全部</router-link>
  </div>
</template>
<script>
export default {
  name: 'TodoList',
  data () {
    return {
      doneTodos: this.$store.getters.doneTodos
    }
  },

  methods: {

  }
}
</script>

<style>
  .finished {
    text-decoration: line-through;
  }
</style>
