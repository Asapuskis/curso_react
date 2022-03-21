import { useEffect, useReducer } from "react"
import { AuthContext } from "./auth/authContext"
import { authReducer } from "./auth/authReducer"
import { AppRouter } from "./routers/AppRouter"


const init = () => {
  // Función inicializadora del reducer, si se encuentra un usuario en el localStorage, lo devuelve parseado, si no, devuelve logged: false.
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

export const HeroesApp = () => {

  const [ user, dispatch ] = useReducer(authReducer, {}, init);

  // Utilizamos un useEffect para implementar el logeo, si no hay un user, no devolvemos nada, así que, la función inicializadora, devolverá logged: false.
  // Si hay un usuario, guardaremos en el localStorage el usuario.
  useEffect(() => {
    if ( !user ) return;
    const userString = JSON.stringify(user);
    console.log(userString);
    localStorage.setItem('user', JSON.stringify(user));
  }, [user])

  return (
      <AuthContext.Provider value={{ user, dispatch }}>
        <AppRouter />
      </AuthContext.Provider>
  )
}
