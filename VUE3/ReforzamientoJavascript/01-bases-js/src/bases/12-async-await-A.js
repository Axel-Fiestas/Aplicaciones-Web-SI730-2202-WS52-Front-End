
const miPromesa= ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("REJECT en mi promesa")
        },1000)
    })
}


const medirTiempoAsync= async()=>{


    try{

        console.log("Inicio")


        const respuesta=await miPromesa()
        console.log(respuesta)
    
        console.log("Fin")
    
    
        return "fin de medir tiempo async"

    }catch(error){
        //return "Catch en medirTiempoAsync"
        throw "Catch en medirTiempoAsync"
    }

}


medirTiempoAsync()
.then(valor=>console.log('THEN Exitosovalor:',valor))
.catch(err=>console.log('CATCH Dado:',err))
