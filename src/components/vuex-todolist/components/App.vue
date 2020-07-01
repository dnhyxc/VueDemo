<template>
  <div class="todo-list">
    <h1>TODOLIST</h1>
    <TodoHeader/>
    <TodoList/>
    <TodoFooter/>
  </div>
</template>

<script>
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
// import storageUtil from '../util/storageUtil'

export default {
  name: "app",
  mounted(){
    // 异步获取locaStorage中保存todos数据并显示
    this.$store.dispatch('reqTodos')
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  // 使用watch属性对数据进行监视
  // watch: {
  //   todos:{
  //     deep:true, // 开启深度监视
  //     // newValue为todos最新的值

  //     // 完整写法
  //     // handler:function (newValue) {
  //     //   // 将todos最新的JSON数据值保存到localStorage中
  //     //   // window.localStorage.setItem('todos_key',JSON.stringify(newValue))
  //     //   storageUtil.saveTodos(newValue)
  //     // }

  //     // 简便写法
  //     handler:storageUtil.saveTodos
  //   }
  // }
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