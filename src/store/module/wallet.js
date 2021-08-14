/*import Vue from 'vue'

const state = initialState()

const mutations = {
  SET_ADDRESS() {
  	
  }
}

const getters = {
  user: (state) => state.user,
}

const actions = {
  async fetch_users({ commit }, payload) {
    const response = await asyncGetApi('getProfile')
    commit('SET_USER_UPDATE', response.data)
  },
  async signup({ commit }, payload) {
    const response = await asyncPostApi('register', payload)
    commit('SET_USER', response.data)
  },
  async login({ commit }, payload) {
    const response = await asyncPostApi('login', payload)
    commit('SET_USER', response.data)
  },
  async logout({ commit }) {
    commit('LOGOUT')
  },
}

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations,
}

*/