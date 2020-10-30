export { default as AddressBlock } from '../../components/AddressBlock.vue'
export { default as PhoneBlock } from '../../components/PhoneBlock.vue'
export { default as TransportBlock } from '../../components/TransportBlock.vue'
export { default as ExbBlock } from '../../components/exbBlock.vue'
export { default as FooterComponent } from '../../components/footerComponent.vue'
export { default as HeaderComponent } from '../../components/headerComponent.vue'
export { default as MainMenu } from '../../components/mainMenu.vue'
export { default as NewsBlock } from '../../components/newsBlock.vue'
export { default as Pagination } from '../../components/pagination.vue'

export const LazyAddressBlock = import('../../components/AddressBlock.vue' /* webpackChunkName: "components/AddressBlock" */).then(c => c.default || c)
export const LazyPhoneBlock = import('../../components/PhoneBlock.vue' /* webpackChunkName: "components/PhoneBlock" */).then(c => c.default || c)
export const LazyTransportBlock = import('../../components/TransportBlock.vue' /* webpackChunkName: "components/TransportBlock" */).then(c => c.default || c)
export const LazyExbBlock = import('../../components/exbBlock.vue' /* webpackChunkName: "components/exbBlock" */).then(c => c.default || c)
export const LazyFooterComponent = import('../../components/footerComponent.vue' /* webpackChunkName: "components/footerComponent" */).then(c => c.default || c)
export const LazyHeaderComponent = import('../../components/headerComponent.vue' /* webpackChunkName: "components/headerComponent" */).then(c => c.default || c)
export const LazyMainMenu = import('../../components/mainMenu.vue' /* webpackChunkName: "components/mainMenu" */).then(c => c.default || c)
export const LazyNewsBlock = import('../../components/newsBlock.vue' /* webpackChunkName: "components/newsBlock" */).then(c => c.default || c)
export const LazyPagination = import('../../components/pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => c.default || c)
