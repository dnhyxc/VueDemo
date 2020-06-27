<template>
  <div class="header">
    <input
      class="inp"
      type="text"
      placeholder="请输入名称，按回车键添加"
      v-model="msg"
      @keyup.enter="addItem"
    />
  </div>
</template>

<script>

export default {
  name:'',
  data(){
    return{
      msg:''
    }
  },
  props:{
    add:Function
  },
  methods:{
    addItem(){
      const msg = this.msg.trim()
      if(!msg){
        alert("请输入内容！")
        return
      }
      const todo = {
        msg,
        check:false
      }
      this.add(todo)
      this.msg = ''
      this.check=''
    }
  }
}
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