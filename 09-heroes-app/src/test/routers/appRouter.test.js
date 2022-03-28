import { AppRouter } from "../../routers/AppRouter"
import { mount } from "enzyme"
import { AuthContext } from "../../auth/authContext";

describe('Pruebas en AppRouter', () => {
    const contextValue = {
        user: {
            logged: false
        }
    }

    test('debe mostrar el login si no está autenticado', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        )
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('LoginScreen');
    });

    test('debe mostrar el componente de marvel si está autenticado', () => {
        const contextValue = {
            user: {
                name: 'Juan',
                logged: true
            }
        }
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        )
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBe(true);
    });

});
