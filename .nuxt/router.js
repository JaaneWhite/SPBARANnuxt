import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _53026ddc = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _795c52d4 = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _0636d8c8 = () => interopDefault(import('..\\pages\\publications.vue' /* webpackChunkName: "pages/publications" */))
const _72ba48a1 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _53026ddc,
    name: "about"
  }, {
    path: "/news",
    component: _795c52d4,
    name: "news"
  }, {
    path: "/publications",
    component: _0636d8c8,
    name: "publications"
  }, {
    path: "/",
    component: _72ba48a1,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
