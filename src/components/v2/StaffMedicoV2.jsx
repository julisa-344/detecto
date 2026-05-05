import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import doctor1 from '../../assets/doctor1.webp'
import doctor2 from '../../assets/doctor2.webp'
import doctor3 from '../../assets/doctor3.webp'
import doctor4 from '../../assets/doctor4.webp'
import doctor5 from '../../assets/doctor5.webp'

const doctors = [
  { name: 'Dr. Alexis Alva Pinto', specialty: 'Oncología Clínica', description: 'Especialista en diagnóstico oncológico con más de 15 años de experiencia clínica.', image: doctor1 },
  { name: 'Dra. María Elena Ríos', specialty: 'Cirugía Oncológica', description: 'Cirujana referente en técnicas mínimamente invasivas y robótica médica.', image: doctor2 },
  { name: 'Dr. Carlos Mendoza Luna', specialty: 'Radioterapia', description: 'Experto en radioterapia estereotáctica de alta precisión con resultados comprobados.', image: doctor3 },
  { name: 'Dra. Lucía Fernández Torres', specialty: 'Detección Temprana', description: 'Líder en programas de screening preventivo y medicina personalizada de precisión.', image: doctor4 },
  { name: 'Dr. Roberto Guzmán Paredes', specialty: 'Quimioterapia', description: 'Especialista en diseño de protocolos personalizados para tratamientos integrales.', image: doctor5 },
]

export default function StaffMedicoV2() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [animating, setAnimating] = useState(false)

  const nextDoctor = useCallback(() => {
    if (animating) return
    setAnimating(true)
    setActiveIndex((prev) => (prev + 1) % doctors.length)
    setTimeout(() => setAnimating(false), 500)
  }, [animating])

  const prevDoctor = () => {
    if (animating) return
    setAnimating(true)
    setActiveIndex((prev) => (prev - 1 + doctors.length) % doctors.length)
    setTimeout(() => setAnimating(false), 500)
  }

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(nextDoctor, 3000)
    return () => clearInterval(interval)
  }, [nextDoctor, isPaused])

  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-semibold tracking-[0.4em] uppercase text-primary-dark mb-4">
              Nuestro equipo
            </p>
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 tracking-tight leading-tight">
              Conoce a nuestros
              <span className="block font-light text-primary-dark">especialistas médicos</span>
            </h2>
          </motion.div>

          {/* Controles */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <button
              onClick={prevDoctor}
              className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-primary-dark hover:border-primary-dark hover:text-white transition-all duration-200 rounded-sm group"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-[10px] font-mono text-gray-300 tracking-[0.3em]">
              0{activeIndex + 1} / 0{doctors.length}
            </span>
            <button
              onClick={nextDoctor}
              className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-primary-dark hover:border-primary-dark hover:text-white transition-all duration-200 rounded-sm group"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Carrusel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Máscara derecha */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            className="flex gap-6 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ transform: `translateX(calc(-${activeIndex * 310}px))` }}
          >
            {doctors.map((doctor, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative flex-shrink-0 w-[285px] cursor-pointer transition-all duration-500 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-40 hover:opacity-60'
                }`}
              >
                {/* Foto del doctor */}
                <div
                  className={`relative h-[380px] overflow-hidden transition-all duration-500 ${
                    index === activeIndex ? 'shadow-xl' : ''
                  }`}
                  style={{
                    background: index % 2 === 0 ? '#EAF5FB' : '#F0F9FF',
                  }}
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[92%] w-auto object-contain object-bottom pointer-events-none"
                  />

                  {/* Indicador activo */}
                  {index === activeIndex && (
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary-dark" />
                  )}
                </div>

                {/* Info debajo de la foto */}
                <div className="pt-4 pb-2">
                  <p className="text-xs font-medium text-primary-dark tracking-wide mb-1">{doctor.specialty}</p>
                  <h3 className="text-base font-light text-gray-900">{doctor.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Descripción del doctor activo */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 pt-8 border-t border-gray-100 max-w-lg"
        >
          <p className="text-sm font-light text-gray-500 leading-relaxed">
            {doctors[activeIndex].description}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
