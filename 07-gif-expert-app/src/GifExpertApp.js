import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {

  // Utilizaremos el hook useState para poder modificar los valores del array de categorías.
  const [categories, setCategories] = useState(defaultCategories);

  // Función para añadir nuevos elementos al array
  // const handleAdd = () => {
  //   // Las dos funciones hacen lo mismo
  //   // setCategories( (categories) => categories.concat('Demoni'));
  //   setCategories(cats => [...cats, 'Demoni']);
  // }

  return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />
        <ol>
          {
            // map itera sobre un array y permite devolver el valor modificado de la forma que se quiera, en este caso
            // añadiendo las etiquetas <li></li> para añadirlas a la lista <ol></ol>
            categories.map( (category, index) => {
              return  <GifGrid 
                        category={category}
                        key={category}
                      />;
            })
          }
        </ol>
      </>
  )
}
