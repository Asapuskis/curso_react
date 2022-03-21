import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext'

// Los children son los props que están dentro del functional component padre, en este caso el functional component DashboardRoutes:
//<PrivateRoute>
// {<DashboardRoutes />}
//</PrivateRoute>
export const PrivateRoute = ({ children }) => {

    // Mediante el AuthContext controlamos si el usuario está registrado o no.
    const { user } = useContext(AuthContext);

    // useLocation devuelve la información de la localización del usuario en la app.
    const location = useLocation();
    // Si queremos guardar la última ubicación del usuario, podemos guardarlo en el localStorage
    localStorage.setItem('lastLocation', `${location.pathname}${location.search}`)
    console.log(location);

    if ( user.logged ) {
        return children
    }
    else {
        return <Navigate to="/login" />
    }
}
