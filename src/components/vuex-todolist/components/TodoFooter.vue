<template>
  <div class="footer" v-show="totalCount">
    <input type="checkbox" v-model="isAllCheck" class="inp-footer" />
    <span>
      <!-- 使用ruduce写法 -->
      <!-- <span>已完成{{checkedItem}}/全部{{todos.length}}</span> -->
      <!-- 使用filter写法 -->
      <span>已完成{{completeCount}}/全部{{totalCount}}</span>
      <button class="footer-btn" v-show="completeCount" @click="removeAllTodos">清除已完成任务</button>
    </span>
  </div>
</template>

<script>
import { mapGetters,  } from "vuex";
export default {
  methods: {
    // ...mapActions(["delAllTodos"]),
    removeAllTodos() {
      if (window.confirm(`确认删除所有已完成任务吗吗？`)) {
        this.$store.dispatch("delAllTodos");
      }
    }
  },
  computed: {
    ...mapGetters(["totalCount", "completeCount"]),
    isAllCheck: {
      // 使当前输入框获取最新的值
      get() {
        return this.$store.getters.isAllSelect;
      },
      // 监视当前输入框最新的值
      set(value) {
        // value是当前checkbox最新的值，一但该值为true时，设置app中所有item的check为true
        this.$store.dispatch("selectAllTodos", value);
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
.inp-footer {
  margin-left: 6px;
}
</style>