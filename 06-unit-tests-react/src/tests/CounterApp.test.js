import { shallow } from 'enzyme';
import CounterApp from "../CounterApp";


describe('Pruebas en <CounterApp />', () => {

    test('Debe mostrar <CounterApp /> correctamente', () => {
        // Utilizaremos shallow para garantizar recoger lo que se rendereiza.
        const wrapper = shallow( <CounterApp value={0} /> );

        // toMatchSnapshot genera un archivo .snap. Estos archivos son fotografías de como queda el componente.
        // Previamente hay que instalar enzyme-to-json: npm install --save-dev enzyme-to-json
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe mostrar <CounterApp /> con valor 100', () => {
        // Utilizaremos shallow para garantizar recoger lo que se rendereiza.
        const wrapper = shallow( <CounterApp value={100}/> );

        // toMatchSnapshot genera un archivo .snap. Estos archivos son fotografías de como queda el componente.
        // Previamente hay que instalar enzyme-to-json: npm install --save-dev enzyme-to-json
        expect( wrapper ).toMatchSnapshot();
        const textoh2 = wrapper.find('h2').text().trim();
        console.log(textoh2);
        expect(textoh2).toBe('100');
    });

    test('Debe incrementar el contador en 1', () => {
        const wrapper = shallow( <CounterApp value={0}/> );
        //Se pueden simular eventos con la función simulate y añadiendo el tipo de evento que queremos simular.
        const btnAdd = wrapper.find('button').at(0).simulate('click');
        console.log(btnAdd.html());
        const textoh2 = wrapper.find('h2').text().trim();
        console.log(textoh2);
        expect(textoh2).toBe('1');
    });

    test('Debe decrementar el contador en 1', () => {
        const wrapper = shallow( <CounterApp value={10}/> );
        //Se pueden simular eventos con la función simulate y añadiendo el tipo de evento que queremos simular.
        const btnSubstract = wrapper.find('button').at(2).simulate('click');
        console.log(btnSubstract.html());
        const textoh2 = wrapper.find('h2').text().trim();
        console.log(textoh2);
        expect(textoh2).toBe('9');
    });

    test('Debe resetear el contador en 1', () => {
        const wrapper = shallow( <CounterApp value={105}/> );

        wrapper.find('button').at(0).simulate('click');
        let textoh2 = wrapper.find('h2').text().trim();
        console.log(textoh2);

        wrapper.find('button').at(1).simulate('click');
        textoh2 = wrapper.find('h2').text().trim();
        console.log(textoh2);
        expect(textoh2).toBe('105');
    });

});