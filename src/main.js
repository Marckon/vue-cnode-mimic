// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import store from './store'
/*引入自定义工具类*/
import Util from './util/util'

Vue.config.productionTip = false
Vue.use(ElementUI)
axios.defaults.baseURL='https://cnodejs.org/api/v1'
Vue.prototype.$http=axios
Vue.prototype.$util=Util

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
