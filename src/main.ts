import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axiosConfig from './plugins/axiosConfig'
import './assets/main.css'

Vue.prototype.$axios = axiosConfig;
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
