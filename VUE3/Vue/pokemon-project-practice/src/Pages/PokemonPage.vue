<template>

    <h1>Who is this Pokemon?</h1>

    <PokemonPicture :pokemonId="120" :showPokemon="true"/>
    <PokemonOptions :pokemonId="120"/>

</template>

<script>

import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import getPokemonOptions from '../helpers/getPokemonOptions.js';

getPokemonOptions()

export default {
  components: { PokemonOptions,PokemonPicture },

}
</script>

<style>

</style>