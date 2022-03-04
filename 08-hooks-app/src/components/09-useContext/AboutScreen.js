import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    const {user, setUser} = useContext(UserContext);

    const handleClick = () => {
        setUser( {} );
    }

    return (
        <>
            <h1>AboutScreen</h1>
            <hr/>
            <pre>
                { JSON.stringify( user, null, 3)}
            </pre>
            {/* Metemos un logout para demostrar que podemos utilizar funciones pasadas con el context y que funciona de lux. */}
            <button
                className='btn btn-warning'
                onClick={ handleClick }>
                Logout
            </button>
        </>
    )
}
