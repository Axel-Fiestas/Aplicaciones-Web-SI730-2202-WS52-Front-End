import {owners} from './data/heroes' //Otro tipo de exportanción

import superHeroes from './data/heroes' //Exportancia por defecto


const getHeroById=(id)=>superHeroes.find(    (heroe)=>heroe.id===id  )

console.log(getHeroById(1))