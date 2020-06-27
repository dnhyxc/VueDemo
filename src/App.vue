<template>
  <div id="app">
    <NavBar :titles="['精选','新款','流行']"></NavBar>
  </div>
</template>

<script>
import NavBar from './components/navbar/NavBar';

export default {
  name:"app",
  data(){
    return{
      message:"NavBar"
    }
  },
  components:{
    NavBar
  }
}
</script>

<style>
</style>
