
import 'babel-polyfill' // 浏览器兼容性
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue18n from 'vue-i18n'

//使用引入
Vue.use(Vue18n);

let locale:any = (function () {
  if (localStorage.getItem('lang')) {
    return localStorage.getItem('lang')
  }
  return 'zh-CN'
}())
//定义标识符
const i18n = new Vue18n({
    locale,    // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'zh-CN': require('./assets/lang/cn'),   // 中文语言包
        'en-US': require('./assets/lang/en')    // 英文语言包
    }
})

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
