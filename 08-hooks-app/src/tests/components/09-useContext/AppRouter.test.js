import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { user } from '../../fixtures/user';


describe('Pruebas de <AppRouter />', () => {

    const wrapper = mount(
        <UserContext.Provider value={user}>
            <AppRouter />
        </UserContext.Provider>
    );

    test('Debe mostrarse un snapshot correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

})