import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';


describe('Pruebas del archivo 08-imp-exp.js', () => {

    test('getHeroeById debe retornar un heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id);

        expect(heroe).toEqual(heroeData);

    });

    test('getHeroeById debe retornar undefined si heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById( id );

        expect(heroe).toBe(undefined);

    });

    test('getHeroesByOwner debe retornar un array con los heroes de DC', () => {

        const owner = 'DC';
        const heroesByOwner = getHeroesByOwner( owner );

        const listaHeroes = heroes.filter( (h) => h.owner === owner);

        expect(heroesByOwner).toEqual(listaHeroes);
        expect(heroesByOwner.length).toBe(3);

    });

    test('getHeroesByOwner debe retornar un array con los heroes de Marvel', () => {

        const owner = 'Marvel';
        const heroesByOwner = getHeroesByOwner( owner );

        const listaHeroes = heroes.filter( (h) => h.owner === owner);

        expect(heroesByOwner).toEqual(listaHeroes);
        expect(heroesByOwner.length).toBe(2);

    });

});