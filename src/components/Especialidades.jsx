import { useEffect, useRef, useState } from 'react'
import videoBg from '../assets/especialidades.mp4'

const specialties = [
  {
    number: '01',
    title: 'Detección Temprana',
    description: 'Exámenes preventivos con tecnología de última generación para un diagnóstico oportuno. Identificamos señales antes de que se conviertan en un problema mayor.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="32" cy="32" r="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="32" cy="32" r="3" fill="currentColor" />
        <path d="M32 8v8M32 48v8M8 32h8M48 32h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Oncología Clínica',
    description: 'Atención integral con especialistas de alto nivel y protocolos internacionales. Un equipo multidisciplinario dedicado a tu recuperación.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <path d="M32 56s20-14 20-32a10 10 0 00-20 0 10 10 0 00-20 0c0 18 20 32 20 32z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M32 24v16M24 32h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Quimioterapia',
    description: 'Tratamientos personalizados en un ambiente cómodo y con acompañamiento permanente. Cada protocolo diseñado específicamente para ti.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="22" y="10" width="20" height="34" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 44h28v5a5 5 0 01-5 5H23a5 5 0 01-5-5v-5z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M32 20v10M27 25h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M28 10V7M36 10V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Cirugía Oncológica',
    description: 'Procedimientos mínimamente invasivos con los más altos estándares de seguridad. Precisión quirúrgica al servicio de tu salud.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 12l24 40M44 12L20 52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="32" cy="32" r="4" fill="currentColor" opacity="0.4" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Radioterapia',
    description: 'Tratamiento de alta precisión con tecnología avanzada para eliminar células cancerosas protegiendo el tejido sano circundante.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M32 8v10M32 46v10M8 32h10M46 32h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.5 15.5l7 7M41.5 41.5l7 7M48.5 15.5l-7 7M22.5 41.5l-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="32" cy="32" r="3" fill="currentColor" />
      </svg>
    ),
  },
]

export default function Especialidades() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const sectionHeight = section.offsetHeight - window.innerHeight
      const scrolled = Math.max(0, -rect.top)
      const progress = Math.min(Math.max(scrolled / sectionHeight, 0), 1)

      const index = Math.min(
        Math.floor(progress * specialties.length),
        specialties.length - 1
      )

      setActiveIndex(prev => {
        if (prev !== index) {
          setPrevIndex(prev)
          setAnimating(true)
          setTimeout(() => setAnimating(false), 400)
        }
        return index
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const active = specialties[activeIndex]
  const progress = ((activeIndex) / (specialties.length - 1)) * 100

  return (
    <section
      ref={sectionRef}
      className="relative bg-primary-dark"
      style={{ height: `${specialties.length * 120}vh` }}
    >      {/* Video de fondo */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/96 via-primary-dark/90 to-primary-medium/88" />

        {/* Layout principal */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[2fr_3fr] gap-0">

          {/* ── COLUMNA IZQUIERDA ── */}
          <div className="flex flex-col justify-between px-8 lg:px-12 py-28 border-r border-white/10">

            {/* Header */}
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3">
                Especialidades
              </p>
              <h2 className="text-4xl font-semibold text-white leading-snug max-w-xs">
                Cada tratamiento, diseñado para ti
              </h2>
            </div>

            {/* Lista de especialidades */}
            <nav className="flex flex-col gap-0">
              {specialties.map((spec, index) => {
                const isActive = index === activeIndex
                return (
                  <div
                    key={index}
                    className="relative flex items-center gap-5 py-4 pr-6 overflow-hidden transition-all duration-500"
                  >
                    {/* Línea activa izquierda */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-px transition-all duration-500 ${
                        isActive ? 'bg-secondary' : 'bg-white/10'
                      }`}
                    />

                    <span
                      className={`pl-6 text-xs font-mono tracking-widest transition-all duration-500 ${
                        isActive ? 'text-secondary' : 'text-white/40'
                      }`}
                    >
                      {spec.number}
                    </span>

                    <span
                      className={`text-lg font-medium tracking-wide transition-all duration-500 ${
                        isActive ? 'text-white' : 'text-white/50'
                      }`}
                    >
                      {spec.title}
                    </span>
                  </div>
                )
              })}
            </nav>

            {/* Barra de progreso */}
            <div className="flex items-center gap-4 w-3/4">
              <div className="flex-1 h-px bg-white/10">
                <div
                  className="h-full bg-secondary transition-all duration-700"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs font-mono text-white/30 tracking-widest">
                {activeIndex + 1} / {specialties.length}
              </span>
            </div>
          </div>

          {/* ── COLUMNA DERECHA ── */}
          <div className="relative flex flex-col justify-center px-10 lg:px-16 py-28 overflow-hidden">

            {/* Número watermark */}
            <div
              className={`absolute right-0 top-1/2 -translate-y-1/2 text-[22vw] font-black leading-none text-white select-none pointer-events-none transition-all duration-500 ${
                animating ? 'opacity-0 translate-x-8' : 'opacity-[0.03] translate-x-0'
              }`}
            >
              {active.number}
            </div>

            {/* Icono */}
            <div
              className={`text-secondary mb-10 transition-all duration-400 ${
                animating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
              }`}
              style={{ width: 72, height: 72 }}
            >
              {active.icon}
            </div>

            {/* Título */}
            <h3
              className={`text-5xl sm:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.05] transition-all duration-400 ${
                animating ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'
              }`}
            >
              {active.title}
            </h3>

            {/* Línea separadora */}
            <div
              className={`mt-8 mb-8 h-px bg-white/15 transition-all duration-500 ${
                animating ? 'w-0' : 'w-24'
              }`}
            />

            {/* Descripción */}
            <p
              className={`text-xl text-white/60 leading-relaxed max-w-lg transition-all duration-500 ${
                animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              {active.description}
            </p>

            {/* Indicador de scroll */}
            <div
              className={`mt-14 flex items-center gap-3 transition-all duration-500 ${
                animating ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <span className="text-xs tracking-[0.25em] uppercase text-white/25">
                Scroll para explorar
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
