console.log("Kps")

// Manera antigua de concatenar strings:
const nombre = "The Tower";
const apellido = "Demoni";

let nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto)

// Template string. Nueva manera de concatenar strings, funciones o utilizar operaciones aritméticas:
nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto)

function getSaludo(nombre) {
    return `Hola ${nombre}`;
}

console.log(`Tremendo saludo: ${getSaludo(nombre)}`)