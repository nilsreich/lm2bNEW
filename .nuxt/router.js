import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _030cef3d = () => interopDefault(import('..\\node_modules\\@nuxt\\content-theme-docs\\src\\pages\\releases.vue' /* webpackChunkName: "pages/releases" */))
const _db473784 = () => interopDefault(import('..\\node_modules\\@nuxt\\content-theme-docs\\src\\pages\\_.vue' /* webpackChunkName: "pages/_" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/releases",
    component: _030cef3d,
    name: "releases___en"
  }, {
    path: "/",
    component: _db473784,
    name: "index___en"
  }, {
    path: "/*",
    component: _db473784,
    name: "all___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
