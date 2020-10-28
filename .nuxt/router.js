import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _53026ddc = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _bf4557a4 = () => interopDefault(import('..\\pages\\activities.vue' /* webpackChunkName: "pages/activities" */))
const _3877cbd4 = () => interopDefault(import('..\\pages\\contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _3eb5e51e = () => interopDefault(import('..\\pages\\exb.vue' /* webpackChunkName: "pages/exb" */))
const _574d6d10 = () => interopDefault(import('..\\pages\\exhibition.vue' /* webpackChunkName: "pages/exhibition" */))
const _c7cf8fc6 = () => interopDefault(import('..\\pages\\funds.vue' /* webpackChunkName: "pages/funds" */))
const _795c52d4 = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _0636d8c8 = () => interopDefault(import('..\\pages\\publications.vue' /* webpackChunkName: "pages/publications" */))
const _01c27e5f = () => interopDefault(import('..\\pages\\services.vue' /* webpackChunkName: "pages/services" */))
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
    path: "/activities",
    component: _bf4557a4,
    name: "activities"
  }, {
    path: "/contacts",
    component: _3877cbd4,
    name: "contacts"
  }, {
    path: "/exb",
    component: _3eb5e51e,
    name: "exb"
  }, {
    path: "/exhibition",
    component: _574d6d10,
    name: "exhibition"
  }, {
    path: "/funds",
    component: _c7cf8fc6,
    name: "funds"
  }, {
    path: "/news",
    component: _795c52d4,
    name: "news"
  }, {
    path: "/publications",
    component: _0636d8c8,
    name: "publications"
  }, {
    path: "/services",
    component: _01c27e5f,
    name: "services"
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
