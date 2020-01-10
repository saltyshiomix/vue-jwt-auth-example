import { userService } from '../services';
import router from '../router';

let initialState = {
  status: {},
  user: undefined,
};
const storaged = localStorage.getItem('user');
if (storaged) {
  const user = JSON.parse(storaged);
  if (user) {
    initialState = {
      status: {
        loggedIn: true,
      },
      user,
    };
  }
}

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ dispatch, commit }: any, { username, password }: any) {
      commit('loginRequest', { username });
      userService.login(username, password)
        .then(
          user => {
            commit('loginSuccess', user);
            router.push('/');
          },
          error => {
            commit('loginFailure', error);
            dispatch('alert/error', error, { root: true });
          },
        );
    },
    logout({ commit }: any) {
      userService.logout();
      commit('logout');
    },
  },
  mutations: {
    loginRequest(state: any, user: any) {
      state.status = { loggingIn: true };
      state.user = user;
    },
    loginSuccess(state: any, user: any) {
      state.status = { loggedIn: true };
      state.user = user;
    },
    loginFailure(state: any) {
      state.status = {};
      state.user = null;
    },
    logout(state: any) {
      state.status = {};
      state.user = null;
    },
  },
};
