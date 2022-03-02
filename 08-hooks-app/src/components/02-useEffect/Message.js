import React, { useEffect, useState } from 'react'

export const Message = () => {


    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    })

    const { x, y } = coords;

    // Hook useEffect, dividido en 3 partes.
    useEffect(() => {
        // Cuerpo del effect: Se ejecuta cuando se llama al effect.
        console.log('componente montado');

        // Por ejemplo, vamos a logear las coordenadas del ratón cuando se ejecute el effect.
        const getCoords = (e) => {
            const coords = { x: e.x, y: e.y };
            console.log(coords);
            setCoords(coords)
        }
        // Ponemos esto para demostrar que si añadimos listeners, hay que eliminarlos cuando se desmonte el componente!!
        window.addEventListener('mousemove', getCoords)

        // Se ejecuta cuando se ha dejado de cumplir la condición del effect.
        return () => {
            console.log('componente desmontado');
            // Hay que eliminar los listeners cuando se desmonta!
            window.removeEventListener('mousemove', getCoords);
        }
    },
    // Condición para que se ejecute el effect, si está vacío, solo en la carga del componente.
    [])

  return (
    <div>
        <h3>
            Se muestra el componente!
        </h3>
        <p>x: {x}, y: {y}</p>
    </div>
  )
}
