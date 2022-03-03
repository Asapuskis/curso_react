// Funcion para controlar el reducer, utilizaremos un switch.
export const todoReducer = ( state = [], action ) => {
    switch ( action.type ) {
        // Action add: Añadimos un nuevo state a la lista de state
        case 'add':
            return [ ...state, action.payload ];
        // Action delete: Devolvemos con filter todos los elementos que no coincidan con el action.payload.id
        case 'delete':
            return state.filter( state => state.id !== action.payload.id );
        case 'toggle':
            return state.map( todo => {
                if ( todo.id === action.payload.id ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
}