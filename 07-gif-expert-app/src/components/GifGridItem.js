import React from 'react'
import PropTypes from 'prop-types';

// Acordarse de desestructurar image ya que por defecto viene como si fuese una prop, entonces o ponemos prop.image o {image}
export const GifGridItem = ( {image} ) => {
  console.log(`title: ${image.title}`)
  console.log(`url: ${image.url}`)
  return (
    <div className='card animate__animated animate__fadeIn '>
        <p>{image.title}</p>
        <img src={image.url} alt={image.title} />
    </div>
  )
}

GifGridItem.propTypes = {
  image: PropTypes.object.isRequired
}
