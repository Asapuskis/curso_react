import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ( { handleAddTodo }) => {

    // Utilizamos nuestro custom hook useForm para manejar los formularios. Iniciandolo a vacío.
    const { formValues, handleInputChange, reset } = useForm({
        description: ""
    })

    // Creamos una función para manejar el submit del formulario
    const handleSubmit = (e) => {
        // preventDefault evita que se recargue por completo la página.
        e.preventDefault();

        // Validamos que la nueva tarea sea más larga que un caracter para evitar meter mierda
        if (formValues.description.trim().length <= 1)
            return;

        // Generamos el nuevo objeto TODO con la información recogida del formulario.
        const newTodo = {
            id: new Date().getTime(),
            desc: formValues.description,
            done: false
        };

        // Mediante la función dispatch, le pasamos el objeto que queremos, en este caso, añadir a la lista.
        handleAddTodo( newTodo );

        // Ejecutamos reset para limpiar la caja de texto una vez se haya introducido la nueva tarea a la lista.
        reset();
    }

    return (
    <>
        <h4>Agregar Todos</h4>
        <hr/>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='description'
                placeholder='Aprender...'
                autoComplete='off'
                className='form-control'
                value={ formValues.description }
                onChange={ handleInputChange }
            />
            <button
                type='submit'
                className='btn btn-outline-primary mt-1 btn-block form-control'
            >
                Agregar
            </button>
        </form>
    </>
  )
}
