import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { estudios } from './data'

export default function EstudiosImagenes() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Estudios</SectionEyebrow>
        <SectionTitle className="mb-3">
          Estudios de{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            diagnóstico por imágenes
          </em>
        </SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
          Exámenes precisos con tecnología de última generación para un
          diagnóstico confiable, rápido y seguro.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {estudios.map((s, index) => {
          const Icon = s.icon
          const id = String(index + 1).padStart(2, '0')
          const isActive = activeIdx === index

          return (
            <motion.div
              key={s.title}
              onMouseEnter={() => setActiveIdx(index)}
              onFocus={() => setActiveIdx(index)}
              tabIndex={0}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative cursor-pointer overflow-hidden rounded-[20px] border bg-white p-6 transition-all duration-500 ${
                isActive
                  ? 'border-[rgb(var(--brand-base)/0.6)] shadow-[0_20px_40px_-15px_rgb(var(--brand-base)/0.25)]'
                  : 'border-[rgb(var(--brand-base)/0.2)] hover:border-[rgb(var(--brand-base)/0.5)]'
              }`}
            >
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-br from-transparent via-[rgb(var(--brand-base)/0.15)] to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-8 flex items-start justify-between">
                  <span
                    className={`font-mono text-[10px] font-medium tracking-widest transition-colors ${
                      isActive ? 'text-[rgb(var(--brand-base))]' : 'text-[rgb(var(--brand-base)/0.4)]'
                    }`}
                  >
                    {id}
                  </span>
                  <div
                    className={`rounded-2xl p-3 transition-all duration-500 ${
                      isActive
                        ? 'bg-[rgb(var(--brand-base))] text-white shadow-lg shadow-[rgb(var(--brand-base)/0.3)]'
                        : 'bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))]'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3
                  className={`text-base font-normal uppercase tracking-wide transition-colors ${
                    isActive ? 'text-[rgb(var(--brand-base))]' : 'text-[rgb(var(--brand-dark))]'
                  }`}
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-[13px] font-light leading-relaxed text-slate-500">
                  {s.desc}
                </p>

                <div className="mt-6 flex items-center gap-2">
                  <span
                    className={`text-[9px] font-bold tracking-widest transition-colors ${
                      isActive ? 'text-[rgb(var(--brand-base))]' : 'text-[rgb(var(--brand-base)/0.4)]'
                    }`}
                  >
                    SOLICITAR
                  </span>
                  <div
                    className={`h-px transition-all duration-500 ${
                      isActive ? 'w-8 bg-[rgb(var(--brand-base))]' : 'w-4 bg-[rgb(var(--brand-base)/0.4)]'
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
