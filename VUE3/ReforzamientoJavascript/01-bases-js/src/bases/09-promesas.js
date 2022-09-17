
import { getHeroById2 } from "./bases/08-imp-exp";


// console.log("Inicio")

// new Promise( (resolve,reject)=>{

//     console.log("Cuerpo de la promesa")
//     reject("Promesa resuelta con error")


// } ).then(  msg=> console.log(msg) )
// .catch( err => console.log(err))
// .catch( console.log )
// .then (console.log)
//Es lo mismo papu

//console.log("Fin")

const getHeroByIdAsync=(id)=>{

    return new Promise( (resolve,reject)=>{

        setTimeout(()=>{
            
            const hero= getHeroById2(id)

            if(hero){
                resolve(hero)
            }else{
                reject("Heroe no existe")
            }

        }, 1000);

    });

}

getHeroByIdAsync(2)
.then(h=>{
    console.log(`El heroe es ${h.name}`)
})
.catch(console.log)


