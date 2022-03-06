# useCounter Hook

Def:

Hook para llevar un contador.

Params:

- initialValue = 0 (optional): Valor de inicialización del contador

Return:

- counter: El valor del contador
- increment: Función para incrementar el contador por el valor pasado por parámetro
- decrement: Función para decrementar el contador por el valor pasado por parámetro
- reset: Función para resetear el valor al valor por defecto o valor pasado por parámetro

Ejemplo de uso:

```javascript
    const { counter, increment, decrement, reset } = useCounter( initialValue = 0 );
```

useCounter() // recibe un valor por defecto de 0.
