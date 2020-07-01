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
import storageUtil from '../util/storageUtil'

export default {
  name:'list',
  components:{
    TodoItem
  },
  computed:{
    ...mapState(['todos'])
  },
  // 监视todos的所有变化,注意:监视todos不是任何组件中都可以做的,需要该组件中具有todos数据才行
  watch:{
    todos:{
      // 开启深度监视
      deep:true,
      // 一旦todos变化,将其保存到localStorage中
      handler:storageUtil.saveTodos
    }
  }
}
</script>

<style>
.list {
  margin: 0 auto;
  width: 302px;
}
</style>