// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vmodal from 'vue-js-modal'
import VeeValidate from 'vee-validate'
import 'toastr/toastr.scss'
// import VueAnalytics from 'vue-analytics'
import AsyncComputed from 'vue-async-computed'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.css'
import './base.css'

Vue.config.productionTip = false

Vue.use(VeeValidate)
Vue.use(vmodal)
Vue.use(AsyncComputed)
Vue.use(require('vue-moment'))
Vue.use(require('vue-scroll-to'))

const store = require('@/store').default

// loadUser must be dispatched before the Vue app is created. Otherwise the
// router authentication guards won't work properly.
if (localStorage.token) {
  store.dispatch('loadUser')
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
