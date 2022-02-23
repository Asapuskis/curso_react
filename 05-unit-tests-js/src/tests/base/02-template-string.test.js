import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';


describe('Pruebas del archivo 02-template-string.js', () => {

    test('getSaludo debe devolver Hola Demoni', () => {

        const nombre = 'Demoni';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola Demoni');
    });

    test('getSaludo debe devolver Hola Paco Suarez en caso de no enviar ningún argumento.', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Paco Suarez');
    });

});