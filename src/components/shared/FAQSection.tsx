import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import SectionEyebrow from './SectionEyebrow'
import SectionTitle from './SectionTitle'
import { type ContactTheme } from './ContactSidebar'

const THEMES: Record<ContactTheme, { base: string; med: string; dark: string }> = {
  blue:  { base: '#52C0E1', med: '#0199C6', dark: '#0070A5' },
  pink:  { base: '#F472B6', med: '#E91E8C', dark: '#C2185B' },
  green: { base: '#6EE7B7', med: '#10B981', dark: '#059669' },
}

export interface FAQItem {
  q: string
  a: string
}

interface FAQsProps {
  eyebrow?: string
  title?: string
  subtitle?: string
  faqs: FAQItem[]
  theme?: ContactTheme
}

export default function FAQSection({
  eyebrow = 'Preguntas frecuentes',
  title = 'Resolvemos tus dudas',
  subtitle = 'Información clara para que llegues a tu consulta con confianza.',
  faqs = [],
  theme = 'blue',
}: FAQsProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(0)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const p = THEMES[theme]

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SectionEyebrow color={p.med}>{eyebrow}</SectionEyebrow>
      <SectionTitle color={p.dark} className="mb-3">{title}</SectionTitle>
      <p className="mb-10 max-w-xl text-[15px] font-light text-slate-400">{subtitle}</p>

      <div className="w-full rounded-[24px] bg-white px-6 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
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
                  className="relative w-full cursor-pointer text-left"
                  initial={false}
                >
                  <div className="flex items-center gap-6 px-1 py-5">
                    {/* Número */}
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ background: p.dark }}
                        initial={false}
                        animate={{
                          scale:   isActive ? 1 : isHovered ? 0.85 : 0,
                          opacity: isActive ? 1 : isHovered ? 0.1  : 0,
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      />
                      <motion.span
                        className="relative z-10 text-sm font-medium tracking-wide"
                        animate={{ color: isActive ? '#ffffff' : '#94a3b8' }}
                        transition={{ duration: 0.2 }}
                      >
                        {number}
                      </motion.span>
                    </div>

                    {/* Pregunta */}
                    <motion.h3
                      className="text-base font-medium leading-snug tracking-tight sm:text-lg"
                      animate={{
                        x:     isActive || isHovered ? 4 : 0,
                        color: isActive || isHovered ? p.dark : '#64748b',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    >
                      {item.q}
                    </motion.h3>

                    {/* Ícono + / × */}
                    <div className="ml-auto flex shrink-0 items-center">
                      <motion.div
                        className="flex h-8 w-8 items-center justify-center"
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <motion.svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          style={{ color: p.dark }}
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

                  {/* Línea base */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200" />
                  <motion.div
                    className="absolute bottom-0 left-0 h-px origin-left"
                    style={{ background: p.dark, width: '100%' }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive ? 1 : isHovered ? 0.3 : 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                </motion.button>

                {/* Respuesta */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                        transition: {
                          height:  { type: 'spring', stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2, delay: 0.1 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height:  { type: 'spring', stiffness: 300, damping: 30 },
                          opacity: { duration: 0.1 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        className="py-6 pl-16 pr-12 text-[14px] font-light leading-relaxed text-slate-500"
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
    </motion.section>
  )
}
