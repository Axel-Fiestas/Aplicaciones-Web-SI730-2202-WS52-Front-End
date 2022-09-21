import { describe, expect, test } from "vitest"
import getPokemonsOptions ,{getPokemons, getPokemonNames} from '@/helpers/getPokemonOptions'


describe('getPokemonOptions helpers',()=>{

    test('debe de regresar un arreglo de numero',()=>{

        const pokemons= getPokemons()

        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
        expect(pokemons[649]).toBe(650)

    })

    test('Debe de retornar un arreglo de cuatro elementos con nombres de pokemon',async()=>{

        const pokemons= await getPokemonNames([1,2,3,4])
        const [p1,p2,p3,p4]= pokemons

        expect(pokemons).toStrictEqual(
            [
                {name: 'bulbasaur',id:1},
                {name:'ivysaur',id:2},
                {name:'venusaur',id:3},
                {name:'charmander',id:4}
            ]
        )

        expect(p1.name).toBe('bulbasaur')
        expect(p2.name).toBe('ivysaur')
        expect(p3.name).toBe('venusaur')
        expect(p4.name).toBe('charmander')



    })


    test('getPokemonOptions debe de retornar un arreglo mezclado',async()=>{


        const pokemons= await getPokemonsOptions();

        expect(pokemons.length).toBe(4)

        expect(pokemons).toEqual(
            [
                {
                    name: expect.any(String),
                    id:expect.any(Number)
                },
                {
                    name: expect.any(String),
                    id:expect.any(Number)
                },
                {
                    name: expect.any(String),
                    id:expect.any(Number)
                },
                {
                    name: expect.any(String),
                    id:expect.any(Number)
                }
            ]
        )
       



    })

})