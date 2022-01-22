console.log("Kps")

//Objetos literales o diccionarios
const persona = {
    nombre: 'Paco',
    apellido: 'Suarez',
    edad: 47,
    direccion: {
        ciudad: 'Donostia',
        zip: '20018',
        lat: '123123',
        long: '45653424',
    }
};

console.log( `Mi nombre es ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años` )
// console.table formatea el objeto en una tabla para ver más fácil los key values.
console.table( persona )

// los ... (tres puntos) crea una nueva instancia de la clase Persona. Clona el objeto persona y lo guarda en una nueva dirección de memoria.
const persona2 = {...persona};