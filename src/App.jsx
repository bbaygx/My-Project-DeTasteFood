import { Routes, Route } from "react-router-dom"
import { Home, Restaurant } from './pages'
import { Footer, Navbar } from './components'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/restaurant/:region' element={<Restaurant />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
