import {owners} from '../data/heroes' //Otro tipo de exportanción

import superHeroes from '../data/heroes' //Exportancia por defecto

//Solución mía 

export const getHeroById=(id)=>{
    const {name}=superHeroes.find(    (heroe)=>heroe.id===id  )
    return name;
}    
// getHeroesByOwner "DC","Marvel"
export const getHeroesByOwner=owner=>superHeroes.filter(superHeroes=> superHeroes.owner===owner);



//Solución Instructor

export const getHeroById2=(id)=>superHeroes.find(hero=>hero.id===id)
export const getHeroesByOwner2=(owner)=>superHeroes.filter(hero=>hero.owner===owner)




//INDEX
// import {getHeroById,getHeroesByOwner} from './bases/08-imp-exp'


// console.log(getHeroById(2))

// console.log(getHeroesByOwner("Marvel"))