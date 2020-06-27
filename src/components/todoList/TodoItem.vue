<template>
  <div
    class="item"
    @mouseenter="handleMouse(true)"
    @mouseleave="handleMouse(false)"
    :style="{background:bgcolor}"
  >
    <input type="checkbox" v-model="item.check" class="inp-item" />
    <span class="msg">{{item.msg}}</span>
    <button @click="removeItem" class="btn" v-show="isShow">删除</button>
  </div>
</template>

<script>
export default {
  name: "item",
  data() {
    return {
      bgcolor: "white",
      isShow: false
    };
  },
  props: {
    item: {
      type: Object
    },
    index: {
      type: Number
    },
    remove: {
      type: Function
    }
  },
  methods: {
    handleMouse(isEnter) {
      if (isEnter) {
        this.bgcolor = "pink";
        this.isShow = true;
      } else {
        this.bgcolor = "white";
        this.isShow = false;
      }
    },
    removeItem() {
      const { item, index, remove } = this;
      if (window.confirm(`确认删除${item.msg}吗？`)) {
        remove(index);
      }
    }
  }
};
</script>

<style>
.item {
  position: relative;
  margin-top: 5px;
  width: 300px;
  height: 30px;
  line-height: 30px;
  margin-left: calc(50% - 150px);
  border: 1px solid black;
  margin-bottom: 5px;
}
.msg {
  margin-left: 10px;
}
.btn {
  position: absolute;
  width: 50px;
  right: 5px;
  top: 4px;
  background-color: rgb(240, 57, 12);
  border-style: none;
  border: 1px solid #4c4c4c;
  border-radius: 6px;
}
.inp-item {
  margin-left: 5px;
}
</style>