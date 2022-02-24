// Los nombres de los componentes deberían ir en UpperCamelCase!

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Functional Components: https://es.reactjs.org/docs/components-and-props.html
// const PrimeraApp = () => {

//     const saludo = 'Hola kps';

//     // Por defecto, los returns solo pueden ser de un único elemento. Si necesitamos devolver más de un elemento, hay que añadirlo dentro de un
//     // elemento que contenga esos elementos.
//     // div: Si añadimos un div, creará el div en el DOM dentro del elemento donde se devuelva este componente.
//     return (
//         <div>
//             {/* La manera de imprimir variables es mediante las llaves {} */}
//             <h1>{saludo}</h1>
//             <p>Ktpecuentins</p>
//         </div>
//     );

//     // Fragment: En caso de no querer generar un nuevo elemento como es el div, podemos devolver un Fragment. Esto añadirá los componentes directamente
//     // dentro del elemento sobre el que se devuelve el componente.

//     // 2 formas de devolver un fragment:
//     // Haciendo la importación:
//     // return (
//     //     <Fragment>
//     //         <h1>Hola Mundo</h1>
//     //         <p>Ktpecuentins</p>
//     //     </Fragment>
//     // );

//     // Sin importar el Fragment, devolviendo <> vacío. React sabrá interpretar eso como un fragment sin necesidad de especificarlo:
//     // return (
//     //     <>
//     //         <h1>Hola Mundo</h1>
//     //         <p>Ktpecuentins</p>
//     //     </>
//     // );
// }

// props: las props son propiedades que se le pueden pasar al componente desde el componenete o elemento padre.
// Estas props se definen en el elemento padre, al llamar al componente
// const PrimeraApp = ( props ) => {
//     return (
//         <>
//             <h1>{ props.saludo }</h1>
//             <p>Ktpecuentins</p>
//         </>
//     );
// }

// Normalmente se hace una desestructuración para no tener que llamar a props.lo que sea. De la siguiente manera:
// const PrimeraApp = ( {saludo} ) => {
//     return (
//         <>
//             <h1>{ saludo }</h1>
//             <p>Ktpecuentins</p>
//         </>
//     );
// }

// Para hacer que un parámetro sea obligatorio utilizaremos los PropTypes.
// Podemos establecer valores por defecto si en los props de la función, asociamos un valor por defecto.
const PrimeraApp = ( {saludo = 'Kps', nombre = 'The Tower'} ) => {
    return (
        <>
            <h1>{ saludo }</h1>
            <p>{nombre}</p>
        </>
    );
}

// Mediante propTypes indicamos el tipo y otros atributos de los props, en este caso, si es requerido.
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;