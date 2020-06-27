<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#21b085">
      <img slot="item-icon" src="../assets/image/home.png" alt />
      <img slot="item-icon-active" src="../assets/image/home-selected.png" alt />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="#21b085">
      <img slot="item-icon" src="../assets/image/category.png" alt />
      <img slot="item-icon-active" src="../assets/image/category-selected.png" alt />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="#21b085">
      <img slot="item-icon" src="../assets/image/shopcart.png" alt />
      <img slot="item-icon-active" src="../assets/image/shopcart-selected.png" alt />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#21b085">
      <img slot="item-icon" src="../assets/image/personal.png" alt />
      <img slot="item-icon-active" src="../assets/image/personal-selected.png" alt />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";
export default {
   name:'MainTabbar',
   components:{
      TabBar,
      TabBarItem
   }
};
</script>

<style>
</style>