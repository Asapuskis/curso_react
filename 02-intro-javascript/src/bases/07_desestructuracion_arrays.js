console.log("Kps");

const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

// Desestructurar arrays!

// Si se coloca el nombre de una variable para la desestructuración, cogerá el primer valor.
const [ p1 ] = personajes;
console.log(p1)

// En caso de querer coger algún valor que no es el primero
const [ , p2 ] = personajes;
const [ , , p3 ] = personajes;
console.log(p2)
console.log(p3)

// Funciones
const getArrayDes = () => {
    return ['ABC', 123];
}
const [letras, numeros] = getArrayDes();
console.log(letras, numeros);

// Tarea:
const getUseState = ( valor ) => {
    return [valor, ()=>{console.log("Hola Mundo")}];
}

// const arr = getUseState( 'Kps' );
const [ nombre, setNombre ] = getUseState('Kps');
console.log(nombre);
setNombre()