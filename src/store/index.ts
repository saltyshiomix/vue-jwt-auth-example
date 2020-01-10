import Vue from 'vue';
import Vuex from 'vuex';
import { alert } from './alert';
import { auth } from './auth';
import { users } from './users';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    alert,
    auth,
    users,
  },
});

export default store;
