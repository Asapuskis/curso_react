import { useState } from 'react'

// Este custom hook sirve para manejar el estado de un contador.
// Recuerda que por defecto, un hook empieza por use
export const useCounter = ( initialState = 10 ) => {

    const [state, setState] = useState(initialState)

    const increment = ( factor = 1 ) => {
        setState( state + factor );
    };

    const decrement = ( factor = 1 ) => {
        setState( state - factor);
    }

    const reset = () => {
        setState( initialState );
    }

    return {
        state,
        increment,
        decrement,
        reset
    };
};
