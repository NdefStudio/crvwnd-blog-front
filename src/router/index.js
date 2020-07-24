import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
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
      path: 'art',
      name: 'Art',
      component: () => import('../components/Artpage'),
      meta: { index: 4 }
    }, {
      path: 'tools',
      name: 'Tools',
      component: () => import('../components/Toolpage'),
      meta: { index: 3 }
    }, {
      path: 'manage',
      name: 'Manage',
      component: () => import('../components/Managepage'),
    },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Loginpage'),
  },

  { path: '/404', name: '404', component: () => import('../components/404page') },
  { path: '*', redirect: '/404', hidden: true }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
