<template>

    <h1>Aquí van las 4 opciones</h1>
    <ul>
        <li><button>1</button></li>
        <li><button>2</button></li>
        <li><button>3</button></li>
        <li><button>4</button></li>

    </ul>


    <ul>
        {{name}}
    </ul>


</template>

<script>
import axios from 'axios'

export default {
    props:{
        pokemonId:{
            type:Number,
            required:true
        }
    },
    data(){
        return{
            name:""
        }
    },
    computed:{
        getName(){
            return `https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`
        }
    },
    mounted(){

        //Tengo que recibir 4 entradas de pokemones mediante el get 
        //Luego de eso tengo que enviar la data
        axios
        .get(this.getName) 
        .then(response=>{
            this.name=response.data.species.name
        })
    }
}
</script>

<style scoped>

/* Pokemon Options */
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}

</style>