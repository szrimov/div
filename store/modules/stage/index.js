export default {
  namespaced: true,
  state: () => ({
    result: null
  }),
  actions: {
    setResult({commit}, data) {
      let result = 0
      data.forEach(el => {
        result = el.games.reduce(
          (prev, curr) => prev + curr && curr.bestResult,
          0
        )
      })
      commit('SET_RESULT', result)
    }
  },
  mutations: {
    SET_RESULT(state, result) {
      state.result += result
    }
  },
  getters: {}
}
