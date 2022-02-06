import { getHeroeById } from './bases/08_import_exports'

// Una promesa es una función asíncrona que se ejecutará en algún momento o nunca.
// Más info: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
// const promesa = new Promise(
//     ( resolve, reject ) => {
//         setTimeout(() => {
//             console.log('2 segundos después');
//             const heroe = getHeroeById(2);

//             // resolve llamará al then de la promesa. Por defecto, solo se ejecutará una de las dos, en este caso, resolve, por ir la primera
//             resolve(heroe);
//             // reject llamará al catch de la promesa
//             reject('No se pudo encontrar el heroe');
//         }, 2000);
//     }
// );

// // Función que se ejecuta cuando la promesa se haya cumplido. En este caso, se haya terminado la ejecución del setTimeout
// promesa.then( (heroe) => {
//     console.log('Then de la promesa.');
//     console.log('Recibo el heroe: ', heroe);
// })
// .catch( err => {
//     console.warn(err);
// });


// En caso de querer devolver una promesa de manera asíncrona que reciba parámetros, hacerlo de esta manera
const getHeroeByIdAsync = (id) => {
    return new Promise(
        ( resolve, reject ) => {
            setTimeout(() => {
                console.log('2 segundos después');
                const heroe = getHeroeById(id);

                if (heroe){
                    resolve(heroe);
                }
                else {
                    reject(`No se ha encontrado un heroe con el id ${id}`);
                }
            }, 2000);
        }
    );
}

getHeroeByIdAsync(40)
    // .then( heroe => console.log('Heroe: ', heroe))
    .then( heroe => console.log('Heroe: ', heroe))
    .catch( err => console.warn(err));