import axios from 'axios'

class PokemonServices{

    getComments=()=>{
        return axios.get('http://localhost:3000/pokemons')
    }

}

export default PokemonServices