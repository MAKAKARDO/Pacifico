function Principal() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8 space-y-8 mx-auto">
        
        {/* Título */}
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          A qué nos dedicamos
        </h1>

        {/* Barra separadora 1 */}
        <hr className="border-t border-gray-200" />

        {/* Texto descriptivo */}
        <p className="text-lg text-gray-600 leading-relaxed text-center">
          Creamos soluciones digitales para impulsar el crecimiento de tu negocio. Además, instalamos y configuramos el hardware que tu empresa necesita, todo con tecnología escalable y lista para el futuro.
        </p>

        {/* Barra separadora 2 */}
        <hr className="border-t border-gray-200" />

        {/* Texto 2 - Nuestro compromiso */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Nuestro compromiso</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Trabajamos con honestidad, puntualidad y tecnología actualizada para que tú no tengas que preocuparte por nada.
          </p>
        </div>

        {/* Barra separadora 3 */}
        <hr className="border-t border-gray-200" />

        {/* Imagen */}
        <div className="flex justify-center mt-6">
          <img
            src="/img/Instalacion.jpeg"
            alt="Nuestros servicios"
            className="w-full max-w-md h-auto rounded-xl shadow-md border border-gray-200"
          />
        </div>

      </div>
    </div>
  )
}

export default Principal