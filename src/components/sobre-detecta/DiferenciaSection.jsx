import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CardClipDef, CARD_CLIP_ID } from '../staff-medico'
import { DIFERENCIADORES } from './data'

const CLIP_STYLE = {
  clipPath: `url(#${CARD_CLIP_ID})`,
  WebkitClipPath: `url(#${CARD_CLIP_ID})`,
}

function PilarCard({ item, index, isActive, cardRef }) {
  const Icon = item.icon
  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      ref={cardRef}
      data-active={isActive ? '' : undefined}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="relative aspect-616/868 w-full">
        <div
          className="absolute inset-0 overflow-hidden bg-white"
          style={CLIP_STYLE}
        >
          {/* Imagen activa (hover en desktop, scroll en mobile) */}
          <img
            src={item.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 max-sm:group-data-active:opacity-100"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/40 to-slate-950/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 max-sm:group-data-active:opacity-100" />

          <div className="relative flex h-full w-full flex-col justify-between p-7 lg:p-8">
            <div className="flex items-start justify-between">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-lighter text-primary transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white max-sm:group-data-active:bg-white/15 max-sm:group-data-active:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-300 transition-colors duration-500 group-hover:text-white/70 max-sm:group-data-active:text-white/70">
                {num}
              </span>
            </div>

            <div className="pr-[18%]">
              <h3 className="text-2xl font-light leading-tight tracking-tight text-primary-dark transition-colors duration-500 group-hover:text-white max-sm:group-data-active:text-white lg:text-3xl">
                {item.title}
              </h3>
              <p className="mt-3 text-[13px] font-light leading-relaxed text-slate-500 transition-colors duration-500 group-hover:text-white/85 max-sm:group-data-active:text-white/85">
                {item.desc}
              </p>
            </div>
          </div>
        </div>

        <span
          aria-hidden="true"
          className="absolute bottom-[2%] right-[2%] flex h-[11%] w-[16%] items-center justify-center rounded-full bg-primary transition-all duration-500 group-hover:scale-105 group-hover:bg-white max-sm:group-data-active:scale-105 max-sm:group-data-active:bg-white"
        />
      </div>
    </motion.article>
  )
}

export default function DiferenciaSection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const itemRefs = useRef([])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(min-width: 640px)')
    if (mq.matches) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = itemRefs.current.indexOf(entry.target)
            if (idx !== -1) setActiveIdx(idx)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    itemRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative bg-[#F0F7FA] py-24 lg:py-32">
      <CardClipDef />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Encabezado */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.5em] text-primary-medium">
              Nuestros Pilares
            </p>
            <h2 className="text-5xl font-light leading-[0.95] tracking-tighter text-primary-dark lg:text-7xl">
              Una atención <br />
              <span className="font-normal italic text-primary">
                pensada para ti.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-[15px] font-light leading-7 text-slate-500">
              Tres pilares fundamentales que guían cada decisión clínica y
              experiencia del paciente en Detecta.
            </p>
          </motion.div>

          <span className="hidden font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-medium/60 lg:inline-flex">
            Estándar Detecta — 2026
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIFERENCIADORES.map((item, i) => (
            <PilarCard
              key={item.title}
              item={item}
              index={i}
              isActive={activeIdx === i}
              cardRef={(el) => (itemRefs.current[i] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
