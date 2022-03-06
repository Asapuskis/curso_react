# useForm Hook

Def:

Hook para manejar formularios.

Params:

- initialState {}: Inicializado a un objeto vacío.

Return:

- formValues: El valor del elemento del formulario
- handleInputChange({target}): Modifica el valor del elemento target del formulario por un nuevo valor.
- reset: Coloca el elemento del formulario al valor por defecto.

Ejemplo de uso:

```javascript
    const { formValues, handleInputChange, reset } = useForm( initialState );
```
