<script >


  import PokemonPage from './Pages/PokemonPage.vue'

 export default {
  components:{
    PokemonPage  
  }
 }

</script>

<template>
  <router-link to="/">Pokemon Game</router-link>
  <router-link to="/Example">Example</router-link>
  <router-link to="/Comment">Comments</router-link>
  <router-link to="/Post">Posts</router-link>
  <router-link to="/Product">Products</router-link>
  <router-view />

</template>

<style scoped>

</style>  
