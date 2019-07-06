import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from "vuetify";
import VueRouter from 'vue-router'
import router from '@/router'


Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuetify);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
