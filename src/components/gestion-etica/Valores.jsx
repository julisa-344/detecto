import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { valores } from './data'
import eticaVideo from '../../assets/valores.mp4'

export default function Valores() {
  const [activeIdx, setActiveIdx] = useState(0)
  const active = valores[activeIdx]
  const activeId = String(activeIdx + 1).padStart(2, '0')

  return (
    <section className="relative">
      <div className="mb-12 grid items-end gap-8 lg:mb-16 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
        <div>
          <SectionEyebrow>Cultura</SectionEyebrow>
          <SectionTitle className="mb-0">
            Valores que sostienen{' '} <br />
            <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
              nuestra gestión
            </em>
          </SectionTitle>
        </div>
        <p className="max-w-md text-[15px] font-light leading-7 text-slate-500 lg:border-l lg:border-[rgb(var(--brand-base)/0.25)] lg:pl-8">
          Seis principios que guían la conducta de cada persona vinculada con
          Detecta Clínica.
        </p>
      </div>

      <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
        {/* ── COLUMNA IZQUIERDA: VIDEO ── */}
        <div className="lg:h-full">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[rgb(var(--brand-dark))] shadow-[0_30px_60px_-20px_rgb(var(--brand-base)/0.35)] lg:aspect-auto lg:h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={eticaVideo} type="video/mp4" />
            </video>

            {/* Overlay degradado */}
            <div className="absolute inset-0 z-10 bg-linear-to-t from-[rgb(var(--brand-dark)/0.9)] via-[rgb(var(--brand-dark)/0.25)] to-transparent" />

            {/* Texto sobre el video */}
            <div className="absolute inset-x-0 bottom-0 z-20 p-8 lg:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="font-mono text-[10px] font-medium tracking-widest text-white/60">
                    / {activeId}
                  </span>
                  <h3 className="mt-2 text-3xl font-light uppercase tracking-tight text-white lg:text-4xl">
                    {active.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-white/75">
                    {active.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ── COLUMNA DERECHA: 6 CARDS ── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {valores.map((v, i) => {
            const Icon = v.icon
            const id = String(i + 1).padStart(2, '0')
            const isActive = activeIdx === i
            return (
              <motion.div
                key={v.title}
                onMouseEnter={() => setActiveIdx(i)}
                onFocus={() => setActiveIdx(i)}
                tabIndex={0}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative cursor-pointer overflow-hidden rounded-[20px] border bg-white p-6 transition-all duration-500 ${
                  isActive
                    ? 'border-[rgb(var(--brand-base)/0.6)] shadow-[0_20px_40px_-15px_rgb(var(--brand-base)/0.25)]'
                    : 'border-[rgb(var(--brand-base)/0.2)] hover:border-[rgb(var(--brand-base)/0.5)]'
                }`}
              >
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-br from-transparent via-[rgb(var(--brand-base)/0.15)] to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />

                <div className="relative z-10">
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
                    {v.title}
                  </h3>

                  <div className="mt-5 flex items-center gap-2">
                    <span
                      className={`text-[9px] font-bold tracking-widest transition-colors ${
                        isActive ? 'text-[rgb(var(--brand-base))]' : 'text-[rgb(var(--brand-base)/0.4)]'
                      }`}
                    >
                      VALOR
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
      </div>
    </section>
  )
}
