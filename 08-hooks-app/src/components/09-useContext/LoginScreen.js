import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);

    return (
        <>
            <h1>LoginScreen</h1>
            <hr/>
            {/* Añadimos un user para demostrar que podemos utilizar las funciones pasadas por context */}
            <button
                className='btn btn-primary'
                onClick={ () => setUser( {
                    id: 123,
                    name: 'Paco'
                })}>
                Login
            </button>
        </>
    )
}
