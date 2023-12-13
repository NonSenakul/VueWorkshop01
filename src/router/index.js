import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '',
    name: 'toolbar',    
    component: () => import(/* webpackChunkName: "about" */ '../views/Toolbar.vue'),
    children:[      
      {
        path: '/about',
        name: 'about',    
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/me',
        name: 'me',    
        component: () => import('../views/Me.vue')
      }, 
      {
        path: '/aboutme',
        name: 'aboutme',    
        component: () => import('../views/AboutMe.vue')
      },      
    ],
    
    
  },
  {
    path: '/simple',
    name: 'simple',    
    component: () => import('../views/Simple.vue')
  }
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
