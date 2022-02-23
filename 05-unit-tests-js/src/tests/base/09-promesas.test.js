import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';


describe('Pruebas con promesas de 09-promesas.js', () => {

    // Se envía el argumento done para indicar que se está utilizando una función async.
    // Al acabar de verificar las funciones async, terminar con una llamada al done() para que no quede esperando.
    test('getHeroeByIdAsync debe retornar un heroe async', ( done ) => {

        const id = 1;

        getHeroeByIdAsync(id)
            .then( heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });

    });

    test('getHeroeByIdAsync debe devolver un error si el id del heroe no existe', ( done ) => { 
        const id = 10;

        getHeroeByIdAsync(id)
            .catch( error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    })

});