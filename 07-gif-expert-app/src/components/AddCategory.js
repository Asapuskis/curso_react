import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    // Creamos un useState para almacenar el valor de la caja de texto y la iniciamos a Kps
    const [inputValue, setInputValue] = useState('Kps');

    // Manejar los cambios de la caja de texto mediante useState.
    const handleInputChange = (e) => {
        setInputValue(e.target);
        console.log('handleInputChange llamado');
    }

    // Manejar el submit del formulario.
    const handleSubmit = (e) => {
        // Mediante preventDefault, evitamos que se refresque toda la página y perder los estados.
        e.preventDefault();

        console.log('handleSubmit', inputValue);

        if (inputValue.trim().length > 2) {
            setCategories( cats => [ inputValue, ...cats,]);
            setInputValue('');
            console.log('Cambios hechos');
        }
    }

    // Devolvemos un formulario para añadir la categoría a la lista.
    return (
        <form onSubmit={handleSubmit}>
            <h2>AddCategory</h2>
            <p>{inputValue}</p>
            <input
                type='text'
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

// Añadimos el propType requerido para la función setCategories
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
