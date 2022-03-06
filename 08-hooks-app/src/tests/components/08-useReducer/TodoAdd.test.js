import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';


describe('Pruebas de <TodoAdd />', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd
            handleAddTodo={handleAddTodo}
        /> );

    test('Debe mostrarse un snapshot correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('No debe llamar al handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('Debe llamar al handleAddTodo con un argumento', () => {
        const value = 'Aprender react';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        })
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith( {
            desc: value,
            done: false,
            id: expect.any(Number)
        } );

        expect(wrapper.find('input').prop('value')).toBe('');

    });

})