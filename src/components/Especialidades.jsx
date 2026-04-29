import { useEffect, useRef, useState } from 'react'
import videoBg from '../assets/especialidades.mp4'

const specialties = [
  {
    title: 'Detección Temprana',
    description: 'Exámenes preventivos con tecnología de última generación para un diagnóstico oportuno.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 14v10l7 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Oncología Clínica',
    description: 'Atención integral con especialistas de alto nivel y protocolos internacionales.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M24 44s16-12 16-24a8 8 0 00-16 0 8 8 0 00-16 0c0 12 16 24 16 24z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Quimioterapia',
    description: 'Tratamientos personalizados en un ambiente cómodo y con acompañamiento permanente.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="16" y="8" width="16" height="28" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M12 36h24v4a4 4 0 01-4 4H16a4 4 0 01-4-4v-4z" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 16v8M20 20h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Cirugía Oncológica',
    description: 'Procedimientos mínimamente invasivos con los más altos estándares de seguridad.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M14 8l20 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M34 8L14 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    title: 'Radioterapia',
    description: 'Tratamiento de alta precisión con tecnología avanzada para eliminar células cancerosas protegiendo el tejido sano.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 6v6M24 36v6M6 24h6M36 24h6M11 11l4.5 4.5M32.5 32.5l4.5 4.5M37 11l-4.5 4.5M15.5 32.5L11 37" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Especialidades() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = containerRef.current?.children
      if (!sections) return

      let closestIndex = 0
      let closestOffset = Infinity

      Array.from(sections).forEach((el, index) => {
        const rect = el.getBoundingClientRect()
        const offset = Math.abs(rect.top - window.innerHeight / 2)

        if (offset < closestOffset) {
          closestOffset = offset
          closestIndex = index
        }
      })

      setActiveIndex(closestIndex)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-[200vh] bg-black">

      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="sticky top-0 w-full h-screen object-cover"
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* Overlay elegante oscuro */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>

      {/* Contenido */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={containerRef}
          className="space-y-20 max-w-2xl px-6"
        >
          {specialties.map((spec, index) => (
            <div
              key={index}
              className={`flex items-start gap-6 transition-all duration-700 ${
                activeIndex === index
                  ? 'opacity-100 scale-100'
                  : 'opacity-30 scale-95'
              }`}
            >
              <div className={`flex-shrink-0 text-secondary transition-all duration-500 ${
                activeIndex === index ? 'scale-110 drop-shadow-[0_0_12px_rgba(202,213,7,0.5)]' : ''
              }`}>
                {spec.icon}
              </div>
              <div>
                <h3 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
                  {spec.title}
                </h3>
                <p className="mt-4 text-lg text-white/70 leading-relaxed max-w-lg">
                  {spec.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}