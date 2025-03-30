import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c601cffc = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _23c790f8 = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _4900778c = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _9f3c0408 = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _bb5babde = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _728adf51 = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _29517a7e = () => interopDefault(import('..\\pages\\electronics.vue' /* webpackChunkName: "pages/electronics" */))
const _48efbae0 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _daed6788 = () => interopDefault(import('..\\pages\\furniture.vue' /* webpackChunkName: "pages/furniture" */))
const _2279fc57 = () => interopDefault(import('..\\pages\\grocery.vue' /* webpackChunkName: "pages/grocery" */))
const _46f67933 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _52875fae = () => interopDefault(import('..\\pages\\lookbook.vue' /* webpackChunkName: "pages/lookbook" */))
const _16481110 = () => interopDefault(import('..\\pages\\my-account\\index.vue' /* webpackChunkName: "pages/my-account/index" */))
const _e16e864e = () => interopDefault(import('..\\pages\\pharmacy.vue' /* webpackChunkName: "pages/pharmacy" */))
const _040106bd = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _7a99a26e = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _de4d0734 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _33f1826d = () => interopDefault(import('..\\pages\\vendor-dashboard\\index.vue' /* webpackChunkName: "pages/vendor-dashboard/index" */))
const _1e83640f = () => interopDefault(import('..\\pages\\blog\\blog-2.vue' /* webpackChunkName: "pages/blog/blog-2" */))
const _1e917b90 = () => interopDefault(import('..\\pages\\blog\\blog-3.vue' /* webpackChunkName: "pages/blog/blog-3" */))
const _9f896bc0 = () => interopDefault(import('..\\pages\\blog\\blog-single-2.vue' /* webpackChunkName: "pages/blog/blog-single-2" */))
const _6295978b = () => interopDefault(import('..\\pages\\cart\\cart-2.vue' /* webpackChunkName: "pages/cart/cart-2" */))
const _62a3af0c = () => interopDefault(import('..\\pages\\cart\\cart-3.vue' /* webpackChunkName: "pages/cart/cart-3" */))
const _62b1c68d = () => interopDefault(import('..\\pages\\cart\\cart-4.vue' /* webpackChunkName: "pages/cart/cart-4" */))
const _1113d1e6 = () => interopDefault(import('..\\pages\\cart\\empty-cart.vue' /* webpackChunkName: "pages/cart/empty-cart" */))
const _7704c221 = () => interopDefault(import('..\\pages\\contact-us\\contact-us-2.vue' /* webpackChunkName: "pages/contact-us/contact-us-2" */))
const _2554cb60 = () => interopDefault(import('..\\pages\\my-account\\account-details.vue' /* webpackChunkName: "pages/my-account/account-details" */))
const _073c4832 = () => interopDefault(import('..\\pages\\my-account\\account-info-edit.vue' /* webpackChunkName: "pages/my-account/account-info-edit" */))
const _e2388e40 = () => interopDefault(import('..\\pages\\my-account\\addresses.vue' /* webpackChunkName: "pages/my-account/addresses" */))
const _17b95fc8 = () => interopDefault(import('..\\pages\\my-account\\checkout-1.vue' /* webpackChunkName: "pages/my-account/checkout-1" */))
const _179d30c6 = () => interopDefault(import('..\\pages\\my-account\\checkout-2.vue' /* webpackChunkName: "pages/my-account/checkout-2" */))
const _7ad4d223 = () => interopDefault(import('..\\pages\\my-account\\compare.vue' /* webpackChunkName: "pages/my-account/compare" */))
const _c1508cae = () => interopDefault(import('..\\pages\\my-account\\downloads.vue' /* webpackChunkName: "pages/my-account/downloads" */))
const _4b1b93f0 = () => interopDefault(import('..\\pages\\my-account\\order-tracking.vue' /* webpackChunkName: "pages/my-account/order-tracking" */))
const _9219fdd2 = () => interopDefault(import('..\\pages\\my-account\\orders.vue' /* webpackChunkName: "pages/my-account/orders" */))
const _6bdc7512 = () => interopDefault(import('..\\pages\\my-account\\wishlist.vue' /* webpackChunkName: "pages/my-account/wishlist" */))
const _72789bf8 = () => interopDefault(import('..\\pages\\product\\product-single-2.vue' /* webpackChunkName: "pages/product/product-single-2" */))
const _725c6cf6 = () => interopDefault(import('..\\pages\\product\\product-single-3.vue' /* webpackChunkName: "pages/product/product-single-3" */))
const _4f70e492 = () => interopDefault(import('..\\pages\\shop\\shop-2.vue' /* webpackChunkName: "pages/shop/shop-2" */))
const _4f54b590 = () => interopDefault(import('..\\pages\\shop\\shop-3.vue' /* webpackChunkName: "pages/shop/shop-3" */))
const _4f38868e = () => interopDefault(import('..\\pages\\shop\\shop-4.vue' /* webpackChunkName: "pages/shop/shop-4" */))
const _4f1c578c = () => interopDefault(import('..\\pages\\shop\\shop-5.vue' /* webpackChunkName: "pages/shop/shop-5" */))
const _2144229e = () => interopDefault(import('..\\pages\\vendor-dashboard\\add-product.vue' /* webpackChunkName: "pages/vendor-dashboard/add-product" */))
const _4cbc42e9 = () => interopDefault(import('..\\pages\\vendor-dashboard\\order.vue' /* webpackChunkName: "pages/vendor-dashboard/order" */))
const _d8da496c = () => interopDefault(import('..\\pages\\vendor-dashboard\\product.vue' /* webpackChunkName: "pages/vendor-dashboard/product" */))
const _11daa9f8 = () => interopDefault(import('..\\pages\\vendor-dashboard\\profile.vue' /* webpackChunkName: "pages/vendor-dashboard/profile" */))
const _359af7aa = () => interopDefault(import('..\\pages\\vendor-dashboard\\setting.vue' /* webpackChunkName: "pages/vendor-dashboard/setting" */))
const _7d4ed61c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _4c6dba1c = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _e85da85e = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _c601cffc,
    name: "404"
  }, {
    path: "/about-us",
    component: _23c790f8,
    name: "about-us"
  }, {
    path: "/blog",
    component: _4900778c,
    name: "blog"
  }, {
    path: "/cart",
    component: _9f3c0408,
    name: "cart"
  }, {
    path: "/coming-soon",
    component: _bb5babde,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _728adf51,
    name: "contact-us"
  }, {
    path: "/electronics",
    component: _29517a7e,
    name: "electronics"
  }, {
    path: "/faq",
    component: _48efbae0,
    name: "faq"
  }, {
    path: "/furniture",
    component: _daed6788,
    name: "furniture"
  }, {
    path: "/grocery",
    component: _2279fc57,
    name: "grocery"
  }, {
    path: "/login",
    component: _46f67933,
    name: "login"
  }, {
    path: "/lookbook",
    component: _52875fae,
    name: "lookbook"
  }, {
    path: "/my-account",
    component: _16481110,
    name: "my-account"
  }, {
    path: "/pharmacy",
    component: _e16e864e,
    name: "pharmacy"
  }, {
    path: "/privacy-policy",
    component: _040106bd,
    name: "privacy-policy"
  }, {
    path: "/register",
    component: _7a99a26e,
    name: "register"
  }, {
    path: "/shop",
    component: _de4d0734,
    name: "shop"
  }, {
    path: "/vendor-dashboard",
    component: _33f1826d,
    name: "vendor-dashboard"
  }, {
    path: "/blog/blog-2",
    component: _1e83640f,
    name: "blog-blog-2"
  }, {
    path: "/blog/blog-3",
    component: _1e917b90,
    name: "blog-blog-3"
  }, {
    path: "/blog/blog-single-2",
    component: _9f896bc0,
    name: "blog-blog-single-2"
  }, {
    path: "/cart/cart-2",
    component: _6295978b,
    name: "cart-cart-2"
  }, {
    path: "/cart/cart-3",
    component: _62a3af0c,
    name: "cart-cart-3"
  }, {
    path: "/cart/cart-4",
    component: _62b1c68d,
    name: "cart-cart-4"
  }, {
    path: "/cart/empty-cart",
    component: _1113d1e6,
    name: "cart-empty-cart"
  }, {
    path: "/contact-us/contact-us-2",
    component: _7704c221,
    name: "contact-us-contact-us-2"
  }, {
    path: "/my-account/account-details",
    component: _2554cb60,
    name: "my-account-account-details"
  }, {
    path: "/my-account/account-info-edit",
    component: _073c4832,
    name: "my-account-account-info-edit"
  }, {
    path: "/my-account/addresses",
    component: _e2388e40,
    name: "my-account-addresses"
  }, {
    path: "/my-account/checkout-1",
    component: _17b95fc8,
    name: "my-account-checkout-1"
  }, {
    path: "/my-account/checkout-2",
    component: _179d30c6,
    name: "my-account-checkout-2"
  }, {
    path: "/my-account/compare",
    component: _7ad4d223,
    name: "my-account-compare"
  }, {
    path: "/my-account/downloads",
    component: _c1508cae,
    name: "my-account-downloads"
  }, {
    path: "/my-account/order-tracking",
    component: _4b1b93f0,
    name: "my-account-order-tracking"
  }, {
    path: "/my-account/orders",
    component: _9219fdd2,
    name: "my-account-orders"
  }, {
    path: "/my-account/wishlist",
    component: _6bdc7512,
    name: "my-account-wishlist"
  }, {
    path: "/product/product-single-2",
    component: _72789bf8,
    name: "product-product-single-2"
  }, {
    path: "/product/product-single-3",
    component: _725c6cf6,
    name: "product-product-single-3"
  }, {
    path: "/shop/shop-2",
    component: _4f70e492,
    name: "shop-shop-2"
  }, {
    path: "/shop/shop-3",
    component: _4f54b590,
    name: "shop-shop-3"
  }, {
    path: "/shop/shop-4",
    component: _4f38868e,
    name: "shop-shop-4"
  }, {
    path: "/shop/shop-5",
    component: _4f1c578c,
    name: "shop-shop-5"
  }, {
    path: "/vendor-dashboard/add-product",
    component: _2144229e,
    name: "vendor-dashboard-add-product"
  }, {
    path: "/vendor-dashboard/order",
    component: _4cbc42e9,
    name: "vendor-dashboard-order"
  }, {
    path: "/vendor-dashboard/product",
    component: _d8da496c,
    name: "vendor-dashboard-product"
  }, {
    path: "/vendor-dashboard/profile",
    component: _11daa9f8,
    name: "vendor-dashboard-profile"
  }, {
    path: "/vendor-dashboard/setting",
    component: _359af7aa,
    name: "vendor-dashboard-setting"
  }, {
    path: "/",
    component: _7d4ed61c,
    name: "index"
  }, {
    path: "/blog/:slug",
    component: _4c6dba1c,
    name: "blog-slug"
  }, {
    path: "/product/:id?",
    component: _e85da85e,
    name: "product-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
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
