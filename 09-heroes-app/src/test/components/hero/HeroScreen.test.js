import { mount } from "enzyme";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { HeroScreen } from "../../../components/hero/HeroScreen";


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ( {
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Pruebas en HeroScreen', () => {

    test('No debe mostrar heroScreen si no hay un heroe en la url', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/' ]}>
                <Routes>
                    <Route path="/hero/:heroId" element={ <HeroScreen /> } />
                    <Route path="/" element={ <h1>No Hero Page</h1> } />
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper.find('h1').text().trim()).toBe('No Hero Page');
    });

    test('debe mostrar un heroe si existe en la url', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/' ]}>
                <Routes>
                    <Route path="/hero/:heroId" element={ <HeroScreen /> } />
                    <Route path="/" element={ <h1>No Hero Page</h1> } />
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper.find('.row').exists()).toBe(false);
    });

    test('debe llamar el navigate a la nueva pantalla', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero/marvel-spider']}>
                <Routes>
                    <Route path="/hero/:heroId" element={ <HeroScreen /> } />
                </Routes>
            </MemoryRouter>
        );

        wrapper.find('button').simulate('click');
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    test('debe mostrar el no hero page si no existe el heroe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero/marvel-spider123123']}>
                <Routes>
                    <Route path="/hero/:heroId" element={ <HeroScreen /> } />
                    <Route path="/" element={ <h1>No Hero Page</h1> } />
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper.text().trim()).toBe('No Hero Page');
    });

});