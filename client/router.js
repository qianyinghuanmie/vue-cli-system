/* loading */
import VueRouter from 'vue-router'
import routes from './routes'


const router = new VueRouter({
  mode: 'history',
  // base: '/book',
  routes
})

export default router
