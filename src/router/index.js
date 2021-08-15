import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home.vue'
import Snapshots from '@/components/Snapshots.vue'
import Comic from '@/components/Comic.vue'
import Dashboard from '@/components/Dashboard.vue'
import Notfound from '@/components/404.vue'

Vue.use(Router)
const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/snapshots',
      name: 'snapshots',
      component: Snapshots
    },
    {
      path: '/comic',
      name: 'comic',
      component: Comic
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/*',
      component: Notfound
    },
  ]
})


export default router