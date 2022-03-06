import { shallow } from 'enzyme';
import { HooksApp } from '../HooksApp';

describe('Pruebas en <HookApp />', () => {

    test('Test should match screenshot', () => { 
        const wrapper = shallow( <HooksApp />)
        expect( wrapper ).toMatchSnapshot();
     })
})