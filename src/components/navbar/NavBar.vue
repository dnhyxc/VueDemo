<template>
  <div class="nav-bar">
    <div
      v-for="(item,index) in titles"
      :key="index"
      class="tab-item"
      :class="{active: index === indexCurrent}"
      @click="itemClick(index,item)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      indexCurrent: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemClick(index,item) {
      this.indexCurrent = index;
      this.$toast.show(item , 1000);
    }
  }
};
</script>

<style>
.nav-bar {
  display: flex;
  text-align: center;
}
.tab-item {
  flex: 1;
}
.active span {
  border-bottom: 2px solid red;
  padding: 3px 0;
}
.active {
  color: red;
}
</style>