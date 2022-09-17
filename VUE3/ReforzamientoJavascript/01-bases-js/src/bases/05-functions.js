//function saludar( xyz ){
//    return `Hola ${xyz}`
//}
//
//const saludar=function(xyz){
//   return `Hola ${xyz}`
//
const saludar=(xyz)=>{
    return `Hola ${xyz}`
}

const saludar2= ( nombre="Peter" ) => `Hola ${nombre}`

const nombre = "Tony"

console.log( saludar2() )


//Esos 2 hacen lo mismo

const getUser   = ()=>({
    uid:'ABC123',
    username:'Tony001'
}) 

const getUser2=()=>{
    return {
        uid:"ABC123",
        username:"Tony001"
    }
}

console.log(getUser())
console.log(getUser2())

const heroes=[{
    id:1,
    name:"Batman"
},{
    id:2,
    name:"Axel"
},
{
    id:3,
    name:"Superman"
}]

const existe= heroes.some(  (heroe)=>heroe.id===4);

const existe2= heroes.find(  (heroe)=>heroe.id===1);

console.log(existe2.name);

