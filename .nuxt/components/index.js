export { default as FooterComponent } from '../..\\components\\footerComponent.vue'
export { default as HeaderComponent } from '../..\\components\\headerComponent.vue'
export { default as MainMenu } from '../..\\components\\mainMenu.vue'
export { default as NewsBlock } from '../..\\components\\newsBlock.vue'
export { default as Pagination } from '../..\\components\\pagination.vue'

export const LazyFooterComponent = import('../..\\components\\footerComponent.vue' /* webpackChunkName: "components_footerComponent" */).then(c => c.default || c)
export const LazyHeaderComponent = import('../..\\components\\headerComponent.vue' /* webpackChunkName: "components_headerComponent" */).then(c => c.default || c)
export const LazyMainMenu = import('../..\\components\\mainMenu.vue' /* webpackChunkName: "components_mainMenu" */).then(c => c.default || c)
export const LazyNewsBlock = import('../..\\components\\newsBlock.vue' /* webpackChunkName: "components_newsBlock" */).then(c => c.default || c)
export const LazyPagination = import('../..\\components\\pagination.vue' /* webpackChunkName: "components_pagination" */).then(c => c.default || c)
