import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import 'lib-flexible'
import Vconsole from 'vconsole'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.config.productionTip = false
console.log(process.env,123);
new Vconsole()
Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App,),
}).$mount('#app')
