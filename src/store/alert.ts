export const alert = {
  namespaced: true,
  state: {
    type: null,
    message: null,
  },
  actions: {
    success({ commit }: any, message: string) {
      commit('success', message);
    },
    error({ commit }: any, message: string) {
      commit('error', message);
    },
    clear({ commit }: any, message: string) {
      commit('success', message);
    },
  },
  mutations: {
    success(state: any, message: string) {
      state.type = 'alert-success';
      state.message = message;
    },
    error(state: any, message: string) {
      state.type = 'alert-danger';
      state.message = message;
    },
    clear(state: any) {
      state.type = null;
      state.message = null;
    },
  },
};
