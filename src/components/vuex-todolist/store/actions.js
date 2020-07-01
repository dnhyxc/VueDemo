// 包含多个接收组件通知触发mutations调用，间接改变状态的方法 的对象

import { ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, DEL_ALL_TODOS } from './mutation-types'

export default {
  // 接收TodoHeader组件中传递过来的参数todo，并将其传给mutations
  addTodo({ commit }, todo) {
    // 注意：commit传递参数接收的参数时，无论参数是什么类型，都需要使用{}包裹。
    commit(ADD_TODO, { todo })
  },
  deleteTodo({ commit }, index) {
    // 注意：commit传递参数接收的参数时，无论参数是什么类型，都需要使用{}包裹。
    commit(DELETE_TODO, { index })
  },
  selectAllTodos({ commit }, check) {
    commit(SELECT_ALL_TODOS, { check })
  },
  delAllTodos({ commit }) {
    commit(DEL_ALL_TODOS)
  }
}