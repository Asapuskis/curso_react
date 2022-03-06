import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';


describe('Pruebas de <RealExampleRef />', () => {

    const wrapper = shallow( <RealExampleRef /> );

    test('Debe mostrarse un snapshot correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(false);

    });

    test('Debe mostrar el componente <MultipleCustomHooks />', () => {

        // Al simular el botón, se muestra el componente MultipleCustomHooks, por eso evaluamos si existe.
        wrapper.find('button').simulate('click');
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(true);

    });

})