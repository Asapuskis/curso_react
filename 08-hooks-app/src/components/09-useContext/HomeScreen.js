import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    // Mediante la función useContext podemos recoger un Context creado y que esté en el scope del componente.
    // En este caso, cogemos el context UserContext creado en UserContext.js
    const userContext = useContext(UserContext)

    return (
        <>
            <h1>HomeScreen</h1>
            <hr/>
            <pre>
                { JSON.stringify( userContext.user, null, 3) }
            </pre>
        </>
    )
}
