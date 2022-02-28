import { shallow } from 'enzyme';
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem />', () => {

  const image = ({
    title: 'hola',
    url: 'https://wwhola'
  });

  // Utilizaremos shallow para garantizar recoger lo que se rendereiza.
  const wrapper = shallow( <GifGridItem image={image} /> );

  test('Debe mostrar <GifGridItem /> correctamente', () => {
      // toMatchSnapshot genera un archivo .snap. Estos archivos son fotografías de como queda el componente.
      // Previamente hay que instalar enzyme-to-json: npm install --save-dev enzyme-to-json
      expect( wrapper ).toMatchSnapshot();
  });

  test('Debe tener un parrafo con el title', () => {
      const p = wrapper.find('p');
      expect( p.text().trim() ).toBe( image.title );
  });

  test('Debe tener una imagen con el alt y el src', () => {
      const img = wrapper.find('img');
      // Mediante prop accedemos a los atributos del elemento html.
      expect( img.prop('src') ).toBe( image.url );
      expect( img.prop('alt') ).toBe( image.title );
  });

  test('Debe tener la clase animate__fadeIn', () => {
      const div = wrapper.find('div');
      // Mediante prop accedemos a los atributos del elemento html.
      // Como hay varias clases, lo sacamos a una variable
      const className = div.prop('className');
      // Mediante includes, buscamos un string dentro de una lista y en caso de que esté, lo evaluamos a true.
      expect( className.includes('animate__fadeIn') ).toBe( true );
  });



})