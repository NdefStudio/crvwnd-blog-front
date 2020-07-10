import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: () => import(/* webpackChunkName: "about" */ '../components/Blogframework'),
    children: [{
      path: '',
      name: 'Blog',
      component: () => import('../components/Bloglist'),
      meta: { index: 0 }
    }, {
      path: 'note',
      name: 'Notebook',
      component: () => import('../components/Notelist'),
      meta: { index: 1 }
    },
    {
      path: 'rp',
      name: 'RPlog',
      component: () => import('../components/RPloglist'),
      meta: { index: 2 }
    },
    {
      path: 'lab',
      name: 'Lab',
      component: () => import('../components/Labpage'),
      meta: { index: 4 }
    }, {
      path: 'tools',
      name: 'Tools',
      component: () => import('../components/Toolpage'),
      meta: { index: 3 }
    }
    ]
  },
  {
    path: 'about',
    name: 'About',
    component: () => import('../components/About'),
  }

]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
