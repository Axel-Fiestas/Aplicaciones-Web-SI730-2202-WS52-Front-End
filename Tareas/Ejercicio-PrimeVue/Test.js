const x=1;
const y=2;
const z = x + y;

console.log(function1());
console.log(function2()); //asincronos no espera

function1();
function2();


/* Promise  -> Promesas */

fetch("http://localhost:3000/comments/1").

    then(response=>{ //Si la respuesta fue buena
    ///response header Y Body


}).catch(response=>{ //Si la respuesta fue mala
    //header y body
})


const function1=()=>{
    //demora 30s
    //test
    return "1"
}

const function2=()=>{
    //demora 1s
    //test
    return "2"
}



/*La otra opción, AXIUS  */