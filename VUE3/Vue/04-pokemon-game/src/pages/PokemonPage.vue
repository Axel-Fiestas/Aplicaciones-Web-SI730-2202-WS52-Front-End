<template>

    <h1>¿Quién es este pokemon?</h1>

    <!-- Img   -->
    <PokemonPicture :pokemonId="4"/>

    <!-- Opciones    -->
    <PokemonOptions />

    

  
</template>

<script>
import PokemonOptions from  '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'


export default {
  components: { PokemonOptions, PokemonPicture }
}
</script>

<style>

</style>