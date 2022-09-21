import pokemonApi from '../api/PokemonApi'

export const getPokemons =()=>{

    const pokemonsArr= Array.from(Array(650)) //Crea un arreglo con 650 posiciones vacías
    

    return pokemonsArr.map((_,index)=>index+1)

}

const getPokemonOptions=async()=>{


    const mixedPokemons=getPokemons()
                                .sort( ()=> Math.random()-0.5)

    const pokemons= await getPokemonNames(mixedPokemons.splice(0,4))

    return pokemons

}

export const getPokemonNames=async( [a,b,c,d]=[] )=>{

    // const respuesta= await pokemonApi.get(`/2`)
    // console.log(respuesta.data.name,respuesta.data.id)
    const promisesArr=[
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`)

    ]
    const [pokemon1,pokemon2,pokemon3,pokemon4]= await Promise.all( promisesArr )
    
    return [
        {name:pokemon1.data.name, id:pokemon1.data.id},
        {name:pokemon2.data.name, id:pokemon2.data.id},
        {name:pokemon3.data.name, id:pokemon3.data.id},
        {name:pokemon4.data.name, id:pokemon4.data.id}
    ]
}




export default getPokemonOptions