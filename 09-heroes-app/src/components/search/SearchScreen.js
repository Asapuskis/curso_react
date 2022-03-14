import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getHeroByName } from '../../selectors/getHeroByName';
import { HeroCard } from '../hero/HeroCard';


export const SearchScreen = () => {

  const navigate = useNavigate();
  // Usaremos location para recoger la información de los query parameters mediante el hook useLocation
  const location = useLocation();

  // Search tiene los query params.
  // Utilizaremos la librería queryString para separar los parámetros en objetos individuales.
  const { q = '' } = queryString.parse(location.search);

  const { formValues, handleInputChange } = useForm({
    searchText: q
  });

  const { searchText } = formValues;

  const heroList = useMemo( () => getHeroByName(q), [q]);

  console.log(searchText);

  const handleSearch = (e) => {
    e.preventDefault();
    // De esta manera podemos utilizar los query parameters para que las búsquedas aparezcan en la ruta y poder copiar
    // y abrir la ruta en otro sitio de la misma manera.
    navigate(`?q=${ searchText }`)
  };


  return (
    <>
        <h1>Search</h1>
        <hr />
        <div className='row'>
          <div className='col-5'>
            <h4>Buscar</h4>
            <hr />
            <form onSubmit={ (e) => handleSearch(e) }>
              <input
                type='text'
                placeholder='Busca un héroe!'
                className='form-control'
                name='searchText'
                autoComplete='off'
                value={ searchText }
                onChange={ handleInputChange }
              />
              <button
                type='submit'
                className='btn btn-outline-primary mt-1'
              >
                Buscar...
              </button>
            </form>
          </div>
          <div className='col-7'>
            <h4>Resultados</h4>
            <hr />
            {
              (q === '')
                ? <div className='alert alert-info'>Busca un héroe!</div>
                : (heroList.length === 0)
                  && <div className='alert alert-danger'>No hay resultados { q }</div>
            }
            {
              heroList.map( hero => (
                <HeroCard key={hero.id} hero={hero} />
              ))
            }
          </div>
        </div>
    </>
  )
}
