import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas de <LoginScreen />', () => {

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{setUser}}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('Debe mostrarse un snapshot correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe ejecutar el setUser con el argumento deseado', () => {
        wrapper.find('button').prop('onClick')();
        expect(setUser).toHaveBeenCalledWith({
            id: 123,
            name: 'Paco'
        })
    });


})