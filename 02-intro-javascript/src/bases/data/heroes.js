// Palabra reservada export para poder acceder a esta lista constante desde el exterior. Si no se pusiese export, no podríamos hacer un import
// export const heroes = [
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

// Exportación por defecto: Si no asignamos export a la lista a exportar, podemos hacerlo luego de esta manera.
export default heroes;

export const owners = ['DC', 'Marvel'];