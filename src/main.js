import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import router from './router.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.prototype.http = Axios;
Vue.config.productionTip = false

import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://localhost:4000',  //
}))

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
