import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import doctor1 from '../../assets/doctor1.webp'
import doctor2 from '../../assets/doctor2.webp'
import doctor3 from '../../assets/doctor3.webp'
import doctor4 from '../../assets/doctor4.webp'
import doctor5 from '../../assets/doctor5.webp'

const doctors = [
  {
    name: 'Dr. Nicanor Rodríguez Gutarra',
    specialty: 'Urología General y Oncológica',
    reg: 'CMP 025867 | RNE 027671',
    description: 'Pionero en cirugía robótica en el Perú. Referente en técnicas de mínima invasión, cirugía laparoscópica avanzada y tecnología láser.',
    image: doctor4,
    bg: '#F0F9FF',
  },
  {
    name: 'Dr. Alexis Alva Pinto',
    specialty: 'Urología Oncológica',
    reg: 'RNE 011507',
    description: 'Dedicado al diagnóstico y tratamiento de enfermedades prostáticas complejas. Su práctica integra tecnología de vanguardia y criterios clínicos internacionales.',
    image: doctor2,
    bg: '#F0F9FF',
  },
  {
    name: 'Dr. Gastón Mendoza de Lama',
    specialty: 'Cirugía Oncológica y Mastología',
    reg: 'CMP 25779 | RNE 11470',
    description: 'Especialista en tratamiento integral con énfasis en patologías mamarias. Prioriza la preservación de la calidad de vida y seguridad oncológica.',
    image: doctor1,
    bg: '#EAF5FB',
  },
  {
    name: 'Dr. Victor Castro',
    specialty: 'Oncología Médica',
    reg: 'CMP 031518',
    description: 'Reconocido por su enfoque en personalización terapéutica e inmunoterapia. Investigador activo en estudios clínicos multicéntricos.',
    image: doctor3,
    bg: '#EAF5FB',
  },
  {
    name: 'Dr. Carlos Oleachea Matto',
    specialty: 'Cirugía de Cabeza y Cuello',
    reg: 'CMP 018493 | RNE 029918',
    description: 'Especialista en patologías complejas de alta precisión anatómica. Enfocado en intervenciones seguras con preservación funcional.',
    image: doctor5,
    bg: '#EAF5FB',
  },
]

const N = doctors.length
const tripled = [...doctors, ...doctors, ...doctors]
const CARD_WIDTH = 310 // card width + gap

export default function StaffMedicoV2() {
  const [virtIdx, setVirtIdx] = useState(N)
  const [animated, setAnimated] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const isJumping = useRef(false)

  const activeIndex = virtIdx % N

  const goTo = useCallback((newVirt) => {
    if (isJumping.current) return
    setVirtIdx(newVirt)
  }, [])

  const nextDoctor = useCallback(() => goTo(virtIdx + 1), [virtIdx, goTo])
  const prevDoctor = useCallback(() => goTo(virtIdx - 1), [virtIdx, goTo])

  // Reset invisible al llegar al extremo
  useEffect(() => {
    if (virtIdx >= N * 2) {
      isJumping.current = true
      const t = setTimeout(() => {
        setAnimated(false)
        setVirtIdx(N + (virtIdx % N))
        requestAnimationFrame(() => requestAnimationFrame(() => {
          setAnimated(true)
          isJumping.current = false
        }))
      }, 700)
      return () => clearTimeout(t)
    }
    if (virtIdx < N) {
      isJumping.current = true
      const t = setTimeout(() => {
        setAnimated(false)
        setVirtIdx(N + (virtIdx % N))
        requestAnimationFrame(() => requestAnimationFrame(() => {
          setAnimated(true)
          isJumping.current = false
        }))
      }, 700)
      return () => clearTimeout(t)
    }
  }, [virtIdx])

  // Autoplay
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(nextDoctor, 3500)
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
              className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-primary-dark hover:border-primary-dark hover:text-white transition-all duration-200 rounded-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-[10px] font-mono text-gray-300 tracking-[0.3em]">
              0{activeIndex + 1} / 0{N}
            </span>
            <button
              onClick={nextDoctor}
              className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-primary-dark hover:border-primary-dark hover:text-white transition-all duration-200 rounded-sm"
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
            className="flex gap-6"
            style={{
              transform: `translateX(calc(-${virtIdx * CARD_WIDTH}px))`,
              transition: animated ? 'transform 700ms cubic-bezier(0.23,1,0.32,1)' : 'none',
            }}
          >
            {tripled.map((doctor, index) => {
              const realIdx = index % N
              const isActive = realIdx === activeIndex && Math.abs(index - virtIdx) < N
              return (
                <div
                  key={index}
                  onClick={() => !isJumping.current && goTo(N + realIdx)}
                  className={`relative flex-shrink-0 w-[285px] cursor-pointer transition-all duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-40 hover:opacity-60'
                  }`}
                >
                  <div
                    className={`relative h-[380px] overflow-hidden transition-all duration-500 ${
                      isActive ? 'shadow-xl' : ''
                    }`}
                    style={{ background: doctor.bg }}
                  >
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[92%] w-auto object-contain object-bottom pointer-events-none"
                    />
                    {isActive && (
                      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary-dark" />
                    )}
                  </div>

                  <div className="pt-4 pb-2">
                    <p className="text-xs font-medium text-primary-dark tracking-wide mb-1">{doctor.specialty}</p>
                    <h3 className="text-base font-light text-gray-900">{doctor.name}</h3>
                    <p className="text-[10px] font-mono text-gray-500 tracking-wide mt-0.5">{doctor.reg}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Descripción del doctor activo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-8 pt-8 border-t border-gray-100 max-w-lg"
          >
            <p className="text-sm font-light text-gray-500 leading-relaxed">
              {doctors[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
