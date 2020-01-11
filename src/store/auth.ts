import { Module } from 'vuex';
import { RootState, AuthState } from './interfaces';
import { userService } from '../services';
import router from '../router';

let initialState = {
  loggingIn: false,
  loggedIn: false,
  user: undefined,
};

const storaged = localStorage.getItem('user');

if (storaged) {
  const user = JSON.parse(storaged);
  if (user) {
    initialState = {
      loggingIn: false,
      loggedIn: true,
      user,
    };
  }
}

export const auth: Module<AuthState, RootState> = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ dispatch, commit }, { username, password }): void {
      commit('loginRequest', { username });
      userService.login(username, password).then(
        (user) => {
          commit('loginSuccess', user);
          router.push('/');
        },
        (error: Error) => {
          commit('loginFailure', error);
          dispatch('alert/error', error, { root: true });
        },
      );
    },
    logout({ commit }): void {
      userService.logout();
      commit('logout');
    },
  },
  mutations: {
    loginRequest(state, user): void {
      state.loggingIn = true;
      state.user = user;
    },
    loginSuccess(state, user): void {
      state.loggedIn = true;
      state.user = user;
    },
    loginFailure(state): void {
      state.loggingIn = false;
      state.loggedIn = false;
      state.user = undefined;
    },
    logout(state): void {
      state.loggingIn = false;
      state.loggedIn = false;
      state.user = undefined;
    },
  },
};
