// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', // SINGLE POINT OF CONTACT WITH ACTUAL DOM
  router,  //   router: router
  components: { App },
  template: '<App/>'
})
