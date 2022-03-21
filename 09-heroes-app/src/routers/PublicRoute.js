import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext'

export const PublicRoute = ({ children }) => {

    // Mediante el AuthContext controlamos si el usuario está registrado o no.
    const { user } = useContext(AuthContext);

    // En este caso, solo será publico LoginScreen si el usuario no está registrado, por el contrario, irá a /marvel
    if ( !user.logged ) {
        return children
    }
    else {
        return <Navigate to="/marvel" />
    }
}
