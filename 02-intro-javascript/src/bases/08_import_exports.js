// Primera manera de importar

// La manera de importar default exports y exports normales sería así
import heroes, { owners } from './data/heroes';

// console.log(heroes)
// console.log(owners)

// Diferencia entre == y ===
// == compara los valores independientemente de los tipos, por ejemplo una variable con valor 100 sería igual al valor '100'
// === compara los valores y los tipos, por ejemplo una variable con valor 100 NO sería igual al valor '100'

// Función find: Buscar un elemento por un atributo.
export const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id === id);
}

// console.log(getHeroeById(2));


// Función filter: Devuelve todos los elementos que cumplen el atributo introducido
export const getHeroesByOwner = (owner) => {
    return heroes.filter(heroe => heroe.owner === owner);
}

// console.log(getHeroesByOwner('DC'))