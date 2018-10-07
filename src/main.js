// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'

import '@/assets/css/index.styl'
import 'css/weui.css'
import 'css/common.styl'
import 'swiper/dist/css/swiper.css'
import 'css/iconfont.css'

Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  loading: require('assets/images/default_img.png') // 设置图片懒加载，loading: 默认显示图片
})
fastclick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
