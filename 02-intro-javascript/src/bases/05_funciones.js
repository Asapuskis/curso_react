console.log("Kps");

// Funciones en Javascript
function saludar(nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar('Demoni'));

// Funciones para evitar asignaciones por error
const saludar2 = function( nombre ) {
    return `Hola ${nombre}`;
}

// Si asignasemos a saludar2 cualquier cosa, daría error ya que se trata de una función constante.
// saludar2 = 'epsilon'

console.log(saludar2('Demoni'));

// Funciones lambda
const saludar3 = ( nombre ) => {
    return `Hola ${nombre}`;
}

console.log(saludar3('Demoni'));

// Otra forma de función lambda
const saludar4 = ( nombre ) => `Hola ${nombre}`;

console.log(saludar4('Demoni'));

// Sin parámetros
const saludar5 = () => `Hola Mundo`;

console.log(saludar5('Demoni'));


// Devolviendo objetos
const getUser = function() {
    return {
        uid: 'ABC123',
        username: 'Demoni'
    }
};

console.log(getUser());

// Devolviendo objetos, otra manera
const getUser2 = () => (
    {
        uid: 'ABC123',
        username: 'Demoni'
    }
);

console.log(getUser2());

//Tarea
//1. Transformar a una función de flecha
//2. Retornar un objeto implicito
//3. Pruebas
function getUsuarioActivo ( nombre ) {
    return {
        uid: 'ABC123',
        username: 'Demoni'
    }
}

const usuarioActivo = getUsuarioActivo('Paco');
console.log(usuarioActivo)

//1 & 2.
const getUsuarioActivo2 = ( nombre ) => ({ uid: 'ABC123', username: 'Demoni'})
//3
console.log(getUsuarioActivo2('Demoni'))