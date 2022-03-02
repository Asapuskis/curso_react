import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';


// Podemos manejar este tipo de situaciones abstrayendo la lógica a un custom hook. useCounter
export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter();

    const factor = 10;

    return (
        <>
            <h1>Counter with custom Hook: { state }</h1>
            <hr/>
            <button className='btn btn-primary' onClick={ () => increment(factor) }>
                +{factor}
            </button>
            <button className='btn btn-primary' onClick={ reset }>
                Reset
            </button>
            <button className='btn btn-primary' onClick={ () => decrement(factor) }>
                -{factor}
            </button>
        </>
    )
}
