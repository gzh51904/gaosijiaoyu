import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import router from './routers';
import store from './vuex';
import './assets/iconfont/iconfont.css'
import 'mint-ui/lib/style.css'
import 'lib-flexible/flexible'
import axios from 'axios'

Vue.prototype.$axios = axios;
// 配置基础路径
axios.defaults.baseURL = 'http://localhost:1904';

Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 把router实例注入到vue实例中
  store,
  router,

}).$mount('#app')