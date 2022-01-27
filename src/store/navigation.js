export default {
  namespaced: true,
  // data 와 동일한 개념
  state: () => ({
    isShow: false
  }),
  // computed 와 동일한 개념
  getters: {
 
  },
  mutations: {
    setState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
        // state.isShow = !state.isShow
      })
    }
  },
  // methods 와 동일한 개념
  actions: {
    onNav({ commit }) {
      commit('setState', {
        isShow: true
      })
    },
    offNav({ commit }) {
      commit('setState', {
        isShow: false
      })
    }
  }
}
