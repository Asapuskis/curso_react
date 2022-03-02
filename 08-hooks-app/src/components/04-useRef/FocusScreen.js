import React, { useRef } from 'react'
import './focusScreen.css'

export const FocusScreen = () => {

    // Hook useRef, se utiliza para modificar directamente elementos del DOM, en este caso, vamos a tener un ejemplo para poner el focus
    // en el input.
    const inputRef = useRef();
    console.log(inputRef);

    const handleClick = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />
            <input
                ref={inputRef}
                className='form-control'
                placeholder='Su nombre'/>
            <button
                className='btn btn-outline-primary mt-3'
                onClick={ handleClick }
            >
                Focus
            </button>
        </>
    )
}
