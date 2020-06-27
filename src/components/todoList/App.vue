<template>
  <div class="todo-list">
    <h1>TODOLIST</h1>
    <TodoHeader :add="add" />
    <TodoList :todos="todos" :remove="remove" />
    <TodoFooter :todos="todos" :selAll="selAll" :delAll="delAll" />
  </div>
</template>

<script>
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

export default {
  name: "app",
  data() {
    return {
      // 从locaStorage(缓存)中读取todos，用于开启浏览器缓存。
      // 开启缓存即使浏览器关闭，下次打开浏览器，数据还是浏览器关闭之前的
      todos: JSON.parse(window.localStorage.getItem("todos_key") || "[]")
    };
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  methods: {
    add(todo) {
      this.todos.unshift(todo);
    },
    remove(index) {
      this.todos.splice(index, 1);
    },
    selAll(checked) {
      this.todos.forEach(item => {
        item.check = checked;
      });
    },
    delAll() {
      this.todos = this.todos.filter(item => !item.check);
    }
  },
  // 使用watch属性对数据进行监视
  watch: {
    todos:{
      deep:true, // 开启深度监视
      // newValue为todos最新的值
      handler:function (newValue) {
        // 将todos最新的JSON数据值保存到localStorage中
        window.localStorage.setItem('todos_key',JSON.stringify(newValue))
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.todo-list {
  border: 1px solid #ccc;
  width: 320px;
  margin: 30px auto;
}
h1 {
  text-align: center;
  color: rgb(228, 90, 26);
  margin-top: 10px;
}
</style>