<template>
  <div id="app">
    <router-view></router-view>
    <MainTabbar></MainTabbar>
  </div>
</template>

<script>
import MainTabbar from './tabbar/MainTabbar';

export default {
  name: "App",
  components: {
    MainTabbar
  }
};
</script>

<style>
  @import url(./assets/css/base.css);
</style>
