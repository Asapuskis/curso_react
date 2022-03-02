import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'

import './memorize.css';

export const MemoHook = () => {

    const { state:counter, increment } = useCounter(5000);
    const [show, setShow] = useState(false);

    // el Hook useMemo, actua de manera muy parecido a la función memo.
    // Recibe por un lado la función que se va a ejecutar, en este caso, procesoPesado para simular una función con un coste computacional alto
    // Y por otro lado, la condición que va a hacer que se ejecute esa función, en este caso, la modificación de counter.
    // useMemo devuelve una función que podemos colocar en el DOM
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);

    return (
        <div>
            <h3>Counter: <small>{ counter }</small></h3>
            <hr/>

            <p>{ memoProcesoPesado }</p>

            <button
                className='btn btn-primary'
                onClick={ () => increment(1) }
            >
                +1
            </button>

            <button
                className='btn btn-outline-primary ml-3'
                onClick={ () => {
                    setShow( !show );
                } }
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        </div>
    )
}
