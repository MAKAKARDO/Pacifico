import Header from './Header'   // ajusta la ruta según dónde esté tu Header
import Footer from './Footer'   // ajusta la ruta según dónde esté tu Footer

export default function Servicios() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
     
      
      <main className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Nuestros Servicios
          </h1>
          <hr className="border-t border-gray-200" />

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Instalación de hardware
            </h2>
            <p className="text-gray-600">
              Instalamos y configuramos equipos para tu empresa con soluciones escalables.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Soluciones digitales
            </h2>
            <p className="text-gray-600">
              Desarrollo de páginas web y sistemas que ayudan a tu negocio a crecer.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}