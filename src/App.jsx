import { Routes, Route } from "react-router-dom"
import { Home, Restaurant } from './pages'
import { Footer, Navbar } from './components'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path="user">
          <Route path="login" />
          <Route path="daftar" />
        </Route>
        <Route path='/restaurant/:region' element={<Restaurant />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
