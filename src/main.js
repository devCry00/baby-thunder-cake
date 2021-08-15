import 'vuejs-dialog/dist/vuejs-dialog.min.css'
import App from './App.vue'
import Moralis from 'moralis'
import router from './router'
import store from './store'
import Vue from 'vue'
import VuejsDialog from 'vuejs-dialog'; // docs -- https://www.npmjs.com/package/vuejs-dialog
import VuejsDialogMixin from 'vuejs-dialog/dist/vuejs-dialog-mixin.min.js'; // only needed in custom components
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab)
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.config.productionTip = false
Vue.use(Moralis)
Vue.use(VuejsDialog)
Vue.use(VueRouter)
Vue.use(Vuex)

require('@/style.css')


Moralis.initialize("aNasMyiEwoVKpmpk37PoegKx3OXHaj35Eelj0Anx", "", "KD7XAmprYVWPBs68Yzd5mtqYOEWRQpQemfCPpR7H");
Moralis.serverURL = 'https://twgdwfe9yovt.moralisweb3.com:2053/server'

new Vue({
  store,
  router: router,
  render: h => h(App),
}).$mount('#app')
