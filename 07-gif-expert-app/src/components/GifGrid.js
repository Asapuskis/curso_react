import React from 'react'
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category}) => {


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Código para mostrar los gifs utilizando los hooks useState y useEffect.

    // const [images, setImages] = useState([]);

    // // Hook useEffect. Este hook sirve para ejecutar cierto código de manera condicional.
    // // De esta manera evitaremos llamar al código múltiples veces cuando no es necesario recargar los componentes o el navegador.
    // // useEffect tiene dos argumentos:
    // // 1. El código que se va a ejecutar, en este caso getGifs()
    // // 2. Una lista de dependencias que se tienen que cumplir para que se ejecute este código. Si ponemos vacío [] se ejecutará una única vez.
    // // Si colocamos category, se llamará a este hook cuando la variable category se modifique.
    // useEffect( () => {
    //         getGifs(category)
    //             .then( imgs => setImages( imgs ));
    //     },
    //     [ category ]
    // );

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Código para mostrar los gifs con un custom Hook creado expresamente para esto:
    // Lo ideal es utilizar custom hooks que llaman a hooks ya existentes y colocarlos aparte en el código, se recomienda crear carpeta hooks

    const {data, loading} = useFetchGifs(category);
    console.log(data);
    console.log(loading);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {/* Mediante un operador terniario, mostramos loading mientras carga los gifs y nada cuando los haya cargado */}
            { loading ? <p className='animate__animated animate__flash'>loading</p> : null}
            <div className='card-grid animate__animated animate__fadeIn'>
                {
                    data.map( img => (
                        <GifGridItem
                            image={img}
                            key={img.id}
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}