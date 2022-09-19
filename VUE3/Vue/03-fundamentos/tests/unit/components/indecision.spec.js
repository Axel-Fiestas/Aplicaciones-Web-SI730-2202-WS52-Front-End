import { shallowMount } from "@vue/test-utils";
import Indecision from '@/components/Indecision'

describe("Indecision Component",()=>{


    let wrapper
    let clgSpy

    global.fetch = jest.fn(()=>Promise.resolve({
        json: ()=> Promise.resolve({
            "answer": "yes",
            "forced": false,
            "image": "https://yesno.wtf/assets/yes/2.gif"
        })
    }))

    beforeEach(()=>{

        wrapper=shallowMount(Indecision)

        clgSpy = jest.spyOn( console , "log")

        jest.clearAllMocks()

    })

    test("debe de hacer match con el snapshot",()=>{
        expect(wrapper.html()).toMatchSnapshot()
    })

    test("escribir en el input no debe disparar nada (console.log)",async()=>{


        const getAnswerSpy= jest.spyOn(wrapper.vm,"getAnswer")

        const input=wrapper.find("input")
        await input.setValue('Hola mundo')

        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalledTimes(0)
        //expect(getAnswerSpy).not.toHaveBeenCalled()
    })


    test("escribir el simbolo de interrogacion debe disparar el getAnswer",async()=>{

        const getAnswerSpy=jest.spyOn(wrapper.vm,"getAnswer")

        const input=wrapper.find("input")
        await input.setValue("Ya pero eres o no eres?")

        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalled();


    })

    test("Pruebas en getAnswer",()=>{

    })

    test("Pruebas en getAnswer- Fallo en el API",()=>{

    })






})