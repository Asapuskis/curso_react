// Introducción del concepto reducer
// Un Reducer sirve para gestionar los estados de una aplicación de manera controlada y segura.
// Por lo general, un reducer va a tener las funcionalidades insertar, actualizar y borrar.
// Estas funciones serán las que se ejecuten sobre el estado y lo modificarán.

console.log('kps');

// Creamos una initialTodo para la prueba, este va a ser el estado inicial
const initialTodo = [{
    id: 1,
    todo: 'Comprar leche',
    done: false
}];

// Función reducer. Recibe dos parámetros, el estado y la acción que hay que realizar sobre esos estados
const todoReducer = ( state = initialTodo, action ) => {

    // Si la acción es de tipo agregar, añadimos a la lista de estados el nuevo estado.
    if ( action?.type  === 'add' ) {
        return [...state, action.payload ];
    }


    return state;
}

let todoList = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar Sanguis',
    done: false
};

// Por defecto, el objeto action va a tener dos atributos
// 1. type: Para indicar qué acción se va a realizar en el reducer 'add', 'update', 'delete'
// 2. payload: El nuevo estado que se va a introducir, modificar, etc.
const addAction = {
    type: 'add',
    payload: newTodo
}

todoList = todoReducer( todoList, addAction)

console.log(todoList);