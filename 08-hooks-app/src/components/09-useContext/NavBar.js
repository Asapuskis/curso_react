import React from 'react';
import { NavLink } from 'react-router-dom';

// Creamos un componente para hacer un menú de navegación
export const NavBar = () => {
    return (
        // Nav simple sin clases de bootstrap
        // El componente NavLink sirve para hacer las navegaciones sin tener que recargar toda la página. to indica a qué página.
        // <nav>
        //     <ul>
        //         <li>
        //             <NavLink to="/">Home</NavLink>
        //         </li>
        //         <li>
        //             <NavLink to="/about">About</NavLink>
        //         </li>
        //         <li>
        //             <NavLink to="/login">Login</NavLink>
        //         </li>
        //     </ul>
        // </nav>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">useContext App</NavLink>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/* Si añadimos exact activeClassName='active' cuando la ruta del navegador coincida con el NavLink, se marcará como activo
                        en el NavBar. OJO, a partir de la versión 6 de react-router el componente NavLink no tiene activeClassName!! */}
                        <NavLink exact='true' activeClassName='active' className="nav-link" aria-current="page" to="/">Home</NavLink>
                        <NavLink exact='true' activeClassName='active' className="nav-link" to="/about">About</NavLink>
                        <NavLink exact='true' activeClassName='active' className="nav-link" to="/login">Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
