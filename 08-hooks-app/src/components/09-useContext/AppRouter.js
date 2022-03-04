import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

// Componente para hacer la navegación entre páginas o componentes.
export const AppRouter = () => {
    return (
        // El componente Router es el componente padre donde tienen que encontrarse los demás componentes de navegación
        <Router>
            <div>
                <NavBar />
                <div className='container'>
                    {/* Routes hace de switch, es decir, va a evaluar la url y dependiendo del valor, navegará a uno u otro componente. */}
                    <Routes>
                        {/* path es la url que hay que añadir en el navegador, si se añade exact, implica que el path tiene que ser exacto, si no se pusiese
                        evaluaría mediante una expresión regular y daría fallos
                            element indica el componente o página a la que va a navegar. */}
                        <Route exact='true' path='/' element={ <HomeScreen /> }/>
                        <Route exact='true' path='/about' element={ <AboutScreen /> }/>
                        <Route exact='true' path='/login' element={ <LoginScreen /> }/>
                        {/* Path por defecto si no encuentra ninguna ruta, recomendado crear un 404 o algo así para handlear este tipo de excepciones */}
                        <Route element={ <HomeScreen /> }/>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}
