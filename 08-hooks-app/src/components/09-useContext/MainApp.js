import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const [user, setUser] = useState({});

    // Objeto que pasaremos con el provider a los componentes hijos.
    const valueProvide = {
        user,
        setUser
    }

    // Si importamos el UserContext y le agregamos el provider, lo hacemos accesible a todos los componentes hijo que englobe.
    // El Provider necesita un prop llamado value que indica qué es lo que se va a compartir a los demás componentes.
    return (
        <UserContext.Provider value={valueProvide}>
            <AppRouter />
        </UserContext.Provider>
    )
}
