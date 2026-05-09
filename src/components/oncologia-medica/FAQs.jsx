import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionEyebrow from './SectionEyebrow'
import SectionTitle from './SectionTitle'
import { faqs } from './data'

export default function FAQs() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [hoveredIdx, setHoveredIdx] = useState(null)

  return (
    <section>
      <SectionEyebrow>Preguntas frecuentes</SectionEyebrow>
      <SectionTitle className="mb-3">Resolvemos tus dudas</SectionTitle>
      <p className="mb-10 max-w-xl text-[15px] font-light text-slate-400">
        Información clara para que llegues a tu consulta con confianza.
      </p>

      <div className="w-full bg-white rounded-[24px] px-6 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <div className="space-y-0">
          {faqs.map((item, index) => {
            const isActive = activeIdx === index
            const isHovered = hoveredIdx === index
            const number = String(index + 1).padStart(2, '0')

            return (
              <div key={index}>
                <motion.button
                  onClick={() => setActiveIdx(isActive ? null : index)}
                  onMouseEnter={() => setHoveredIdx(index)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="w-full group relative cursor-pointer text-left"
                  initial={false}
                >
                  <div className="flex items-center gap-6 py-5 px-1">
                    {/* Número con círculo animado */}
                    <div className="relative flex items-center justify-center w-10 h-10 shrink-0">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-[#0070A5]"
                        initial={false}
                        animate={{
                          scale: isActive ? 1 : isHovered ? 0.85 : 0,
                          opacity: isActive ? 1 : isHovered ? 0.1 : 0,
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      />
                      <motion.span
                        className="relative z-10 text-sm font-medium tracking-wide"
                        animate={{ color: isActive ? '#FFFFFF' : '#94A3B8' }}
                        transition={{ duration: 0.2 }}
                      >
                        {number}
                      </motion.span>
                    </div>

                    {/* Título */}
                    <motion.h3
                      className="text-base sm:text-lg font-medium tracking-tight leading-snug"
                      animate={{
                        x: isActive || isHovered ? 4 : 0,
                        color: isActive
                          ? '#0070A5'
                          : isHovered
                          ? '#0070A5'
                          : '#64748B',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    >
                      {item.q}
                    </motion.h3>

                    {/* Indicador animado */}
                    <div className="ml-auto flex items-center gap-3 shrink-0">
                      <motion.div
                        className="flex items-center justify-center w-8 h-8"
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <motion.svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="text-[#0070A5]"
                          animate={{ opacity: isActive || isHovered ? 1 : 0.4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path
                            d="M8 1V15M1 8H15"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </motion.svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Línea base + línea activa */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200 origin-left" />
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-[#0070A5] origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive ? 1 : isHovered ? 0.3 : 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    style={{ width: '100%' }}
                  />
                </motion.button>

                {/* Contenido */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                        transition: {
                          height: { type: 'spring', stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2, delay: 0.1 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { type: 'spring', stiffness: 300, damping: 30 },
                          opacity: { duration: 0.1 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        className="pl-16 pr-12 py-6 text-slate-500 text-[14px] font-light leading-relaxed"
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      >
                        {item.a}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
