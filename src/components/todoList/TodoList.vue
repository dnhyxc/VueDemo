<template>
  <div class="list">
    <TodoItem v-for="(item,index) in todos" :key="index" :item="item" :index = "index" :remove="remove"/>
  </div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  name:'list',
  props:{
    todos:{
      type:Array
    },
    remove:{
      type:Function
    }
  },
  components:{
    TodoItem
  }
}
</script>

<style>
.list{
  margin: 0 auto;
  width: 302px;
}
</style>