import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    const counterState = {
        counter1: 0,
        counter2: 20,
        counter3: 30
    };

    // Podemos definir un state como un objeto, no tiene que ser una variable primitiva por defecto.
    const [ counter, setCounter] = useState(counterState);

    // Para acceder a los atributos del objeto, desestructuramos y cogemos los que nos interesan.
    const { counter1, counter2 } = counter;

    // En este caso, solo queremos aumentar uno de los contadores, el counter1. Si pusiésemos solo counter1 + 1, reemplazaría el objeto por counter1
    // Por lo tanto, para mantener el estado anterior utilizamos el operador spread ... y además, sustituímos counter1 por counter1 + 1
    const handleClick = () => {
        setCounter({
            ...counter,
            counter1: counter1 + 1
        });
    }

    return (
        <>
            <h1>Counter { counter1 }</h1>
            <h1>Counter { counter2 }</h1>
            <hr/>
            <button className='btn btn-primary' onClick={handleClick}>
                +1
            </button>
        </>
    )
};
