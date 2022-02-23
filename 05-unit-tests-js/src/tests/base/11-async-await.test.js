import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';


describe('Pruebas con funciones async await de 11-async-await.js', () => {

    // Al tratarse de una función asíncrona, hay que añadir async antes de la función y manejar el await.
    test('getImagen debe retornar un heroe async', async() => {

        const url = await getImagen();
        expect( url.includes('https://') ).toBe('string');

    });

});