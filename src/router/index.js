import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
   {
      path: '/sobre',
      name: 'sobre',
      component: () => import('../views/SobreView.vue'),
    },
    {
     path: '/projetos',
     name: 'projetos',
     component: () => import('../views/ProjetosView.vue'),
   },
   {
     path: '/habilidades',
     name: 'habilidades',
     component: () => import('../views/HabilidadesView.vue'),
   },
   {
     path: '/contato',
     name: 'contato',
     component: () => import('../views/ContatoView.vue'),
   },
    //{
      //path: '/about',
     // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue'),
    //},
  ],
})

export default router
