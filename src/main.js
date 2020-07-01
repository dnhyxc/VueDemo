import Vue from 'vue'
import Fastclick from 'fastclick'
// import App from './App.vue'
import toast from './components/toast/index'
// import App from './components/tabbar/TabBarApp.vue'
import router from './components/tabbar/router'

import TodoList from './components/vuex-todolist/components/App.vue'

import store from './components/vuex-todolist/store'

Vue.config.productionTip = false

Vue.use(toast)

// 使用fastclick解决移动端300ms的延迟问题
Fastclick.attach(document.body)

new Vue({
  router,
  render: h => h(TodoList),
  store
}).$mount('#app')
