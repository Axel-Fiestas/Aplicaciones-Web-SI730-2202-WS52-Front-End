<template>
  <h1>Hola</h1>
</template>

<script>
import PokemonApi from '../api/pokemonFakeApi.js'

export default {
    data(){
        return{

        }
    },
    created(){
        new PokemonApi().getComments()
        .then(response=>{
            console.log("INVOCANDO API")
            console.log(response.data)
            console.log(response.status)
        }) 
    }
}

</script>

<style>

</style>