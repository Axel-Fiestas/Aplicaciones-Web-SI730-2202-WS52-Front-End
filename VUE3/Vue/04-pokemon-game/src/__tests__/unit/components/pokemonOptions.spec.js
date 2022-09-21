import { shallowMount, ShallowMount } from "@vue/test-utils"
import PokemonOptions from '@/components/PokemonOptions.vue'
import { describe, expect, test, beforeEach } from "vitest"
import {pokemons} from '../mocks/pokemons.mock'

describe('PokemonOptions Component',()=>{

    let wrapper

    beforeEach(()=>{
        wrapper=shallowMount(PokemonOptions,{
            props:{
                pokemons
            }
        })
    })

    test('debe de hacer match con el snapshot',()=>{

        console.log(wrapper.html())
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de mostrar las 4 opciones correctamente',()=>{

        //que existan 4 li
        //cada li debe de tener su nombre del pokemón
        const liTags=wrapper.findAll("li")

        expect(liTags.length).toBe(4)

        expect(liTags[0].text()).toBe('pikachu')
        expect(liTags[1].text()).toBe('charmander')
        expect(liTags[2].text()).toBe('venusaur')
        expect(liTags[3].text()).toBe('mew')
        


    })

    test('debe de emitir  "selection" con sus respectivos parametros  al hacer clik',()=>{

        const [li1,li2,li3,li4]=wrapper.findAll('li')

        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')   

        console.log(wrapper.emitted('selection-pokemon'))

        expect(wrapper.emitted('selection-pokemon').length).toBe(4)
        
        expect(wrapper.emitted('selection-pokemon')[0]).toEqual([5])
        expect(wrapper.emitted('selection-pokemon')[1]).toEqual([10])
        expect(wrapper.emitted('selection-pokemon')[2]).toEqual([15])
        expect(wrapper.emitted('selection-pokemon')[3]).toEqual([20])

    })

})