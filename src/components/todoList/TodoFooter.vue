<template>
  <div class="footer" v-show="todos.length>0" >
    <input type="checkbox" v-model="isAllCheck" class="inp-footer"/>
    <span>
      <!-- 使用ruduce写法 -->
      <!-- <span>已完成{{checkedItem}}/全部{{todos.length}}</span> -->
      <!-- 使用filter写法 -->
      <span>已完成{{checkNum.length}}/全部{{todos.length}}</span>
      <button class="footer-btn" v-show="checkNum.length" @click="delAllTodos">清除已完成任务</button>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
    delAll: Function,
    selAll: Function
  },
  methods: {
    // inpClick() {
    //   const checkedItem = this.todos.filter(item => {
    //     return item.check === true;
    //   });
    //   this.todos.forEach(item => {
    //     if (checkedItem.length != this.todos.length) {
    //       item.check = true;
    //       this.check = false
    //     } else if (checkedItem.length === this.todos.length) {
    //       item.check = false;
    //       this.check = false
    //     }
    //   });
    // },
    delAllTodos(){
      if(window.confirm(`确认删除所有已完成任务吗吗？`)){
        this.delAll()
      }
    }
  },
  computed: {
    // reudce写法
    // checkedItem() {
    //   return this.todos.reduce(
    //     (preTotal, item) => preTotal + (item.check ? 1 : 0),
    //     0
    //   );
    // },
    // filter写法
    checkNum(){
      return this.todos.filter(item => item.check === true)
    },

    isAllCheck: {
      // 使当前输入框获取最新的值
      get() {
        // ruduce写法
        // return this.checkedItem === this.todos.length && this.checkedItem > 0;
        // filter写法
        // 返回true则说明isAllCheck=true,即checkbox被选中。
        return this.checkNum.length === this.todos.length && this.todos.length > 0;
      },
      // 监视当前输入框最新的值
      set(value) {
        // value是当前checkbox最新的值，一但该值为true时，设置app中所有item的check为true
        this.selAll(value);
      }
    }
  }
};
</script>

<style>
.footer {
  margin: 0 auto;
  width: 300px;
  height: 30px;
  line-height: 30px;
  position: relative;
}
.footer-btn {
  position: absolute;
  width: 110px;
  right: 2px;
  top: 4px;
  background-color: rgb(240, 57, 12);
  border-style: none;
  border: 1px solid #4c4c4c;
  border-radius: 6px;
}
.inp-footer{
  margin-left: 6px;
}
</style>