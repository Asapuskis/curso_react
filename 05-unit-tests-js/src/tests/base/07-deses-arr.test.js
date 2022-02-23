import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas del archivo 07-deses.arr.js', () => {

    test('retornaArreglo debe retornar un string y un array', () => {

        // Una manera de hacerlo:
        const arr = retornaArreglo();
        const arrTest = ['ABC', 123];

        expect(arr).toEqual(arrTest);

        // Otra manera de hacerlo
        const [letras, numeros] = retornaArreglo();
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');

     });

});