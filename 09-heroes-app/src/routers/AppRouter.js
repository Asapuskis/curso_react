import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

// Router para la web cuando se ha logeado un usuario.
export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/* Ruta al login */}
            <Route path="/login" element={
              // En este caso, solo será publico LoginScreen si. Se controla en el PublicRoute.js
              <PublicRoute>
                <LoginScreen />
              </PublicRoute>
            } />
            {/* Ruta para manejar el resto de rutas mediante el componente <DashboardRoutes />
              Irá dentro de PrivateRoute que será quien verifique si el usuario está autorizado para ver las rutas de DashboardRoutes o no.*/}
            <Route path="/*" element={
              <PrivateRoute>
                <DashboardRoutes />
              </PrivateRoute>
            } />
        </Routes>
    </BrowserRouter>
  )
}
