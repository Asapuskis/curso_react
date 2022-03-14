import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {

  // Para hacer la navegación, podemos utilizar el hook useNavigate creado por react-router-dom, la propia librería de rutas.
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('handleLogin!');
    // La función navigate cambia la localización a la ruta indicada.
    // Si se quiere, se puede enviar el parámetro replace, que si está a true, elimina el historial de navegación dentro de la web
    // para evitar volver a zonas no deseadas.
    navigate('/marvel', {
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
