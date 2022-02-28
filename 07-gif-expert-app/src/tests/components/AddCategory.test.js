import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";


describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories} />);

    // beforeEach se ejecuta antes de ejecutar cada test, está bien para cuando se haya cambiado algún valor de un elemento que se va a utilizar
    // en más de un test declarado como global.
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} />);
    })

    test('Debe de mostrarse correctamente el componente', () => {
        expect( wrapper ).toMatchSnapshot();
     })

    test('Debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        // change necesita recibir como parámetro el evento e, para definirlo en el simulate, se crea un objeto {} simulando la respuesta del evento.
        // En este caso, el evento tiene una propiedad llamada target con un valor, eso es lo que vamos a simular.
        const value = 'Kptracer';
        const simEvent = {
            target: value
        }
        input.simulate('change', simEvent);
    })

    test('No debe postear la información con Submit', () => {
        // Como se llama al evento preventDefault, creamos una dummy function para simularla.
        const preventDefault = () =>{};
        wrapper.find('form').simulate('submit', {preventDefault})
        expect(setCategories).toHaveBeenCalled();
     })

    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Kptracer';
        const simEvent = {
            target: value
        }
        input.simulate('change', simEvent);
        const preventDefault = () =>{};
        wrapper.find('form').simulate('submit', {preventDefault})
        expect(setCategories).toHaveBeenCalled();
        expect( wrapper.find('input').prop('value')).toBe('');
    })
})