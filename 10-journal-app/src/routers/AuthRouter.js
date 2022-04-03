import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';


export const AuthRouter = () => {
  return (
    // auth__main implica que va a buscar el estilo en el archivo _auth.scss y el estilo que añadirá será el llamado main
    <div className='auth__main'>
      <div className='auth__box-container'>
        <Routes className='auth__main'>
            <Route path="login" element={ <LoginScreen /> } />
            <Route path="register" element={ <RegisterScreen /> } />
            <Route path="/" element={ <Navigate replace to={"login"} /> } />
        </Routes>
      </div>
    </div>
  )
}
