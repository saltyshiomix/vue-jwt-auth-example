import { userService } from '../services';

export const users = {
  namespaced: true,
  state: {
    all: {}
  },
  actions: {
    getAllUsers({ commit }: any) {
      commit('getAllRequest');
      userService.getAllUsers()
        .then(
          users => commit('getAllSuccess', users),
          error => commit('getAllFailure', error),
        );
    }
  },
  mutations: {
    getAllRequest(state: any) {
      state.all = { loading: true };
    },
    getAllSuccess(state: any, users: any[]) {
      state.all = { items: users };
    },
    getAllFailure(state: any, error: any) {
      state.all = { error };
    }
  }
}
