import { Routes, Route } from 'react-router-dom';
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/hero/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
          <Routes>
              <Route path="marvel" element={<MarvelScreen />} />
              <Route path="dc" element={<DcScreen />} />
              <Route path="search" element={<SearchScreen />} />
              {/* con ':variable', mediante el hook useParams, podremos acceder a los parámetros de las rutas.
                  En este caso, recogeremos los parámetros con el nombre heroId.
              */}
              <Route path="hero/:heroId" element={<HeroScreen />} />
              <Route path="/" element={<MarvelScreen />} />
          </Routes>
      </div>
    </>
  )
}
