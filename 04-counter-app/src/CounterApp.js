// Los nombres de los componentes deberían ir en UpperCamelCase!

import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Functional Components: https://es.reactjs.org/docs/components-and-props.html
// Eventos en react: https://es.reactjs.org/docs/events.html

const CounterApp = ( { value = 0 } ) => {

    // Usaremos el hook useState para almacenar la variable: https://es.reactjs.org/docs/hooks-state.html
    // useState devuelve un array con el valor definido por parámetro y una función que sirve para modificar ese valor.
    const [ counter, setCounter ] = useState(value);

    // handleAdd sumará 1 al valor de counter
    const handleAdd = (e) => {
        setCounter( (counter) => (counter + 1));
    }

    // handleSubstract restará 1 al valor de counter
    const handleSubstract = (e) => {
        setCounter( (counter) => (counter - 1));
    }

    // handleReset resetea el valor al valor por defecto
    const handleReset = (e) => {
        setCounter(value);
    }

    // Añadimos un botón que va a llamar a la función handleAdd. e es lo que devuelve la función onClick (React.MouseEventHandler<HTMLButtonElement>)
    // No hace falta enviarlo, solo si se van a utilizar alguna de esos valores.
    // return (
    //     <>
    //         <h1>CounterApp</h1>
    //         <h2>{counter}</h2>
    //         <button onClick={ (e) => handleAdd(e) }>+1</button>
    //         <button onClick={ (e) => handleReset(e) }>Reset</button>
    //         <button onClick={ (e) => handleSubstract(e) }>-1</button>
    //     </>
    // );

    // Este return es igual que el anterior pero no envía los atributos del evento e ya que no hacen falta
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={  handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;