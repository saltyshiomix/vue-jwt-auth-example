import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import { configureFakeFetch } from './faker';

if (process.env.NODE_ENV !== 'production') {
  configureFakeFetch();
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h): Vue.VNode => h(App),
}).$mount('#app');
