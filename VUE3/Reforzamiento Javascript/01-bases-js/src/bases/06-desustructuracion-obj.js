
const person={
    name:"Tony",
    age:45,
    codeName:"Ironman"
}

//Desustructuración del objeto en constantes
const { name, age, codeName,power = "No tiene poder"}=  person

// console.log(name)
// console.log(age)
// console.log(codeName)
// console.log(power)


const createHero=({name,age,codeName,power="No tiene poder"})=>{

    return{
        id:1241241,
        name,
        age,
        codeName,
        power
    }
}

const createHero2=({name,age,codeName,power="No tiene poder"})=>({id:1241241,name,age,codeName,power})

console.log(createHero2(person))