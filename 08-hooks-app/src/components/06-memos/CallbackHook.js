import React, { useCallback, useState } from 'react'
import './memorize.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter( counter + 1);
    // }

    // useCallback es muy parecido a useMemo, se recomienda usar useCallback.
    const increment =  useCallback( (number) => {
        setCounter( c => c + number);
    }, [ setCounter ])

    return (
        <>
            <h1>useCallbackHook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment} />

        </>
    )
}
