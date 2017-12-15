import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Import from '@/components/Import'
import Settings from '@/components/Settings'
import NotFoundComponent from '@/components/NotFoundComponent'

Vue.use(Router)

/* eslint-disable */
const store = require('@/store').default

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/import',
      name: 'Import',
      component: Import
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    return {x: 0, y: 0}
  }
})
