import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';


describe('Pruebas del archivo 05-funciones.test.js', () => {

    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        // Para comparar objetos/diccionarios, en vez de usar toBe, usar toEqual: https://jestjs.io/docs/expect#toequalvalue
        expect(userTest).toEqual(user);


     });

    test('getUsuarioActivo debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC567',
            username: 'Paco Suarez'
        }

        const nombre = 'Paco Suarez';

        const user = getUsuarioActivo(nombre);

        // Para comparar objetos/diccionarios, en vez de usar toBe, usar toEqual: https://jestjs.io/docs/expect#toequalvalue
        expect(userTest).toEqual(user);

    });

});