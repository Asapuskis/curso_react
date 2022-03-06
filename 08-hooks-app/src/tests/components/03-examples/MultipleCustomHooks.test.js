import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');


describe('Pruebas de <MultipleCustomHooks />', () => {

    test('Debe mostrarse un snapshot correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe mostrar la info', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Paco',
                quote: 'Hola'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.alert').exists()).toBe(false);
        expect( wrapper.find('.mb-0').text().trim()).toBe('Hola');

    });

})