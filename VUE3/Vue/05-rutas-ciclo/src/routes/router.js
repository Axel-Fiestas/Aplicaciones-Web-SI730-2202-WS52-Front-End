import {createRouter,createWebHashHistory} from 'vue-router'

// import ListPage from '../modules/pokemon/pages/ListPage.vue'
// import AboutPage from '../modules/pokemon/pages/AboutPage.vue'
// import PokemonPage from '../modules/pokemon/pages/PokemonPage.vue'
// import NoPageFound from '../modules/shared/pages/NoPageFound.vue'
//Para evitar cargar de golpe todo usaremos Lazy Load o carga perezosa
/*Lazy Load*/ //Una carga inicial pequeña para que las demás páginas
//vayan cargandose según lo requiera 

const routes = [
  { 
    path: '/', 
    component: () => import(/*webpackChunkName:AboutPage*/'../modules/pokemon/pages/ListPage.vue')
  },
  { 
    path: '/about', 
    component: ()=> import(/*webpackChunkName:AboutPage*/'../modules/pokemon/pages/AboutPage.vue')
  },
  { 
    path: '/:id', 
    component: ()=>import(/*webPackChunkName:PokemonPage*/'../modules/pokemon/pages/PokemonPage.vue')
  },
  { 
    path: '/:pathMatch(.*)*',
    component: ()=>import(/*webPackChunkName:NotPageFound*/'../modules/shared/pages/NoPageFound.vue')
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

export default router

