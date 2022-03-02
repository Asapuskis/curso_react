import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './customHooks.css';

export const MultipleCustomHooks = () => {

    const { state:counter, increment } = useCounter(1)
    console.log(counter)

    const { data, loading, error } = useFetch( `https://breakingbadapi.com/api/quotes/${counter}` );

    console.log(data);

    // !! doble negación, o sea, si no es null
    // !null == true
    // !!null == false
    // Por lo tanto, si no es null coge la pos 0 de data.
    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>Breaking bad quotes!!</h1>
            <hr />
            { loading ?
                <div className='alert alert-info text-center'>
                    Loading...
                </div>
                :
                <blockquote className='blockquote text-right'>
                    <p className='mb-0'>{quote}</p>
                    <footer className='blockquote-footer'>{author}</footer>
                </blockquote>
            }
            <button className='btn btn-primary' onClick={ () => increment(1) }>
                Siguiente quote!
            </button>
        </div>
    )
};
