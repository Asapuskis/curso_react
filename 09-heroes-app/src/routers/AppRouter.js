import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

// Router para la web cuando se ha logeado un usuario.
export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/* Ruta al login */}
            <Route path="/login" element={<LoginScreen />} />
            {/* Ruta para manejar el resto de rutas mediante el componente <DashboardRoutes /> */}
            <Route path="/*" element={<DashboardRoutes />} />
        </Routes>
    </BrowserRouter>
  )
}
