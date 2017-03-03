// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from './store'
import resource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import {sync} from 'vuex-router-sync'

Vue.use(resource)
Vue.use(VueLazyload)
// 将store与router同步
sync(store, router)
/* eslint-disable no-new */
// 路由器会创建一个 Root 实例，并且挂载到 body 元素上。
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
