/*
 * @Author: your name
 * @Date: 2021-12-08 10:42:28
 * @LastEditTime: 2022-03-16 15:24:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \VisualScreen\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局样式
import '@/styles/index.scss'
import * as echarts from 'echarts'
import vueSeamlessScroll from 'vue-seamless-scroll'
import './utils/flexible'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vueSeamlessScroll)
// 将全局echarts对象挂载到Vue的原型对象上
Vue.prototype.$echarts = echarts
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
