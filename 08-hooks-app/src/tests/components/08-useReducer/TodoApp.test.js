import { shallow, mount } from 'enzyme';
import { act } from '@testing-library/react';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';


describe('Pruebas de <TodoApp />', () => {

    const wrapper = shallow( <TodoApp /> );
    // Mock del local storage
    Storage.prototype.setItem = jest.fn();

    test('Debe mostrarse un snapshot correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe agregar un todo', () => {
        // La función mount es como el shallow pero contiene más información.
        const wrapper = mount( <TodoApp />);
        act( () => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        })

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp 2');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('Debe eliminar un todo', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp 1');
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp 0');
    });

})