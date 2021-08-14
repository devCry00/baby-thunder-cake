import Vue from 'vue'
import Vuex from 'vuex'

import wallet from './module/wallet'

Vue.use(Vuex)
const store = () => {
  return new Vuex.Store({
    modules: {
      wallet,
    },
  })
}
export default store