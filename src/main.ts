import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';

if (process.env.NODE_ENV !== 'production') {
  const { configureFakeFetch } = require('./faker');
  configureFakeFetch();
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
