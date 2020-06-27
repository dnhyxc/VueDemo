/*
使用LocalStorage储存数据的工具模块
*/

const TODOS_KEY = 'todos_key'
export default {
  saveTodos(todos) {
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  },
  readTodos() {
    return JSON.parse(window.localStorage.getItem("todos_key") || "[]")
  }
}