// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Tabs, TabPane} from 'element-ui'
import App from './app.vue'
import router from './router'

import './mock/mockServer'
import './common/utils/rem'
import './common/css/index.css'

Vue.config.productionTip = false;

Vue.use(Tabs);
Vue.use(TabPane);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
