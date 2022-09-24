import {createRouter,createWebHistory} from "vue-router"
/*Componenets*/
import PokemonPage from '../src/Pages/PokemonPage.vue';
import Example from '../src/components/Example.vue';
import Post from '../src/components/Post.vue';
import Comment from '../src/components/Comment.vue';
import Product from '../src/components/Product.vue';





const routes = [
    { path: '/', component: PokemonPage },
    { path: '/Example', component: Example },
    { path: '/Post', component: Post },
    { path: '/Comment', component: Comment },
    { path: '/Product', component: Product },
]

const history=createWebHistory()

const router= createRouter({
    history,
    routes    
}

)

export default router