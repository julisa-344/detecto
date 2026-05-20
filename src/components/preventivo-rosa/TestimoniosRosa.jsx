import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Stethoscope } from 'lucide-react'
import { testimonios } from './data'

function Stars({ count = 5 }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-amber-400" aria-label={`${count} estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < count ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth={i < count ? 0 : 1.4}
          className="h-3.5 w-3.5"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.05 + i * 0.04, type: 'spring', stiffness: 260, damping: 18 }}
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77l-5.2 2.73.99-5.78L1.58 7.62l5.82-.85L10 1.5z" />
        </motion.svg>
      ))}
    </span>
  )
}

function getInitials(name = '') {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

const slideVariants = {
  enter: { opacity: 0, y: 16 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
}

export default function TestimoniosRosa() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (testimonios.length <= 1) return
    const timer = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % testimonios.length),
      8000
    )
    return () => clearInterval(timer)
  }, [])

  const current = testimonios[activeIndex]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_-22px_rgba(15,23,42,0.12)]"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5">
        <h3 className="text-[13px] font-semibold tracking-tight text-slate-900">
          Testimonios
        </h3>
        <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400">
          {activeIndex + 1} / {testimonios.length}
        </span>
      </div>

      {/* Reseña activa */}
      <div className="relative px-5 py-5">
        <AnimatePresence mode="wait">
          <motion.article
            key={activeIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3.5"
          >
            {/* Stars + fecha */}
            <div className="flex items-center justify-between">
              <Stars count={current.rating} />
              <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-slate-400">
                {current.fecha}
              </span>
            </div>

            {/* Paciente */}
            <div className="flex items-center gap-2.5">
              <motion.span
                initial={{ scale: 0, rotate: -8 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 240, damping: 16, delay: 0.1 }}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[10.5px] font-semibold text-slate-600"
              >
                {getInitials(current.paciente)}
              </motion.span>
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-semibold text-slate-900 leading-tight">
                  {current.paciente}
                </p>
                <p className="text-[10.5px] font-light text-slate-500">
                  {current.edad} años
                </p>
              </div>
            </div>

            {/* Comentario */}
            <p className="text-[12.5px] italic font-light leading-relaxed text-slate-600">
              “{current.comentario}”
            </p>

            {/* Doctor */}
            <div className="flex items-center gap-2 border-t border-slate-100 pt-3">
              <Stethoscope className="h-3.5 w-3.5 shrink-0 text-slate-400" />
              <p className="text-[11px] font-light text-slate-500">
                Atendida por{' '}
                <span className="font-medium text-slate-700">{current.doctor}</span>
              </p>
            </div>
          </motion.article>
        </AnimatePresence>

        {/* Paginación */}
        {testimonios.length > 1 && (
          <div className="mt-4 flex items-center justify-center gap-1.5">
            {testimonios.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Testimonio ${i + 1}`}
                className="relative h-1.5 cursor-pointer overflow-hidden rounded-full bg-slate-200 transition-all duration-500"
                style={{ width: i === activeIndex ? 22 : 8 }}
              >
                {i === activeIndex && (
                  <motion.span
                    layoutId="testimonio-dot"
                    className="absolute inset-0 rounded-full bg-amber-400"
                  />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
