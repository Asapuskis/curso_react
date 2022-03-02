import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './layout.css';

export const Layout = () => {

    const { state:counter, increment } = useCounter(1)
    console.log(counter)

    const { data, loading, error } = useFetch( `https://breakingbadapi.com/api/quotes/${counter}` );

    console.log(data);

    // !! doble negación, o sea, si no es null
    // !null == true
    // !!null == false
    // Por lo tanto, si no es null coge la pos 0 de data.
    const { quote } = !!data && data[0];


    // Cogemos la referencia del último elemento
    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    // useLayoutEffect funciona igual que el useEffect pero se utiliza para cuando se actualizan elementos del layout DOM
    useLayoutEffect(() => {
        // Mediante la función getBoundingClientRect recogemos el tamaño y otras propiedades de la caja que recubre el current tag.
      setBoxSize(pTag.current.getBoundingClientRect());
      console.log(boxSize);

      return () => {
        console.log('unmount del useLayoutEffect')
      };
    }, [quote])


    return (
        <div>
            <h1>Layout Effects!!</h1>
            <hr />

            <blockquote className='blockquote text-right'>
                <p className='mb-0' ref={pTag}>{quote}</p>
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3) }
            </pre>

            <button className='btn btn-primary' onClick={ () => increment(1) }>
                Siguiente quote!
            </button>
        </div>
    )
};
