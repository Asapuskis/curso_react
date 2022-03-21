import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';


export const LoginScreen = () => {

  // Para hacer la navegación, podemos utilizar el hook useNavigate creado por react-router-dom, la propia librería de rutas.
  const navigate = useNavigate();
  const { dispatch } = useContext( AuthContext );

  const handleLogin = () => {
    console.log('handleLogin!');

    const action = {
      type: types.login,
      payload: { name: 'Paco' }
    }
    dispatch(action);
    // La función navigate cambia la localización a la ruta indicada.
    // Si se quiere, se puede enviar el parámetro replace, que si está a true, elimina el historial de navegación dentro de la web
    // para evitar volver a zonas no deseadas.
    // En caso de tener una ubicación almacenada en el localStorage, volverá a esa página.
    const lastPath = localStorage.getItem('lastLocation') || '/marvel'
    navigate(lastPath, {
    replace: true
    });
  }

  return (
    <div className='container mt-5'>
      <h1>LoginScreen</h1>
      <hr />
      <button
          className='btn btn-primary'
          onClick={ handleLogin }
      >
          Login
      </button>
    </div>
  )
}
