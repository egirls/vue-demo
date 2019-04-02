<template>
    <div>
        全部：
        <ul>
            <li v-for="(item,itemKey) in allTodos" :key="itemKey" :class="{finished:item.isFinished}" @click="onClick(item,itemKey)">
                {{item.message}}
            </li>
        </ul>
        <router-link to='completed-todos'>已完成</router-link>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'TodoList',
    computed: {
        ...mapGetters([
            'allTodos'
        ]),
    },

    methods: {

        onClick(item, itemKey) {
            const currentTodo = { message: item.message, isFinished: !item.isFinished };
            this.$store.dispatch('updateTodo', { itemKey, currentTodo });
        },
    }
}

</script>
<style>
.finished {
    text-decoration: line-through;
}

</style>
