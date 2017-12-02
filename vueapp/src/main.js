// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import './assets/css/reset.css'
import './assets/css/common.css'
import './assets/js/rem.js'
import store from '@/vuex/store'
import VueTouch from 'vue-touch'

//v-touch需要起别名
Vue.use(VueTouch, {name: 'v-touch'})
Vue.config.productionTip = false
// 代理接口
global.API_PROXY = 'https://bird.ioliu.cn/v1/?url='

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
