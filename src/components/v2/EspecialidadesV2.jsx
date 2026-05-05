import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Imports
import bgDefault from '../../assets/img-05.avif'
import img01 from '../../assets/img-01.avif'
import img02 from '../../assets/img-02.avif'
import img03 from '../../assets/img-03.avif'
import img04 from '../../assets/img-04.avif'
import img05 from '../../assets/img-05.avif'
import img06 from '../../assets/img-06.avif'

const specialties = [
  { number: '01', title: 'Detección Temprana', description: 'Diagnóstico oportuno con tecnología de vanguardia para prevenir complicaciones.', image: img01 },
  { number: '02', title: 'Oncología Clínica', description: 'Atención multidisciplinaria bajo protocolos internacionales de alto nivel.', image: img02 },
  { number: '03', title: 'Quimioterapia', description: 'Tratamiento personalizado en un entorno cómodo con acompañamiento.', image: img03 },
  { number: '04', title: 'Cirugía Oncológica', description: 'Procedimientos mínimamente invasivos con máxima precisión y seguridad.', image: img04 },
  { number: '05', title: 'Radioterapia', description: 'Eliminación de células cancerosas con alta precisión, protegiendo tejido.', image: img05 },
  { number: '06', title: 'Medicina Preventiva', description: 'Enfoque integral para el cuidado de tu salud a largo plazo.', image: img06 },
]

export default function EspecialidadesV3() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center py-20 overflow-hidden bg-gray-950">
      
      {/* Fondo con Zoom e Imagen Dinámica */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={hoveredIndex !== null ? specialties[hoveredIndex].image : bgDefault}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "linear" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${hoveredIndex !== null ? specialties[hoveredIndex].image : bgDefault})` 
            }}
          />
        </AnimatePresence>
        
        {/* OVERLAY AGREGADO AQUÍ */}
        {/* Un negro al 40% de opacidad que se coloca sobre la imagen pero debajo del contenido */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6">
        
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-white tracking-tight">
            Nuestras <span className="font-bold italic">Especialidades</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((spec, index) => {
            const isHovered = hoveredIndex === index
            return (
              <motion.div
                key={spec.number}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                layout
                whileHover={{ scale: 1.05 }}
                className={`group h-64 flex flex-col items-center justify-center p-8 rounded-3xl border border-white/10 backdrop-blur-md transition-colors duration-300 cursor-pointer 
                  ${isHovered ? 'bg-white text-gray-900 shadow-2xl' : 'bg-white/10 text-white'}`}
              >
                <h3 className="text-2xl font-medium text-center transition-colors duration-300">
                  {spec.title}
                </h3>

                <AnimatePresence mode="wait">
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="text-center mt-4 overflow-hidden"
                    >
                      <p className="text-sm font-light text-gray-600 leading-relaxed">
                        {spec.description}
                      </p>
                      <span className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-cyan-700">
                        Ver más →
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}