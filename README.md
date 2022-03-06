# curso_react

## Atención

* Todos los proyectos tienen apuntes en el propio código!

### 01-intro-react

* Se explica como se hacen las importaciones y como se pone en marcha un proyecto en react.

### 02-intro-javascript

* Se explican los conceptos básicos y tips de javascript

### 03-first-steps-react

* Se explican los conceptos básicos y tips de react.
* Se crea el primer __componente__ de ejemplo.

### 04-counter-app

* Primer proyecto con una funcionalidad más compleja. Una app que cuenta el número de clicks en un botón.
* Se introducen también los __eventos__ y el primer *Hook*, __useState__.

### 05-unit-tests-js

* Iniciación a __tests unitarios y de integración__ utilizando las funciones creadas en la intro de javascript. Mirar el *demo.test.js* para la información básica sobre el testeo de funciones y componentes.
* También se hacen tests sobre componentes react en el propio proyecto *04-counter-app*.

### 06-unit-tests-react

* Iniciación sobre __test unitarios en react__.
* Tests de __componentes__ y __simulación de eventos__ para poder testear el correcto funcionamiento de los mismos.

### 07-gif-expert-app

* Creación de __componentes comunicados entre sí__. Para ello se van a hacer peticiones a giphy para recoger gifs y mostrarlos por pantalla.
* __Estructuración de ficheros en un proyecto__: hooks, components, helpers.
* Creación de un __custom Hook__ que utiliza los hooks __useState__ y __useEffect__ para simplificar el código.
* También se añaden __animaciones__ para hacer más dinámica la app. La web de animaciones es <https://animate.style/>
* Se genera la versión __build__ para producción. *npm run build* en la carpeta del proyecto. Todo proyecto de react tiene que correr en un server, para probarlo, se ha instalado __http-server__ <https://www.npmjs.com/package/http-server>. Una vez instalado, ir a la carpeta *build* y correr *http-server -o*.
* Se añaden tests unitarios de los componentes utilizados en Gif Expert App. Ojito a los comentarios en los tests donde se explica cada cosa...

### 08-hooks-app

* Se generan custom hooks para afianzar los conocimientos de __useState__ y __useEffect__ entre otros.
* En 01-useState, se crea el hook __useCounter__ como ejemplo de un hook para almacenar estados.
* En 02-useEffect, se crea el hook __useForm__ como ejemplo para manejar formularios.
* En 03-examples, se crea el hook __useFetch__ que se utilizará para hacer peticiones http. Se utiliza el componente MultipleCustomHooks para testearlo.
* En 04-useRef, se introduce el hook __useRef__ que sirve para coger la referencia de los elementos del DOM y modificarlos. Se utiliza el foco para testearlo.
* En 05-useLayoutEffect, se introduce el hook __useLayoutEffect__ que sirve para coger la referencia de elementos cuando cambia un elemento del DOM. Funciona muy parecido al __useEffect__.
* En 06-memos, se introduce el hook __useMemo__ que sirve para evitar renderizar/ejecutar partes de componentes que no están cambiando. De esta manera, evitamos sobrecargar la aplicación con llamadas innecesarias. También se menciona __useCallback__ que es muy parecido a __useMemo__. useCallback(fn, deps) es igual a useMemo(() => fn, deps).
* En 07-tarea-memo es una repetición de lo anterior (__useCallback__ y __memo__) en forma de tarea.
* En 08-useReducer se explica el hook __useReducer__. Este hook se utiliza para almacenar los estados de la aplicación, es parecido a __useState__ pero utiliza una sintaxis estándar que está muy bien. También se menciona el __localStorage__ una manera de almacenar datos en el navegador de manera persistente. Se crea una app todo list, que toca muchos de los hooks y está muy bien para utilizar formularios, estados, etc.
* En 09-useContext se utiliza el hook __useContext__. Este hook sirve para almacenar datos globales que se van a utilizar a lo largo de toda la app. Además, se introduce el concepto de __router__ que sirve para navegar entre pantallas y componentes en la app.
* Test unitarios de 08-hooks-app.

### xx-utils

* Carpeta para almacenar código reutilizable en otros proyectos.
* Carpeta hooks con los custom hooks __useCounter__, __useFetch__ y __useForm__.
