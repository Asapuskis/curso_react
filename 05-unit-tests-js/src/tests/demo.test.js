// Para ejecutar el entorno de pruebas, correr npm run test
//El framework de tests por defecto para js es 'jest': https://jestjs.io/es-ES/

// Los tests se definen de la siguiente forma:
// test( 'Definición del test', () => {
    //Código de la función a evaluar
// });

// Ejemplo de un test para ver la sintaxis al completo.
test( 'Debe ser true', () => {
    const isActive = true;

    if ( !isActive ) {
        throw new Error('isActive no está activo.');
    }
});

// describe se utiliza para agrupar los tests.
describe('Pruebas dentro del archivo demo.test.js', () => {
    test( 'deben ser iguales los strings', () => {

        // 1. inicialización
        const mensaje = 'Hola Mundo';

        // 2. estímulo
        const mensaje2 = 'Hola Mundo';

        // 3. Observar el comportamiento. https://jestjs.io/docs/expect
        // Una manera para comprobar que dos strings son iguales sin tener que escribir ifs ni lanzar errores manualmente.
        expect(mensaje).toBe(mensaje2);

    });
});

