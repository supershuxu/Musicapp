import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vant);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
