<template>
    <div>
        已完成：
        <ul>
            <li v-for="(item,itemKey) in doneTodos" :key="itemKey">
                {{item.message}}
            </li>
        </ul>
        <router-link to='/'>全部</router-link>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'TodoList',

    computed: {
        ...mapGetters([
            'doneTodos'
        ]),
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
