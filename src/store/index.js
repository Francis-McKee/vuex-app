import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  getters: {
  },
  mutations: {
    inc(state) {
      state.count++
    },
    desc(state) {
      state.count--
    }
  },
  actions: {
    callWithDelay({commit}) {
      setTimeout(() => {
        commit('inc')
      },2000)
    }
  },
  modules: {
  }
})
