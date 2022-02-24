// import React from 'react';
// import {render} from '@testing-library/react';
// import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {

    // Test hecho utilizando la librería de react.
    // test('Debe devolver Hola soy Demoni', () => {
    //     const saludo = 'Hola soy Demoni';
    //     const {getByText} = render( <PrimeraApp saludo={saludo} />);

    //     expect(getByText(saludo)).toBeInTheDocument(saludo);
    //  })

    // Vamos a utilizar Enzyme, una librería más sencilla de utilizar para testear react.

    test('Debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola soy Demoni';
        // Utilizaremos shallow para garantizar recoger lo que se rendereiza.
        const wrapper = shallow( <PrimeraApp saludo={saludo}/> );

        // toMatchSnapshot genera un archivo .snap. Estos archivos son fotografías de como queda el componente.
        // Previamente hay que instalar enzyme-to-json: npm install --save-dev enzyme-to-json
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe mostrar el nombre enviado por props en <PrimeraApp />', () => {
        const saludo = 'Hola';
        const nombre = 'Demoni';

        // Utilizaremos shallow para garantizar recoger lo que se rendereiza.
        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                nombre={nombre}
            />
        );

        // Si queremos verificar que se ha generado correctamente un elemento dentro del componente, utilizaremos el método find del wrapper.
        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(nombre);
    });

});