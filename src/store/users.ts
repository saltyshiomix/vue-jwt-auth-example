import { Module } from 'vuex';
import { RootState, UsersState } from './interfaces';
import { userService } from '../services';

export const users: Module<UsersState, RootState> = {
  namespaced: true,
  state: {
    loading: false,
    users: [],
    error: undefined,
  },
  actions: {
    getAllUsers({ commit }): void {
      commit('getAllUsersRequest');
      userService.getAllUsers().then(
        (users) => commit('getAllUsersSuccess', users),
        (error) => commit('getAllUsersFailure', error),
      );
    },
  },
  mutations: {
    getAllUsersRequest(state): void {
      state.loading = true;
    },
    getAllUsersSuccess(state, users): void {
      state.users = users;
      state.loading = false;
    },
    getAllUsersFailure(state, error): void {
      state.error = error;
      state.loading = false;
    },
  },
};
