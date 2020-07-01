<template>
  <div class="header">
    <input
      class="inp"
      type="text"
      placeholder="请输入名称，按回车键添加"
      v-model="inputTodo"
      @keyup.enter="addItem"
    />
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      inputTodo: ""
    };
  },
  methods: {
    addItem() {
      const inputTodo = this.inputTodo.trim();
      if (!inputTodo) {
        alert("请输入内容！");
        return;
      }
      const todo = {
        title: inputTodo,
        complete: false
      };
      // this.add(todo)
      this.$store.dispatch("addTodo", todo);
      this.inputTodo = "";
      this.complete = "";
    }
  }
};
</script>

<style>
.header {
  width: 300px;
  margin: 0 auto;
}
.inp {
  width: 298px;
  height: 30px;
  /* margin-left: calc(50% - 150px); */
  margin-top: 20px;
  margin-bottom: 10px;
  /* border: 2px solid #4c4c4c; */
}
</style>