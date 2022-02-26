// Hook custom para hacer la petición de gifs y devolverlos.

import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
            getGifs(category)
                .then( imgs => {
                    // Por defecto, esperaremos 3 segundos para poder simular la carga de archivos.
                    setTimeout( () => {
                        setState({
                            data: imgs,
                            loading: false
                        });
                    }, 3000);
                });
        },
        [category]
    );

    return state;
}
