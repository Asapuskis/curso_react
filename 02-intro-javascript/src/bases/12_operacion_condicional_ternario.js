// Operacion condicional ternario

// Manera tradicional

const activo = true;

let mensaje = '';

if ( activo ) {
    mensaje = 'activo';
}
else {
    mensaje = 'inactivo';
}

console.log(mensaje);

// Con el condicional ternario
// Evalua la variable, en este caso activo, si se cumple, devuelve la parte previa a los dos puntos, si no, la parte siguiente.
const mensaje2 = ( activo ) ? 'activo' : 'inactivo';

console.log(mensaje2);