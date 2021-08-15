import Vue from 'vue'

const initialState = () => {
  return {
    userAddress: '',
    btcBalance: '',
    rewards: {},
  }
}

const state = initialState()

const mutations = {
  SET_ADDRESS(state, payload) {
    state.userAddress = payload
  },
  SET_BALANCE(state, payload) {
    state.btcBalance = payload
  },
  SET_REWARDS(state, payload) {
    Object.assign(state.rewards, payload)
  },
  LOGOUT(state, payload) {
    Object.assign(state, initialState())
  }
}

const getters = {
  userAddress: (state) => state.userAddress,
  btcBalance: (state) => state.btcBalance,
  rewards: (state) => state.rewards,
}

/*const actions = {
  async fetch_users({ commit }, payload) {
    const response = await asyncGetApi('getProfile')
    commit('SET_USER_UPDATE', response.data)
  },
}*/

export default {
  namespaced: true,
  // actions,
  state,
  getters,
  mutations,
}

