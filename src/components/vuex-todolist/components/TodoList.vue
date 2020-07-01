<template>
  <div class="list">
    <TodoItem
      v-for="(item,index) in todos"
      :key="index"
      :item="item"
      :index="index"
    />
  </div>
</template>

<script>
import TodoItem from './TodoItem'
import {mapState} from 'vuex'

export default {
  name:'list',
  components:{
    TodoItem
  },
  computed:{
    ...mapState(['todos'])
  }
}
</script>

<style>
.list {
  margin: 0 auto;
  width: 302px;
}
</style>