import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';


describe('Pruebas de todoReducer', () => {

    test('Debe retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {});
        expect( state ).toEqual(demoTodos);
    });

    test('Debe de agregar un todo', () => {
        const newTodo = {
            id: 3,
            desc: 'Desaprender',
            done: false
        };
        const action = {
            type: 'add',
            payload: newTodo
        };
        const state = todoReducer(demoTodos, action);
        expect( state.length ).toBe(3);
        expect( state ).toEqual([...demoTodos, newTodo]);
    });

    test('Debe eliminar un todo', () => {
        const deleteTodo = {
            id: 2
        };
        const action = {
            type: 'delete',
            payload: deleteTodo
        };
        const newState = todoReducer(demoTodos, action);
        expect( newState.length ).toBe(1);
        expect( newState ).toEqual([demoTodos[0]]);
    });

    test('Debe hacer el toggle del todo', () => {
        const toggleTodo = {
            id: 1,
        };
        const action = {
            type: 'toggle',
            payload: toggleTodo
        };
        const state = todoReducer(demoTodos, action);
        expect( state[0].done ).toBe(true);
        expect( state[1] ).toEqual(demoTodos[1]);
    });

})