import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

  // useParams: hooks para recoger los parámetros de la url
  const urlParams = useParams();
  console.log(urlParams);

  // Usaremos useMemo para almacenar el valor del heroe en caso de que no cambie para evitar ser llamado si no cambia.
  // Utilizaremos el heroId para determinar que si cambia, se vuelva a llamar la función getHeroById()
  const hero = useMemo(() => getHeroById(urlParams.heroId), [urlParams.heroId]);
  console.log(hero);

  // Mediante el hook useNavigate, tendremos acceso al historial de navegación del usuario en la página
  const navigate = useNavigate();

  const handleReturn = () => {
    // Para volver a la página anterior, utilizaremos navigate -1.
    navigate(-1);
  }

  // En caso de no encontrar un héroe, redireccionamos al usuario a la página raíz para evitar mostrar errores.
  if (!hero) {
    return <Navigate to='/' />
  }

  // Para utilizar un directorio con recursos, en este caso, imágenes, utilizaremos el módulo require.context('pathDelDirectorio', true).
  // Ver heroImages.js para más información.
  const imagePath = heroImages(`./${hero.id}.jpg`);

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          src={imagePath}
          alt={hero.superhero}
          className='img-thumbnail animate__animated  animate__bounceIn'
        />
      </div>
      <div className='col-8'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego: </b>{hero.alter_ego}</li>
          <li className='list-group-item'><b>Publisher: </b>{hero.publisher}</li>
          <li className='list-group-item'><b>First appearance: </b>{hero.first_appearance}</li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{ hero.characters }</p>
        <button
          className='btn btn-outline-info'
          onClick={handleReturn}
        >
          Regresar
        </button>
      </div>

    </div>
  )
}
