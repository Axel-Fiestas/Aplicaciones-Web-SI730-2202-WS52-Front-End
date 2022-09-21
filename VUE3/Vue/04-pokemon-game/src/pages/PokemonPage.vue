<template>

    <h1>¿Quién es este pokemon?</h1>

    <!-- Img   -->
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="true"/>

    <!-- Opciones    -->
    <PokemonOptions :pokemons="pokemonArr"/>


  
</template>

<script>
import PokemonOptions from  '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'

import getPokemonOptions from '../helpers/getPokemonOptions.js'


export default {
  components: { PokemonOptions, PokemonPicture },
  data(){
    return{
      pokemonArr: [],
      pokemon: null
    }
  },
  methods:{
    async mixPokemonArray(){
      this.pokemonArr= await getPokemonOptions()

      const rndInt=Math.floor( Math.random()*4)
      this.pokemon = this.pokemonArr[rdnInt]

    }
  },
  mounted(){
    this.mixPokemonArray()
  }
}
</script>

<style>

</style>