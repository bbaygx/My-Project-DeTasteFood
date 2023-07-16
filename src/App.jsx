import { Routes, Route } from "react-router-dom"
import { Home, Restaurant } from './pages'
import { Footer, Navbar, PageNotFound, SearchResult,KulinerData, LocationData } from './components'
import AuthContext from './contexts/AuthContext'

function App() {
  return (
    <>
    <AuthContext>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/restaurant' element={<Restaurant />} />
        <Route path='/search' element={<SearchResult />} />
        <Route path='/search/by/' element={<KulinerData />} />
        <Route path='/restaurant/region' element={<LocationData />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer />
      </AuthContext>
    </>
  )
}

export default App
