import { Routes, Route } from "react-router-dom"
import { Home, Restaurant } from './pages'
import { Footer, Navbar, PageNotFound, SearchResult,KulinerData,DataKulinerByRegion, LocationData,RegionData } from './components'
import AuthContext from './contexts/AuthContext'

function App() {
  return (
    <>
    <AuthContext>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/restaurant' element={<Restaurant />} /> */}
        <Route path='/search/by/type/:type' element={<KulinerData />} />
        <Route path='/search/by/type/:type/:region' element={<DataKulinerByRegion />} />
        <Route path='/search/by/:name' element={<SearchResult />} />
        <Route path='/search/by/:name/:region' element={<SearchResult />} />
        <Route path='/restaurant/region' element={<LocationData />} />
        <Route path='/restaurant/region/:region' element={<RegionData />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer />
      </AuthContext>
    </>
  )
}

export default App
