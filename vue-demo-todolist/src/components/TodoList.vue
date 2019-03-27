<template>
  <div>
    <span>TodoList</span>
    <input v-on:keyup.enter="addNewItem" v-model="newItem"/>
    <ul>
      <li
        v-for="item in items"
        :key="item"
        :class={finished:item.isFinished}
        @click="onClick(item)">
        {{item.message}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'TodoList',
  data () {
    return {
      items: [
        {
          message: '吃饭',
          isFinished: false
        },
        {
          message: '睡觉',
          isFinished: false
        },
        {
          message: 'anything',
          isFinished: true
        }
      ]
    }
  },
  methods: {
    addNewItem () {
      this.items.push({message: this.newItem, isFinished: false})
      this.newItem = ''
    },
    onClick (item) {
      item.isFinished = !item.isFinished
    }
  }
}
</script>

<style>
  .finished {
    text-decoration: line-through;
  }
</style>
