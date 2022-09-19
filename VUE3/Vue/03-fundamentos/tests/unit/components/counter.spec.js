import {shallowMount} from '@vue/test-utils'
import Counter from '@/components/Counter'


describe("Counter Component",()=>{

    let wrapper


    beforeEach(()=>{
        wrapper = shallowMount(Counter)
    })

    // test("debe de hacer match con el snapshot",()=>{

    //     const wrapper= shallowMount(    Counter     )

    //     expect( wrapper.html()  ).toMatchSnapshot()



    // })

    test("H2 debe de tener el valor por defecto",()=>{

        expect(wrapper.find("h2").exists()).toBeTruthy()
        
        const h2Value= wrapper.find("h2").text()

        expect(h2Value).toBe("Counter")



    })


    test("el valor  por defecto  debe de ser 100 en el p",()=>{

        //pTag
        const pTag=wrapper.find('[data-testid="counter"]').text()

        //expect segundo p ===100
        // expect(pTags[1].text()).toBe("100")
        expect(pTag).toBe("100")


    })


    test("debe de incrementar y decrementar en 1 el valor del contador",async()=>{

        const [increaseBtn,decreaseBtn]=wrapper.findAll("button")
        //Tenemos que esperar que el DOM se actualize, como hacemos eso? 
        //AWAIT
        await increaseBtn.trigger("click")
        await increaseBtn.trigger("click")
        await increaseBtn.trigger("click")
        await decreaseBtn.trigger("click")
        await decreaseBtn.trigger("click")

        const value=wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe("101")



    })


    test("debe de establecer el valor por defecto",()=>{

        const {start}= wrapper.props()
        // const start=wrapper.props("start")   lo mismo xd 
        const value=wrapper.find('[data-testid="counter"]').text()

        expect(Number(value)).toBe(start)
    })

    test("debe de mostrar la prop title",()=>{

        const title="Hola mundo!!!!!!!!"

        const wrapper = shallowMount(Counter,{
            props:{
                title:title
            }
        })


        expect(wrapper.find("h2").text()).toBe(title)

    })


})