import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {

    test('Debe retornar valores por defecto', () => {
        const {result} = renderHook( () => useCounter());

        expect( result.current.state ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
    });

    test('Debe retornar 100', () => {
        const {result} = renderHook( () => useCounter(100));

        expect( result.current.state ).toBe(100);
        expect( typeof result.current.increment ).toBe('function');
    });

    test('Debe de incrementar el state en 1', () => {
        const {result} = renderHook( () => useCounter(100));
        const { increment } = result.current;

        // Para hacer pruebas de customHooks, tenemos que utilziar la función act
        act( () => {
            increment()
        })

        expect( result.current.state ).toBe(101);
        expect( typeof result.current.increment ).toBe('function');
    });

    test('Debe de decrementar el state en 1', () => {
        const {result} = renderHook( () => useCounter(100));
        const { decrement } = result.current;

        // Para hacer pruebas de customHooks, tenemos que utilziar la función act
        act( () => {
            decrement()
        })

        expect( result.current.state ).toBe(99);
        expect( typeof result.current.increment ).toBe('function');
    });

    test('Debe de resetear el state en 100', () => {
        const {result} = renderHook( () => useCounter(100));
        const { decrement, reset } = result.current;

        // Para hacer pruebas de customHooks, tenemos que utilziar la función act
        act( () => {
            decrement()
            reset()
        })

        expect( result.current.state ).toBe(100);
        expect( typeof result.current.increment ).toBe('function');
    });


})