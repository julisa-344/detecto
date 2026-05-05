import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import heroVideo from '../../assets/v2hero.mp4'

const slides = [
  {
    label: 'Innovación Clínica',
    headline: ['Tecnología que', 'transforma', 'la medicina.'],
    highlight: 1, // índice de la línea con color
    sub: 'Diagnósticos más tempranos y precisos gracias a inteligencia artificial de última generación.',
    cta: 'Agendar cita',
  },
  {
    label: 'Detección Temprana',
    headline: ['Detección que', 'salva vidas', 'hoy.'],
    highlight: 1,
    sub: 'Nuestros programas de screening preventivo identifican el cáncer en sus etapas más tratables.',
    cta: 'Conoce el programa',
  },
  {
    label: 'Equipo de Élite',
    headline: ['Especialistas de', 'clase mundial', 'a tu lado.'],
    highlight: 1,
    sub: 'Más de 15 años formando el equipo oncológico más reconocido del país.',
    cta: 'Conoce al equipo',
  },
]

const INTERVAL = 5000

const medicalTags = [
  'Detección Temprana',
  'Oncología Clínica',
  'Investigación',
  'Medicina Preventiva',
  'Quimioterapia',
  'Cirugía de Precisión',
  'Radioterapia',
]

export default function HeroV2() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const startRef = useRef(null)
  const rafRef = useRef(null)

  const goTo = (idx) => {
    setCurrent(idx)
    setProgress(0)
    startRef.current = performance.now()
  }

  const next = () => goTo((current + 1) % slides.length)

  // Barra de progreso animada con rAF
  useEffect(() => {
    if (paused) return
    startRef.current = performance.now()

    const tick = (now) => {
      const elapsed = now - startRef.current
      const pct = Math.min(elapsed / INTERVAL, 1)
      setProgress(pct)
      if (pct < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setCurrent((c) => (c + 1) % slides.length)
        setProgress(0)
        startRef.current = performance.now()
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [current, paused])

  return (
    <section
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-gray-950"
      style={{ fontFamily: 'Lexend, sans-serif' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Video de fondo */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gray-950/50" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gray-950/20 to-transparent" />

      {/* Contenido central */}
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 text-center">

          {/* Label del slide */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`label-${current}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="text-[10px] font-semibold tracking-[0.4em] uppercase text-primary mb-8"
            >
              {slides[current].label}
            </motion.p>
          </AnimatePresence>

          {/* Headline */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`headline-${current}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white tracking-tight leading-[1.05]"
            >
              {slides[current].headline.map((line, i) =>
                i === slides[current].highlight ? (
                  <span key={i} className="block font-light text-primary">{line}</span>
                ) : (
                  <span key={i} className="block">{line}</span>
                )
              )}
            </motion.h1>
          </AnimatePresence>

          {/* Subtítulo */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${current}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-6 text-base lg:text-lg text-white/60 font-light max-w-xl mx-auto leading-relaxed"
            >
              {slides[current].sub}
            </motion.p>
          </AnimatePresence>

          {/* CTA */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`cta-${current}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="mt-10"
            >
              <a
                href="#agendar"
                className="inline-flex items-center gap-3 px-10 py-4 bg-[#0070A5] text-white text-base font-medium tracking-wide rounded-sm hover:bg-[#005a84] transition-colors duration-200 group"
              >
                {slides[current].cta}
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Indicadores con barra de progreso */}
          <div className="mt-12 flex items-center justify-center gap-3">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="group flex flex-col items-center gap-1.5"
                aria-label={`Ir al slide ${i + 1}`}
              >
                <span className={`text-[9px] font-semibold tracking-[0.25em] uppercase transition-colors duration-300 ${i === current ? 'text-white/70' : 'text-white/20 group-hover:text-white/40'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="w-12 h-[2px] bg-white/15 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-none"
                    style={{ width: i === current ? `${progress * 100}%` : i < current ? '100%' : '0%' }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee inferior */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative z-10 w-full border-t border-white/10 bg-white/5 backdrop-blur-md"
      >
        <div className="flex overflow-hidden select-none py-5 lg:py-7">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ ease: 'linear', duration: 25, repeat: Infinity }}
            className="flex whitespace-nowrap"
          >
            {[...medicalTags, ...medicalTags].map((tag, i) => (
              <div key={i} className="flex items-center">
                <span className="px-8 lg:px-12 text-[10px] lg:text-[11px] font-bold tracking-[0.3em] uppercase text-white/30 hover:text-cyan-400 transition-colors duration-300 cursor-default">
                  {tag}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/40 mx-2" />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
