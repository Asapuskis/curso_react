console.log("Kps")

//Arrays
// Al crear un array constante, generarlo así:
const array = new Array(100);
console.log(array)

array.push(1)
console.log(array)

//Manera más habitual de crear un array:
const array2 = [];
array2.push(1)
array2.push(2)
array2.push(3)
array2.push(4)
console.log(array2)

const array3 = [1, 2, 3, 4];

// Push no es la mejor manera de extender un array...
let array4 = [array3];
array4.push(5);

console.log(array4)

// Usar el operador ... (spread)
array4 = [ ...array3, 5 ];
console.log(array4)

// Array maps: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
const array5 = array4.map( function(numero) {
    // el parámetro numero hace referencia a cada uno de los elementos del array que se está mapeando. En este caso, se multiplica por 2 cada elemento.
    return numero * 2;
});
console.log(array5)