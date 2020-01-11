import { Module } from 'vuex';
import { RootState, AlertState } from './interfaces';

export const alert: Module<AlertState, RootState> = {
  namespaced: true,
  state: {
    type: undefined,
    message: undefined,
  },
  actions: {
    success({ commit }, message: string): void {
      commit('success', message);
    },
    error({ commit }, message: string): void {
      commit('error', message);
    },
    clear({ commit }, message: string): void {
      commit('success', message);
    },
  },
  mutations: {
    success(state, message: string): void {
      state.type = 'alert-success';
      state.message = message;
    },
    error(state, message: string): void {
      state.type = 'alert-danger';
      state.message = message;
    },
    clear(state): void {
      state.type = undefined;
      state.message = undefined;
    },
  },
};
