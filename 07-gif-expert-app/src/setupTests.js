// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Utilizaremos Enzyme, que es una librería mucho más sencilla de utilizar para test en react.
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

// Configuración del snapshot serializer para pasar de render a un formato lejible (json)
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));