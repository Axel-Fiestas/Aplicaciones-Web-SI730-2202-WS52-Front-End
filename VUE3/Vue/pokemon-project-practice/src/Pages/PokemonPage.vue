<template>

    <div v-if="!pokemon">
        <h1>Por favor espere...</h1>
      </div>

    <div v-else>

      <h1>Who is this Pokemon?</h1>
      <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
      <PokemonOptions :pokemons="arrPokemons"
      @selectionPokemon="checkAnswer"/>

    </div>

    <div v-if="showMessage">

      <p>{{message}}</p>
      <button @click="newGame">Nuevo Juego</button>
    </div>

    
</template>

<script>

import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import getPokemonOptions from '../helpers/getPokemonOptions.js';


export default {
  components: { PokemonOptions,PokemonPicture },
  data(){
    return{
      arrPokemons:[],
      pokemon:null,
      showPokemon:false,
      showMessage:false,
      message:''
    }
  },
  methods:{
    async mixedPokemons(){
      this.arrPokemons= await getPokemonOptions()
      const number= Math.floor(Math.random()*4)
      this.pokemon=this.arrPokemons[number]
    },
    checkAnswer(pokemonId){
      this.showPokemon=true
      this.showMessage=true


      if(pokemonId===this.pokemon.id){
        this.message=`Correcto!, era ${this.pokemon.name}`
      }else{
        this.message=`Será para la próxima, era ${this.pokemon.name}`
      }
    },
    newGame(){
      this.showPokemon=false
      this.showMessage=false
      this.arrPokemons=[],
      this.pokemon=null,
      this.message=''
      this.mixedPokemons();
    }
 },
 mounted(){
    this.mixedPokemons()
 }
}
</script>

<style>

</style>