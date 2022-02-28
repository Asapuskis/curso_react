import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook} from '@testing-library/react-hooks';

describe('Pruebas en <GifExpertApp />', () => {

    test('Debe retornar el estado inicial', async() => {
        // Por defecto, no se pueden hacer tests unitarios de custom hooks porque tienen que estar dentro de functional components.
        // Por eso, hay que instalar una librería: https://react-hooks-testing-library.com/installation
        const category = 'Shingeki';
        // Utilizaremos la función renderHook para llamar a nuestro hook y por defecto nos devolverá un objeto result  con los valores actuales.
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs(category));
        // Del objeto result, cogemos current para obtener los atributos de lo que devuelve nuestra función, en este caos, data y loading.
        const {data, loading} = result.current;
        // Añadimos waitForNextUpdate para esperar a que se ejecute completamente la función
        await waitForNextUpdate();

        expect(data.length).toBe(0);
        expect(loading).toBe(true);
    });

    test('Debe retornar un array de imgs y loading a false', async () => {
        // Por defecto, no se pueden hacer tests unitarios de custom hooks porque tienen que estar dentro de functional components.
        // Por eso, hay que instalar una librería: https://react-hooks-testing-library.com/installation
        const category = 'Shingeki';
        // Utilizaremos la función renderHook para llamar a nuestro hook y por defecto nos devolverá un objeto result con los valores actuales.
        // Sin embargo, en esta prueba nos interesa esperar a que se hagan cambios en los valores, así que utilizaremos también waitForNextUpdate
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs(category));
        await waitForNextUpdate();
        // Del objeto result, cogemos current para obtener los atributos de lo que devuelve nuestra función, en este caos, data y loading.
        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });


})