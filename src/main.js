// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import ElementUI from './plugins/elements'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './mock/index'

import '@/assets/css/base-css.css'
import '@/icons/iconfont.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
// ElementUI.forEach(element => {
//   Vue.use(element)
// })

window.addEventListener('popstate', function() {
  history.pushState(null, null, document.URL)
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
})
