import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import heroVideo1 from '../../assets/v2hero.mp4'
import heroVideo2 from '../../assets/herobg2.mp4'
import heroVideo3 from '../../assets/herobg3.mp4'

const slides = [
  {
    video: heroVideo1,
    label: 'Innovación Clínica',
    headline: ['Tecnología que', 'transforma', 'la medicina.'],
    highlight: 1,
    sub: 'Diagnósticos más tempranos y precisos gracias a inteligencia artificial de última generación.',
    cta: 'Agendar cita',
  },
  {
    video: heroVideo2,
    label: 'Detección Temprana',
    headline: ['Detección que', 'salva vidas', 'hoy.'],
    highlight: 1,
    sub: 'Nuestros programas de screening preventivo identifican el cáncer en sus etapas más tratables.',
    cta: 'Conoce el programa',
  },
  {
    video: heroVideo3,
    label: 'Equipo de Élite',
    headline: ['Especialistas de', 'clase mundial', 'a tu lado.'],
    highlight: 1,
    sub: 'Más de 15 años formando el equipo oncológico más reconocido del país.',
    cta: 'Conoce al equipo',
  },
]

const INTERVAL = 5000

const medicalTags = [
  'Detección Temprana', 'Oncología Clínica', 'Investigación',
  'Medicina Preventiva', 'Quimioterapia', 'Cirugía de Precisión', 'Radioterapia',
]

export default function HeroV2() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const startRef = useRef(null)
  const rafRef = useRef(null)
  // Refs para los 3 videos — todos montados siempre para evitar lag
  const videoRefs = [useRef(null), useRef(null), useRef(null)]

  const goTo = (idx) => {
    if (idx === current) return
    setCurrent(idx)
    setProgress(0)
    startRef.current = performance.now()
  }

  // Controlar qué video reproduce
  useEffect(() => {
    videoRefs.forEach((ref, i) => {
      if (!ref.current) return
      if (i === current) {
        ref.current.currentTime = 0
        ref.current.play().catch(() => {})
      } else {
        ref.current.pause()
      }
    })
  }, [current])

  // Barra de progreso + auto-advance
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
      {/* Videos — todos montados, solo el activo visible */}
      {slides.map((slide, i) => (
        <video
          key={i}
          ref={videoRefs[i]}
          autoPlay={i === 0}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <source src={slide.video} type="video/mp4" />
        </video>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gray-950/50 z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gray-950/20 to-transparent z-10" />

      {/* Contenido */}
      <div className="relative z-20 flex-grow flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">

            {/* Texto del slide activo */}
            <div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`label-${current}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="text-[10px] font-semibold tracking-[0.4em] uppercase text-primary mb-6"
                >
                  {slides[current].label}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.h1
                  key={`headline-${current}`}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
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

              <AnimatePresence mode="wait">
                <motion.p
                  key={`sub-${current}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="mt-6 text-base lg:text-lg text-white/60 font-light max-w-xl leading-relaxed"
                >
                  {slides[current].sub}
                </motion.p>
              </AnimatePresence>

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
            </div>

            {/* Cards de navegación — columna derecha */}
            <div className="hidden lg:flex flex-col gap-3">
              {slides.map((slide, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`group relative text-left w-52 px-5 py-4 rounded-sm border transition-all duration-400 overflow-hidden ${
                    i === current
                      ? 'border-primary/60 bg-white/10 backdrop-blur-md'
                      : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Barra de progreso dentro de la card activa */}
                  {i === current && (
                    <div
                      className="absolute bottom-0 left-0 h-[2px] bg-primary transition-none"
                      style={{ width: `${progress * 100}%` }}
                    />
                  )}
                  <p className={`text-[9px] font-bold tracking-[0.35em] uppercase mb-1 transition-colors duration-300 ${
                    i === current ? 'text-primary' : 'text-white/30 group-hover:text-white/50'
                  }`}>
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <p className={`text-xs font-light transition-colors duration-300 ${
                    i === current ? 'text-white' : 'text-white/40 group-hover:text-white/60'
                  }`}>
                    {slide.label}
                  </p>
                </button>
              ))}
            </div>

            {/* Indicadores móviles (solo en pantallas pequeñas) */}
            <div className="lg:hidden flex items-center gap-3 mt-4">
              {slides.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} className="flex flex-col items-center gap-1.5">
                  <span className={`text-[9px] font-semibold tracking-[0.25em] uppercase transition-colors duration-300 ${i === current ? 'text-white/70' : 'text-white/20'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-12 h-[2px] bg-white/15 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: i === current ? `${progress * 100}%` : i < current ? '100%' : '0%' }}
                    />
                  </div>
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Marquee inferior */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative z-20 w-full border-t border-white/10 bg-white/5 backdrop-blur-md"
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
