import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Moralis from 'moralis'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Moralis)
Vue.config.productionTip = false

library.add(fas)
library.add(fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

require('@/style.css')


Moralis.initialize("aNasMyiEwoVKpmpk37PoegKx3OXHaj35Eelj0Anx", "", "KD7XAmprYVWPBs68Yzd5mtqYOEWRQpQemfCPpR7H");

Moralis.serverURL = 'https://twgdwfe9yovt.moralisweb3.com:2053/server'

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
