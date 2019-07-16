import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './vuex'
import axios from 'axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.prototype.$axios=axios;
axios.defaults.baseURL = 'http://localhost:1904';




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
