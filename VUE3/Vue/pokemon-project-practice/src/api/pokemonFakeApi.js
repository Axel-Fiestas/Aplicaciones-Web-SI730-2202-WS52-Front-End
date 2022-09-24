import axios from 'axios'

class PokemonServices{

    getPokemons=()=>{
        return axios.get('http://localhost:3000/pokemons')
    }

    postPokemons=(name,type)=>{
        return axios.post('http://localhost:3000/pokemons',{
            "name":name,
            "type":type
        })
    }

    deletePokemons=(id)=>{
        return axios.delete('http://localhost:3000/pokemons/'+id)
    }

    putPokemons=(id,name,type)=>{
        return axios.put('http://localhost:3000/pokemons/'+id,{
            "name":name,
            "type":type
        })
    }

}

export default PokemonServices