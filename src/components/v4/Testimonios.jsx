import { useState, useEffect, useRef } from 'react'
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

const TESTIMONIOS = [
  {
    quote:
      'Tuve una operación de un quiste en el ovario. La atención me pareció excelente; los doctores fueron muy amables, atentos y profesionales durante todo el proceso.',
    author: 'Analucía P.',
    date: '20/05/2026',
  },
  {
    quote:
      'La atención en la clínica me pareció muy buena, en especial por parte de Inocente Antonio, cardiólogo, y Víctor Castro. El trato recibido fue muy bueno.',
    author: 'María E.',
    date: '20/05/2026',
  },
  {
    quote:
      'Llegué desde provincia para realizarme una operación y recibí una atención muy buena. Encontré orientación, apoyo y una solución para mi caso. Recomiendo Detecta Clínica.',
    author: 'Martha R.',
    date: '20/05/2026',
  },
  {
    quote:
      'La atención recibida fue muy agradable. El trato del equipo de admisión y recepción fue muy profesional, al igual que la atención brindada por el doctor.',
    author: 'Cristina B.',
    date: '20/05/2026',
  },
]

function Stars() {
  return (
    <span className="inline-flex items-center gap-0.5 text-amber-400" aria-label="5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77l-5.2 2.73.99-5.78L1.58 7.62l5.82-.85L10 1.5z" />
        </svg>
      ))}
    </span>
  )
}

export default function Testimonios() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)
  const numberX = useTransform(x, [-200, 200], [-20, 20])
  const numberY = useTransform(y, [-200, 200], [-10, 10])

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }
  }

  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % TESTIMONIOS.length)
  const goPrev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + TESTIMONIOS.length) % TESTIMONIOS.length
    )

  useEffect(() => {
    const timer = setInterval(goNext, 12000)
    return () => clearInterval(timer)
  }, [])

  const current = TESTIMONIOS[activeIndex]

  return (
    <section
      className="relative w-full py-32 lg:py-40 overflow-hidden bg-linear-to-br from-[#EAF6FB] via-white to-[#F5FBFE]"
      style={{ fontFamily: 'Lexend, sans-serif' }}
    >
      {/* Background decorativo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(0,112,165,0.15) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary-light/20 blur-3xl" />
      <div
        ref={containerRef}
        className="relative mx-auto w-full max-w-6xl px-6 lg:px-12"
        onMouseMove={handleMouseMove}
      >
        {/* Número gigante de fondo */}
        <motion.div
          className="pointer-events-none absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 select-none text-[18rem] lg:text-[28rem] font-bold leading-none tracking-tighter text-primary-dark/[0.05]"
          style={{ x: numberX, y: numberY }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {String(activeIndex + 1).padStart(2, '0')}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Título de la sección */}
        <div className="relative mb-12 lg:mb-16 text-center">
          <p className="text-[11px] font-semibold tracking-[0.4em] uppercase text-primary-medium mb-4">
            Lo que dicen
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-primary-dark tracking-tight leading-[1.05]">
            Testimonios
          </h2>
        </div>

        {/* Contenido principal */}
        <div className="relative flex">
          {/* Columna izquierda: vertical text + progreso */}
          <div className="hidden md:flex flex-col items-center justify-center pr-12 lg:pr-16 border-r border-slate-200">
            <motion.span
              className="font-mono text-[11px] tracking-[0.32em] uppercase text-slate-400"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Testimonios
            </motion.span>

            <div className="relative h-32 w-px bg-slate-200 mt-8">
              <motion.div
                className="absolute top-0 left-0 w-full bg-primary-dark origin-top"
                animate={{
                  height: `${((activeIndex + 1) / TESTIMONIOS.length) * 100}%`,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          {/* Centro: contenido */}
          <div className="flex-1 md:pl-12 lg:pl-16 py-12">
            {/* Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-2.5 text-[11px] font-mono text-slate-500 border border-slate-200 bg-white/70 backdrop-blur-sm rounded-full px-3 py-1">
                  <Stars />
                  <span className="h-3 w-px bg-slate-200" />
                  <span>{current.date}</span>
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Quote con animación palabra por palabra */}
            <div className="relative mb-12 min-h-[180px] lg:min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeIndex}
                  className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 leading-[1.2] tracking-tight"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <span aria-hidden="true" className="text-primary-medium/60">“</span>
                  {current.quote.split(' ').map((word, i) => (
                    <motion.span
                      key={i}
                      className="inline-block mr-[0.25em]"
                      variants={{
                        hidden: { opacity: 0, y: 20, rotateX: 90 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                          transition: {
                            duration: 0.4,
                            delay: i * 0.03,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                        exit: {
                          opacity: 0,
                          y: -10,
                          transition: { duration: 0.18, delay: i * 0.015 },
                        },
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                  <span aria-hidden="true" className="text-primary-medium/60">”</span>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Autor + navegación */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-center gap-4"
                >
                  <motion.div
                    className="w-8 h-px bg-slate-900"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ originX: 0 }}
                  />
                  <div>
                    <p className="text-base font-medium text-slate-900">{current.author}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navegación */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Anterior"
                  className="group relative w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center overflow-hidden transition active:scale-95"
                >
                  <span className="absolute inset-0 bg-primary-dark scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="relative z-10 text-slate-700 transition-colors group-hover:text-white"
                  >
                    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Siguiente"
                  className="group relative w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center overflow-hidden transition active:scale-95"
                >
                  <span className="absolute inset-0 bg-primary-dark scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="relative z-10 text-slate-700 transition-colors group-hover:text-white"
                  >
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ticker inferior */}
        <div className="pointer-events-none absolute -bottom-10 left-0 right-0 overflow-hidden opacity-[0.07]">
          <motion.div
            className="flex whitespace-nowrap text-6xl lg:text-7xl font-bold tracking-tight text-primary-dark"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="mx-10">
                Testimonios •
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
