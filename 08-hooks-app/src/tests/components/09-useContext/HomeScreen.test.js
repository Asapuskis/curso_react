import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { user } from '../../fixtures/user';


describe('Pruebas de <HomeScreen />', () => {

    // Si tenemos un componente que utiliza un context, lo importamos igual que haríamos en el código.
    const wrapper = mount(
        <UserContext.Provider value={user}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('Debe mostrarse un snapshot correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });


})