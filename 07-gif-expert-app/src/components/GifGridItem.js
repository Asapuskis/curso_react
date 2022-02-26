import React from 'react'

// Acordarse de desestructurar image ya que por defecto viene como si fuese una prop, entonces o ponemos prop.image o {image}
export const GifGridItem = ( {image} ) => {
    console.log(image);
  return (
    <div className='card animate__animated animate__fadeIn '>
        <p>{image.title}</p>
        <img src={image.url} alt={image.title} />
    </div>
  )
}
