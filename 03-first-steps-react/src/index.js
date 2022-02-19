import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css';

// document hace referencia al documento html: https://developer.mozilla.org/en-US/docs/Web/API/Document
// querySelector sirve para buscar un elemento por id o clase en el html
const divRoot = document.querySelector('#root');

// la función render del ReactDOM añade un componente de react en el elemento indicado. En este caso, saludo en divRoot
// ReactDOM: https://es.reactjs.org/docs/react-dom.html
// DOM: https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction#.c2.bfqu.c3.a9_es_el_dom.3f
// ReactDOM.render( <PrimeraApp saludo='Hola kps!'/>, divRoot);

// PropTypes: Si no envíamos el prop saludo, sacará un error.
ReactDOM.render( <PrimeraApp nombre='Demoni!'/>, divRoot);