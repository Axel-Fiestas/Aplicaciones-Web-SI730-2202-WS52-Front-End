<template>
  <h1>Hola</h1>
  <p>{{pokemons[0]}}</p>

<Dropdown :options="pokemons" optionLabel="name" placeholder="Select a Pokemon" />
<br>

<InputText type="text" v-model="name" placeholder="Nombre del pokemon"/>
<InputText type="text" v-model="type" placeholder="Tipo de Pokemon"/>
<Button label="Submit" @click="CreatePokemon"/>
<br>
<InputText type="text" v-model="eliminate" placeholder="Numero de pokemon a eliminar"/>
<Button label="Eliminar" @click="DeletePokemon"/>
<br>
<InputText type="text" v-model="change" placeholder="Numero de pokemon a cambiar"/>
<InputText type="text" v-model="name" placeholder="Nuevo nombre"/>
<InputText type="text" v-model="type" placeholder="Nuevo Tipo"/>
<Button label="Submit" @click="ChangePokemon"/>


</template>



<script>
import PokemonApi from '../api/pokemonFakeApi.js'

export default {
    data(){
        return{

            pokemons:[],
            name:'',
            type:'',
            eliminate:'',
            change:''

        }
    },
    created(){
        new PokemonApi().getPokemons()
        .then(response=>{
            console.log("INVOCANDO API")
            console.log(response.data)
            console.log(response.status)
            this.pokemons=response.data
        }) 
    },
    methods:{
        CreatePokemon(){
            new PokemonApi().postPokemons(this.name,this.type).
            then(response=>{
                console.log("Pokemon Creado",response)
            })
        },

        DeletePokemon(){
            new PokemonApi().deletePokemons(this.eliminate)
            .then(response=>{
                console.log("Pokemon eliminado",response)
            })
        },

        ChangePokemon(){
            new PokemonApi().putPokemons(this.change,this.name,this.type)
            .then(response=>{
                console.log("Se cambió a",response)
            })
        }
    }
}

</script>

<style>

</style>