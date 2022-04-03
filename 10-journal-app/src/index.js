import React from 'react';
import ReactDOM from 'react-dom';
import { JournalApp } from './JournalApp';
import './styles/styles.scss';


// SASS es el equivalente a Typescript a javascript pero para CSS.
// Para usar scss (SASS) hay que instalar el paquete 'node-sass'

ReactDOM.render(
  <JournalApp />,
  document.getElementById('root')
);
