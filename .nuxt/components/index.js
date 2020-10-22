export { default as Breadcrumbs } from '../../components/breadcrumbs.vue'
export { default as FooterComponent } from '../../components/footerComponent.vue'
export { default as HeaderComponent } from '../../components/headerComponent.vue'
export { default as MainMenu } from '../../components/mainMenu.vue'
export { default as NewsBlock } from '../../components/newsBlock.vue'
export { default as Pagination } from '../../components/pagination.vue'

export const LazyBreadcrumbs = import('../../components/breadcrumbs.vue' /* webpackChunkName: "components/breadcrumbs" */).then(c => c.default || c)
export const LazyFooterComponent = import('../../components/footerComponent.vue' /* webpackChunkName: "components/footerComponent" */).then(c => c.default || c)
export const LazyHeaderComponent = import('../../components/headerComponent.vue' /* webpackChunkName: "components/headerComponent" */).then(c => c.default || c)
export const LazyMainMenu = import('../../components/mainMenu.vue' /* webpackChunkName: "components/mainMenu" */).then(c => c.default || c)
export const LazyNewsBlock = import('../../components/newsBlock.vue' /* webpackChunkName: "components/newsBlock" */).then(c => c.default || c)
export const LazyPagination = import('../../components/pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => c.default || c)
