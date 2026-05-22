import { useEffect, useState, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import videoBg from '../../assets/especialidades.mp4'

const specialties = [
  {
    number: '01',
    title: 'Detección Temprana',
    description: 'Exámenes preventivos con tecnología de última generación para un diagnóstico oportuno. Identificamos señales antes de que se conviertan en un problema mayor.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full"><circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1.5" /><circle cx="32" cy="32" r="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" /><circle cx="32" cy="32" r="3" fill="currentColor" /><path d="M32 8v8M32 48v8M8 32h8M48 32h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
    ),
  },
  {
    number: '02',
    title: 'Oncología Clínica',
    description: 'Atención integral con especialistas de alto nivel y protocolos internacionales. Un equipo multidisciplinario dedicado a tu recuperación.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full"><path d="M32 56s20-14 20-32a10 10 0 00-20 0 10 10 0 00-20 0c0 18 20 32 20 32z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M32 24v16M24 32h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
    ),
  },
  {
    number: '03',
    title: 'Quimioterapia',
    description: 'Tratamientos personalizados en un ambiente cómodo y con acompañamiento permanente. Cada protocolo diseñado específicamente para ti.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full"><rect x="22" y="10" width="20" height="34" rx="4" stroke="currentColor" strokeWidth="1.5" /><path d="M18 44h28v5a5 5 0 01-5 5H23a5 5 0 01-5-5v-5z" stroke="currentColor" strokeWidth="1.5" /><path d="M32 20v10M27 25h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M28 10V7M36 10V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
    ),
  },
  {
    number: '04',
    title: 'Cirugía Oncológica',
    description: 'Procedimientos mínimamente invasivos con los más altos estándares de seguridad. Precisión quirúrgica al servicio de tu salud.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full"><circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="1.5" /><path d="M20 12l24 40M44 12L20 52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><circle cx="32" cy="32" r="4" fill="currentColor" opacity="0.4" /></svg>
    ),
  },
  {
    number: '05',
    title: 'Radioterapia',
    description: 'Tratamiento de alta precisión con Innovación Tecnológica para eliminar células cancerosas protegiendo el tejido sano circundante.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full"><circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="1.5" /><path d="M32 8v10M32 46v10M8 32h10M46 32h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M15.5 15.5l7 7M41.5 41.5l7 7M48.5 15.5l-7 7M22.5 41.5l-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><circle cx="32" cy="32" r="3" fill="currentColor" /></svg>
    ),
  },
]

export default function Especialidades() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const changeSpecialty = useCallback((index) => {
    if (index === activeIndex || animating) return
    setAnimating(true)
    setActiveIndex(index)
    setTimeout(() => setAnimating(false), 500)
  }, [activeIndex, animating])

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % specialties.length
      changeSpecialty(nextIndex)
    }, 2000)
    return () => clearInterval(interval)
  }, [activeIndex, changeSpecialty])

  const active = specialties[activeIndex]

  return (
    <section className="relative h-screen min-h-175 w-full bg-primary-dark overflow-hidden">
      {/* Video de fondo fijo */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-linear-to-r from-gray-950/55 via-gray-900/50 to-transparent z-0" />

      {/* Contenido Principal */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.5fr_3fr] gap-0">
        
        {/* COLUMNA IZQUIERDA: Navegación de Pestañas */}
          <motion.div
            className="flex flex-col justify-center gap-12 py-20 border-r border-white/5 pr-12"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
          <div>
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-secondary mb-4 opacity-80">
              Especialidades Médicas
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-white leading-tight">
              Diseñamos cada <br />
              <span className="italic font-extralight text-secondary">tratamiento para ti</span>
            </h2>
          </div>

          <nav className="flex flex-col gap-2">
            {specialties.map((spec, index) => {
              const isActive = index === activeIndex
              return (
                <button
                  key={index}
                  onClick={() => changeSpecialty(index)}
                  className="group relative flex items-center gap-6 py-4 text-left outline-none transition-all"
                >
                  {/* Barra de progreso de la pestaña activa */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 ${
                      isActive ? 'bg-secondary h-full' : 'bg-white/5 h-0 group-hover:h-full group-hover:bg-white/20'
                    }`}
                  />

                  <span className={`pl-8 text-[10px] font-mono transition-all duration-500 ${
                      isActive ? 'text-secondary translate-x-1' : 'text-white/20'
                    }`}
                  >
                    {spec.number}
                  </span>

                  <span className={`text-base lg:text-lg font-light transition-all duration-500 ${
                      isActive ? 'text-white translate-x-1' : 'text-white/40 group-hover:text-white/70'
                    }`}
                  >
                    {spec.title}
                  </span>
                </button>
              )
            })}
          </nav>
          </motion.div>

        <motion.div
          className="relative flex flex-col justify-center px-10 lg:px-20 py-20"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          
          {/* Watermark de fondo */}
          <div className={`absolute right-10 top-1/2 -translate-y-1/2 text-[25vw] font-black text-white select-none pointer-events-none transition-all duration-700 ease-in-out ${
              animating ? 'opacity-0 scale-90 blur-sm' : 'opacity-[0.03] scale-100 blur-0'
            }`}
          >
            {active.number}
          </div>

          {/* Información con animación de entrada */}
          <div className={`transition-all duration-700 ease-out ${animating ? 'opacity-0 translate-x-12' : 'opacity-100 translate-x-0'}`}>
            <div className="text-secondary mb-10 w-24 h-24">
              {active.icon}
            </div>

            <h3 className="text-5xl lg:text-8xl font-extralight text-white tracking-tighter leading-none mb-8">
              {active.title}
            </h3>

            <div className="w-16 h-1 bg-secondary mb-8 opacity-40" />

            <p className="text-xl lg:text-2xl font-light text-white/60 leading-relaxed max-w-xl">
              {active.description}
            </p>

            <button className="mt-12 px-8 py-3 border border-white/20 rounded-full text-white text-sm font-light hover:bg-white hover:text-primary-dark transition-all">
              Conocer más detalles
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}