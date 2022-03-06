import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';


describe('Pruebas de <TodoListItem />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem
            todo={demoTodos[0]}
            i={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        /> );

    test('Debe mostrarse un snapshot correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe llamar la función handleDelete', () => {

        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith( 1 );

    });

    test('Debe llamar la función handleToggle', () => {

        wrapper.find('p').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( 1 );

    });

    test('Debe mostrarse el texto correctamente', () => {

        const p = wrapper.find('p');
        expect( p.text() ).toBe(`1. Aprender React`)

    });

    test('Debe tener la clase complete si el todo.done es true', () => {

        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem
                todo={todo}
            /> );
        const p = wrapper.find('p');
        expect( p.hasClass('complete') ).toBe(true);

    });


})