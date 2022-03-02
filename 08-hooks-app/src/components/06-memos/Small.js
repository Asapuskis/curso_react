import React, { memo } from 'react'

// la función memo va a evitar que se renderice un componente cuyos parámetros no varían. Por defecto, si se modifica un componente,
// los demás componentes dentro del componente modificado se van a modificar también. De esta manera, podemos evitar que eso ocurra y renderizar
// cosas innecesarias.
export const Small = memo(( { value } ) => {

    console.log('kps!');

    return (
        <small>{value}</small>
    )
}
)