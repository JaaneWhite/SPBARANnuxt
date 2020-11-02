import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7e8f2163 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _2626bd07 = () => interopDefault(import('../pages/activities.vue' /* webpackChunkName: "pages/activities" */))
const _230796ed = () => interopDefault(import('../pages/contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _09d06336 = () => interopDefault(import('../pages/exb.vue' /* webpackChunkName: "pages/exb" */))
const _45d2542e = () => interopDefault(import('../pages/exhibition.vue' /* webpackChunkName: "pages/exhibition" */))
const _70b628b8 = () => interopDefault(import('../pages/funds.vue' /* webpackChunkName: "pages/funds" */))
const _e944ee9c = () => interopDefault(import('../pages/inventory.vue' /* webpackChunkName: "pages/inventory" */))
const _4937926d = () => interopDefault(import('../pages/news.vue' /* webpackChunkName: "pages/news" */))
const _3f496f61 = () => interopDefault(import('../pages/publications.vue' /* webpackChunkName: "pages/publications" */))
const _7006bd3d = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _275b6d10 = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _c37207b0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7e8f2163,
    name: "about"
  }, {
    path: "/activities",
    component: _2626bd07,
    name: "activities"
  }, {
    path: "/contacts",
    component: _230796ed,
    name: "contacts"
  }, {
    path: "/exb",
    component: _09d06336,
    name: "exb"
  }, {
    path: "/exhibition",
    component: _45d2542e,
    name: "exhibition"
  }, {
    path: "/funds",
    component: _70b628b8,
    name: "funds"
  }, {
    path: "/inventory",
    component: _e944ee9c,
    name: "inventory"
  }, {
    path: "/news",
    component: _4937926d,
    name: "news"
  }, {
    path: "/publications",
    component: _3f496f61,
    name: "publications"
  }, {
    path: "/register",
    component: _7006bd3d,
    name: "register"
  }, {
    path: "/services",
    component: _275b6d10,
    name: "services"
  }, {
    path: "/",
    component: _c37207b0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
