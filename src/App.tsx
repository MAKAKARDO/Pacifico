import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Encabezado from './Header'
import Servicios from './Servicios'
import Footer from './Footer'
import Principal from './Principal'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Encabezado />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/servicios" element={<Servicios />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App