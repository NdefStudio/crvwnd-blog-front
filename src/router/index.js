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
      component: () => import('../components/pages/Blogpage'),
      meta: { index: 0 }
    }, {
      path: 'note',
      name: 'Notebook',
      component: () => import('../components/pages/Notepage'),
      meta: { index: 1 }
    },
    {
      path: 'art',
      name: 'Art',
      component: () => import('../components/pages/Artpage'),
      meta: { index: 3 }
    }, {
      path: 'tools',
      name: 'Tools',
      component: () => import('../components/pages/Toolpage'),
      meta: { index: 2 }
    }, {
      path: 'manage',
      name: 'Manage',
      component: () => import('../components/pages/Managepage'),
      children: [{
        path: '',
        name: 'main',
        component: () => import('../components/pages/Managepage-main')
      }, {
        path: 'edit',
        name: 'edit',
        component: () => import('../components/pages/Managepage-edit')
      },]
    },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/pages/Aboutpage'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/pages/Loginpage'),
  },

  { path: '/404', name: '404', component: () => import('../components/pages/404page') },
  { path: '*', redirect: '/404', hidden: true }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
