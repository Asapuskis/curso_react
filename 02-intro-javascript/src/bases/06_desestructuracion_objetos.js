console.log("Kps");

// Desestructuración! o Asignación desestructurante
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
    nombre: 'Paco',
    edad: 47,
    clave: 'demoni'
}


console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.clave)

// Puede ser COÑAZO tener que acceder al objeto a través de persona. lo que sea, aquí entra en juego la desestructuración

// De esta manera recogemos el atributo nombre de la clase persona y lo asignamos a una variable llamada nombre.
const { nombre } = persona;
console.log(nombre)

// Si quisieramos, podríamos asignar el valor del atributo nombre a otra variable de esta manera:
const { nombre:nombre2 } = persona;
console.log(nombre2)

// Se pueden extraer más de un atributo de una vez
const { nombre:nombre3, edad:edad3, clave:clave3 } = persona;

console.log(nombre3)
console.log(edad3)
console.log(clave3)


// También se puede utilizar en funciones
const getPersona = ( { nombre, edad, clave } ) => {
    console.log(nombre)
    console.log(edad)
    console.log(clave)
}

getPersona(persona)

// Se pueden establecer valores pro defecto en las funciones
const getPersona2 = ( { nombre, edad, rango = 'Sansfer' } ) => {
    console.log(nombre)
    console.log(edad)
    console.log(rango)
}

getPersona2(persona)

// Introducción a useContext
const introUseContext = ( { clave, nombre, edad, rango = 'Sansfer' } ) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 1214,
            lng: -121.4
        }
    }
}

// En objetos cuyos atributos son otros objetos, se puede acceder de la siguiente manera
const { nombreClave, anios, latlng: {lat, lng} } = introUseContext(persona);
console.log(nombreClave)
console.log(anios)
console.log(lat, lng)
