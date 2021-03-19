import Vue from 'vue'

const components = {
  Alert: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\base\\Alert.vue' /* webpackChunkName: "components/alert" */).then(c => c.default || c),
  Badge: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\base\\Badge.vue' /* webpackChunkName: "components/badge" */).then(c => c.default || c),
  CodeBlock: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\base\\CodeBlock.vue' /* webpackChunkName: "components/code-block" */).then(c => c.default || c),
  CodeGroup: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\base\\CodeGroup.vue' /* webpackChunkName: "components/code-group" */).then(c => c.default || c),
  CodeSandbox: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\base\\CodeSandbox.vue' /* webpackChunkName: "components/code-sandbox" */).then(c => c.default || c),
  List: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\base\\List.vue' /* webpackChunkName: "components/list" */).then(c => c.default || c),
  AppColorSwitcher: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\app\\AppColorSwitcher.vue' /* webpackChunkName: "components/app-color-switcher" */).then(c => c.default || c),
  BuiltWithNuxtDark: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\BuiltWithNuxtDark.vue' /* webpackChunkName: "components/built-with-nuxt-dark" */).then(c => c.default || c),
  BuiltWithNuxtLight: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\BuiltWithNuxtLight.vue' /* webpackChunkName: "components/built-with-nuxt-light" */).then(c => c.default || c),
  IconArrowLeft: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconArrowLeft.vue' /* webpackChunkName: "components/icon-arrow-left" */).then(c => c.default || c),
  IconArrowRight: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconArrowRight.vue' /* webpackChunkName: "components/icon-arrow-right" */).then(c => c.default || c),
  IconBadgeCheck: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconBadgeCheck.vue' /* webpackChunkName: "components/icon-badge-check" */).then(c => c.default || c),
  IconCheckCircle: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconCheckCircle.vue' /* webpackChunkName: "components/icon-check-circle" */).then(c => c.default || c),
  IconChevronRight: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconChevronRight.vue' /* webpackChunkName: "components/icon-chevron-right" */).then(c => c.default || c),
  IconClipboardCheck: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconClipboardCheck.vue' /* webpackChunkName: "components/icon-clipboard-check" */).then(c => c.default || c),
  IconClipboardCopy: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconClipboardCopy.vue' /* webpackChunkName: "components/icon-clipboard-copy" */).then(c => c.default || c),
  IconExclamationCircle: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconExclamationCircle.vue' /* webpackChunkName: "components/icon-exclamation-circle" */).then(c => c.default || c),
  IconExternalLink: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconExternalLink.vue' /* webpackChunkName: "components/icon-external-link" */).then(c => c.default || c),
  IconGithub: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconGithub.vue' /* webpackChunkName: "components/icon-github" */).then(c => c.default || c),
  IconInformationCircle: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconInformationCircle.vue' /* webpackChunkName: "components/icon-information-circle" */).then(c => c.default || c),
  IconMenu: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconMenu.vue' /* webpackChunkName: "components/icon-menu" */).then(c => c.default || c),
  IconMoon: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconMoon.vue' /* webpackChunkName: "components/icon-moon" */).then(c => c.default || c),
  IconSearch: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconSearch.vue' /* webpackChunkName: "components/icon-search" */).then(c => c.default || c),
  IconSun: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconSun.vue' /* webpackChunkName: "components/icon-sun" */).then(c => c.default || c),
  IconTranslate: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconTranslate.vue' /* webpackChunkName: "components/icon-translate" */).then(c => c.default || c),
  IconTwitter: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconTwitter.vue' /* webpackChunkName: "components/icon-twitter" */).then(c => c.default || c),
  IconX: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconX.vue' /* webpackChunkName: "components/icon-x" */).then(c => c.default || c),
  IconXCircle: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\global\\icons\\IconXCircle.vue' /* webpackChunkName: "components/icon-x-circle" */).then(c => c.default || c),
  AppCopyButton: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\app\\AppCopyButton.vue' /* webpackChunkName: "components/app-copy-button" */).then(c => c.default || c),
  AppDropdown: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\app\\AppDropdown.vue' /* webpackChunkName: "components/app-dropdown" */).then(c => c.default || c),
  AppFooter: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\app\\AppFooter.vue' /* webpackChunkName: "components/app-footer" */).then(c => c.default || c),
  AppHeader: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\app\\AppHeader.vue' /* webpackChunkName: "components/app-header" */).then(c => c.default || c),
  AppLangSwitcher: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\app\\AppLangSwitcher.vue' /* webpackChunkName: "components/app-lang-switcher" */).then(c => c.default || c),
  AppNav: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\app\\AppNav.vue' /* webpackChunkName: "components/app-nav" */).then(c => c.default || c),
  AppPageBottom: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\app\\AppPageBottom.vue' /* webpackChunkName: "components/app-page-bottom" */).then(c => c.default || c),
  AppPrevNext: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\app\\AppPrevNext.vue' /* webpackChunkName: "components/app-prev-next" */).then(c => c.default || c),
  AppSearch: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\app\\AppSearch.vue' /* webpackChunkName: "components/app-search" */).then(c => c.default || c),
  AppSearchAlgolia: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\app\\AppSearchAlgolia.vue' /* webpackChunkName: "components/app-search-algolia" */).then(c => c.default || c),
  AppToc: () => import('../..\\node_modules\\@nuxt\\content-theme-docs\\src\\components\\app\\AppToc.vue' /* webpackChunkName: "components/app-toc" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
