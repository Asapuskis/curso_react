import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'


export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        console.log('handleLogout!');
        // La función navigate cambia la localización a la ruta indicada.
        // Si se quiere, se puede enviar el parámetro replace, que si está a true, elimina el historial de navegación dentro de la web
        // para evitar volver a zonas no deseadas.
        navigate('/login', {
            replace: true
        });
    }

    const handleIsActive = ( isActive ) => {
        if (isActive)
            return "nav-item nav-link active"
        else
            return "nav-item nav-link"
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    {/* La nueva manera de manejar el className is active en NavLink:
                        El componente recibe un prop isActive que indica si está activo o no.
                        En base a eso, añadimos un estilo u otro. */}
                    <NavLink
                        className={ ( {isActive} ) => handleIsActive(isActive) }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={ ( {isActive} ) => handleIsActive(isActive) }
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={ ( {isActive} ) => handleIsActive(isActive) }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span
                        className='nav-item nav-link text-info'>
                        Paco Suarez
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}