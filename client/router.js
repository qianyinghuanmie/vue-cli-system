/* loading */
import VueRouter from 'vue-router'
import routes from './routes'
// const ProgressBar = require('progressbar.js')

const router = new VueRouter({
  mode: 'history',
  // base: '/book',
  routes
})


// const doc = global.document
//
// // 响应式 SVG 进度条
// let line = null
//

export default router
