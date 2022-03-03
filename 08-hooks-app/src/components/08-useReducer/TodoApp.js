import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

// En este componente se usará el hook useReducer
export const TodoApp = () => {

    // useReducer tiene 3 parámetros:
    // const [state, dispatch] = useReducer(reducer, initialArg, init);
    // 1. Función reducer
    // 2. Estado inicial
    // 3. (optional) Función para inicializar el state de manera diferida: https://es.reactjs.org/docs/hooks-reference.html#lazy-initialization
    // Devuelve un array con dos elementos
    // 1. El estado actualizado
    // 2. (opcional) La función dispatch que será para editar el estado de manera semejante al useState

    const init = () => {

        // Inicializamos la lista a vacío o lo que haya en localStorage. getItem devuelve null si no se encuentra, por lo tanto, si no se encuentra
        // nada en 'todos', devolverá por defecto la lista vacía []
        return JSON.parse(localStorage.getItem('todos')) || [];

    };

    // Inicializamos la lista con useReducer y el estado inicial. Utilizando la función init, inicializamos la lista de manera más eficiente
    const [ todoList, dispatch ] = useReducer(todoReducer, [], init)

    // Creamos un useEffect para actualizar el localStorage con los valores de la lista al modificarse.
    // De esta manera, tendremos los datos persistentes y accesibles aunque se recarge el navegador.
    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todoList));
    }, [todoList]);

    // Función para manejar el borrado de tareas de la lista.
    const handleDelete = ( todoId ) => {
        console.log(todoId);
        const deleteTodo = {
            id: todoId
        };
        const deleteAction = {
            type: 'delete',
            payload: deleteTodo
        };
        dispatch( deleteAction );
    }

    const handleToggle = ( todoId ) => {
        const toggleTodo = {
            id: todoId
        };
        const toggleAction = {
            type: 'toggle',
            payload: toggleTodo
        };
        dispatch(toggleAction);
    }

    const handleAddTodo = ( newTodo ) => {
        // Generamos el nuevo objeto action para pasarselo al useReducer
        const addAction = {
            type: 'add',
            payload: newTodo
        };

        dispatch(addAction);
    }


    return (
        <div>
            <h1>TodoApp <small>{todoList.length}</small></h1>
            <hr/>
            <div className='row'>
                <div className='col-7'>
                    <TodoList
                        todoList={todoList}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>
                <div className='col-5'>
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>
        </div>
    )
}
