// En este fichero se definirán los imports que se utilizarán en todo el proyecto para evitar importarlos en cada documento uno a uno.

import '@testing-library/jest-dom';

// Utilizaremos Enzyme, que es una librería mucho más sencilla de utilizar para test en react.
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

// Configuración del snapshot serializer para pasar de render a un formato lejible (json)
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));