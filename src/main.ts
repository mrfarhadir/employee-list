import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
const API_KEY =
  "api-key 14:2022-03-11:emelie.nilsson@tretton37.com c783e0590bfa6171329edf789e92bcf0b79ea51addc8e8a7e7c6f7a937ded0a6";
const API_URL = "http://api-dev.1337co.de/v3";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
