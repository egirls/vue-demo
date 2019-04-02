import Vue from 'vue'
import Vuex from 'vuex'


//注册vuex
Vue.use(Vuex)

//导出vuex的实例，其中包含state，mutations，getters，actions
export default new Vuex.Store({
    state: {
        todos: [{
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
    },

    getters: {
        doneTodos: (state) => {
            const doneTodos = state.todos.filter(todo => todo.isFinished);
            return doneTodos;
        },

        allTodos: (state) => {
            return state.todos;
        }
    },

    mutations: {
        ADD_TODO: (state, newTodo) => {
            state.todos.push({
                message: newTodo.message,
                isFinished: newTodo.isFinished
            })
        },

        UPDATE_TODO: (state, newData) => {
            const todos = state.todos.splice(newData.itemKey, 1, newData.currentTodo)
            return todos;
        }
    },

    actions: {
        addTodo({ commit }, newTodo) {
            commit('ADD_TODO', newTodo)
        },
        updateTodo({ commit, state }, newData) {
            return new Promise(resolve => {
                commit('UPDATE_TODO', newData)
                resolve([...state.todos])
            })
        }
    }
})
