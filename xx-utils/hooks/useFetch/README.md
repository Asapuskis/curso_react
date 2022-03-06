# useFetch Hook

Def:

Hook para hacer llamadas http.

Params:

- url: Dirección para hacer la petición http

Return:

- state: Un objeto con lo siguiente:
  - data: Lo que devuelva la petición http.
  - loading: Si ya ha terminado de cargar la data.
  - error: El mensaje de error en caso de que no se haya podido hacer la petición.

Ejemplo de uso:

```javascript
    const { data, loading, error } = useFetch( url );
```
