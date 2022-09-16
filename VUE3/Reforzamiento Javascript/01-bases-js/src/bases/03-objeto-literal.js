console.log("Axel")

/* Objetos literales */

const persona={
    nombre: "Axel",
    apellido: "Fiestas",
    edad: 20,
    direccion: {
        ciudad: "Carabayllo",
        zip: 5324124,
        lat: 23.3214,
        lng: 23.421321
    }
}


const persona2= { ...persona };

persona2.nombre="Pedro"

console.log(persona)
console.log(persona2)
