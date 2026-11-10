import { useState } from 'react'
import { Link } from 'react-router-dom'   // ← importante
import './App.css'

function Encabezado() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="flex justify-between items-center bg-slate-900 text-white px-6 md:px-12 h-20 shadow-xl sticky top-0 z-50">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center font-black text-slate-950">
            <img src="/img/logo.jpeg" alt="" />
          </div>
          <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Pacífico
          </span>
        </div>

        {/* MENÚ DE ENLACES */}
        <nav className="flex gap-6 md:gap-8">
          <Link to="/" className="text-red-600 hover:text-sky-400 font-medium transition-colors duration-200">
            Inicio
          </Link>
          <Link to="/servicios" className="text-slate-300 hover:text-sky-400 font-medium transition-colors duration-200">
            Servicios
          </Link>
        </nav>

        {/* BOTÓN DE ACCIÓN */}
        <div>
          <button className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-5 py-2 rounded-full shadow-lg shadow-sky-500/20 transition-all duration-200 hover:scale-105 active:scale-95">
            Entrar
          </button>
        </div>
      </header>
    </>
  )
}

export default Encabezado