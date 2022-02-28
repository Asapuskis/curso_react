import { shallow } from 'enzyme';
import { GifGrid } from "../../components/GifGrid";
// Mockeamos la función useFetchGifs de esta manera:
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {
    test('Debe mostrar <GifGrid /> correctamente', () => {
        // Definimos qué va a devolver la función mockeada con mockReturnValue. En este caso, devolvemos el objeto inicializado a vacío.
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        // Utilizaremos shallow para garantizar recoger lo que se renderiza.
        const wrapper = shallow( <GifGrid category='shingeki'/> );
        // toMatchSnapshot genera un archivo .snap. Estos archivos son fotografías de como queda el componente.
        // Previamente hay que instalar enzyme-to-json: npm install --save-dev enzyme-to-json
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe mostrar items cuando se cargan imágenes con useFetchGifs', () => {
        // Mockeamos la función useFetchGifs para simular que devuelve una lista de gifs
        const gifs = [{
            id: 'mockId',
            url: 'https://mocked.jpg',
            title: 'mockTitle'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true
        })
        const wrapper = shallow( <GifGrid category='shingeki'/> );

        expect(wrapper.find('p').exists()).toBe(true);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
})