

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

            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>No-break</li>
            <li>Servidores</li>
            <li>Raspberry</li>
            <li>Cableado UTP</li>
            <li>Impresoras</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Soluciones digitales
            </h2>
            <p className="text-gray-600">
              Desarrollo de páginas web y sistemas que ayudan a tu negocio a crecer.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>automatización</li>
            
            </ul>
           
          </div>

           <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Servicios prestados
            </h2>
            <p className="text-gray-600">
              Brindamos consultoría especializada en tecnología para impulsar el crecimiento y la eficiencia operativa de tu negocio. .
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Soporte técnico de redes</li>
            <li>Análisis financiero</li>
            <li>Diseño de ingeniería</li>
            <li>Interconexión en red</li>
            <li>Consultoría de gestión</li>
            <li>Telecomunicaciones</li>
            <li>Gestión de la información</li>
            <li>Gestión de proyectos</li>
            <li>Consultoría empresarial</li>
            <li>Consultoría de TI</li>
            </ul>
        
          </div>

        </div>
      </main>

      
    </div>
  )
}