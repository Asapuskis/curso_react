import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import './simpleForm.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState;

    // Con useEffect, podemos controlar qué estado ha cambiado y ejecutar la parte correspondiente del código.
    // En este caso, se ejecutará cuando se haya modificado el objeto formState
    useEffect( () => {
        console.log('formState Cambiado');
    }, [formState] );

    // En este caso, se ejecutará cuando se haya modificado el atributo name del objeto formState
    useEffect( () => {
        console.log('name Cambiado');
    }, [name] );

    // En este caso, se ejecutará cuando se haya modificado el atributo email del objeto formState
    useEffect( () => {
        console.log('email Cambiado');
    }, [email] );

    // El evento onChange recibe e como argumento, si lo desestructuramos, podemos coger target para saber qué elemento se ha cambiado
    const handleInputChange = ({target}) => {
        console.log(target.name);
        console.log(target.value);
        // Mediante la sintaxis [ target.name ]: podemos modificar el valor del objeto que se ha modificado sin tener que especificarlo
        // No me queda claro porque tiene que ir con array...
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>
            <div className='form-group'>
                <input
                    type='email'
                    name='email'
                    className='form-control'
                    placeholder='email@email.com'
                    autoComplete='off'
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>
            {/* Si el name en el formulario es kps, se mostrará el componente <Message /> */}
            { (name === 'kps') && <Message /> }
        </>
    )
}
