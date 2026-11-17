import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Home, Zap, Mail , } from 'lucide-react'  // ← iconos de lucide
import './App.css'

function Encabezado() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header className="flex justify-between items-center bg-slate-900 text-white px-6 md:px-12 h-20 shadow-xl sticky top-0 z-50">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center font-black text-slate-950">
            <img src="/img/Logo.jpeg" alt="Logo Pacífico" className="w-full h-full object-cover" />
          </div>
          <span className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Pacífico
          </span>
        </div>

        <div className="relative">
          <button
            onClick={toggleMenu}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-slate-700"
            aria-expanded={isMenuOpen}
          >
            <span>Menú</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isMenuOpen && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-white text-slate-900 rounded-lg shadow-xl border border-slate-200 z-50">
              <div className="py-2">
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="flex items-center gap-2 px-4 py-3 text-slate-700 hover:bg-slate-100 hover:text-sky-600 transition-colors border-b border-slate-100 last:border-0"
                >
                  <Home className="w-4 h-4 text-sky-500" />
                  Inicio
                </Link>
                <Link
                  to="/servicios"
                  onClick={closeMenu}
                  className="flex items-center gap-2 px-4 py-3 text-slate-700 hover:bg-slate-100 hover:text-sky-600 transition-colors border-b border-slate-100 last:border-0"
                >
                  <Zap className="w-4 h-4 text-sky-500" />
                  Servicios
                </Link>
                <Link
                  to="/contacto"
                  onClick={closeMenu}
                  className="flex items-center gap-2 px-4 py-3 text-slate-700 hover:bg-slate-100 hover:text-sky-600 transition-colors"
                >
                  <Mail className="w-4 h-4 text-sky-500" />
                  Contacto
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Encabezado