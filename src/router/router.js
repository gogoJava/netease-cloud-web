/**
 * 整个app的路由设置
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', // #
  routes: [{
    path: '/index',
    component: require('../views/index.vue'),
    children: [
      {
        path: 'recommend',
        component: require('../views/recommend/index.vue')
      }, {
        path: 'songList',
        component: require('../views/songList/index.vue')
      }, {
        path: 'radio',
        component: require('../views/radio/index.vue')
      }, {
        path: 'singer',
        component: require('../views/singer/index.vue')
      }
    ]
  }, {
    //   name: 'playerDetail',
    //   path: '/playerDetail/:id',
    //   component: require('../views/singer/index.vue')
    // }
    // }, {
    path: '/playListDetail/:id',
    name: 'playListDetail',
    component: require('../views/playListDetail/index.vue')
  }
  // }, {
  //   path: '*', redirect: '/index/rage'
  // }
  ]
})

export default router
