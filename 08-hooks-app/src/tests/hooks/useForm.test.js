import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';


describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Paco',
        email: 'paco@gmail.com'
    };

    test('Debe retornar un formulario por defecto', () => {
        const { result } = renderHook( () => useForm(initialForm));
        const { formValues, handleInputChange, reset } = result.current

        expect( formValues ).toEqual(initialForm);
        expect( typeof handleInputChange ).toBe('function');
        expect( typeof reset ).toBe('function');
    });

    test('Debe cambiar el formulario por defecto', () => {
        const {result} = renderHook( () => useForm(initialForm));
        const { handleInputChange } = result.current

        act( ()=> {
            handleInputChange({
                    target: {
                        name: 'name',
                        value: 'Demoni'
                    }
            });
            }
        );

        const { formValues } = result.current;

        expect( formValues ).toEqual( { ...initialForm, name: 'Demoni' });
    });

    test('Debe reestablecer el formulario por defecto con el reset', () => {
        const {result} = renderHook( () => useForm(initialForm));
        const { handleInputChange, reset } = result.current

        act( ()=> {
            handleInputChange({
                    target: {
                        name: 'name',
                        value: 'Demoni'
                    }
            });
            reset();
            }
        );

        const { formValues } = result.current;

        expect( formValues ).toEqual( initialForm );

    });

})