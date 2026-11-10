export default function PiePagina() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Nombre de la empresa */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900">Pacifico</h3>
          <p className="text-sm text-gray-500 mt-1">
            Soluciones digitales y hardware para tu negocio
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div className="flex justify-center gap-6 text-sm">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            Servicios
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            Contacto
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            Acerca de
          </a>
        </div>

        {/* Línea divisoria */}
        <hr className="border-gray-100" />

        {/* Contacto y copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="space-y-1">
            <p>📍 Mazatlan Sinaloa, Mexico</p>
            <p>📞 +52 123 456 789</p>
            <p>✉️ pacífico.ingcon@gmail.com</p>
          </div>
          <div>
            &copy; Pacifico. Todos los derechos reservados.
          </div>
        </div>

      </div>
    </footer>
  )
}