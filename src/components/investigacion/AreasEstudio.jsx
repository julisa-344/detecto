import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { areasEstudio, investigacionImages } from './data'

export default function AreasEstudio() {
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
            const idx = Number(entry.target.dataset.index)
            if (!Number.isNaN(idx)) setActiveIdx(idx)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    itemRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Áreas de Estudio</SectionEyebrow>
        <SectionTitle className="mb-3">Líneas de investigación</SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
          Ensayos clínicos y estudios observacionales en múltiples especialidades.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {areasEstudio.map((s, index) => {
          const Icon = s.icon
          const id = String(index + 1).padStart(2, '0')
          const isActive = activeIdx === index

          return (
            <motion.div
              key={s.title}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              onMouseEnter={() => setActiveIdx(index)}
              onFocus={() => setActiveIdx(index)}
              tabIndex={0}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative cursor-pointer overflow-hidden rounded-[20px] border bg-white p-6 transition-all duration-500 ${
                isActive
                  ? 'border-[rgb(var(--brand-med)/0.6)] shadow-[0_20px_40px_-15px_rgb(var(--brand-med)/0.25)]'
                  : 'border-[rgb(var(--brand-med)/0.25)] hover:border-[rgb(var(--brand-med)/0.5)]'
              }`}
            >
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-br from-[rgb(var(--brand-med)/0)] via-[rgb(var(--brand-med)/0.15)] to-[rgb(var(--brand-med)/0)] transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />

              <div className="relative z-10">
                <div className="mb-8 flex items-start justify-between">
                  <span
                    className={`font-mono text-[10px] font-medium transition-colors ${
                      isActive
                        ? 'text-[rgb(var(--brand-base))]'
                        : 'text-[rgb(var(--brand-base)/0.4)]'
                    }`}
                  >
                    {id}
                  </span>
                  <div
                    className={`rounded-2xl p-3 transition-all duration-500 ${
                      isActive
                        ? 'bg-[rgb(var(--brand-med))] text-white shadow-lg shadow-[rgb(var(--brand-med)/0.3)]'
                        : 'bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))]'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3
                  className={`text-[15px] font-normal leading-snug tracking-wide transition-colors ${
                    isActive
                      ? 'text-[rgb(var(--brand-base))]'
                      : 'text-[rgb(var(--brand-dark))]'
                  }`}
                >
                  {s.title}
                </h3>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Destacado: Estudios Observacionales */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-24 overflow-hidden rounded-4xl bg-slate-900 lg:mt-32"
      >
        <img
          src={investigacionImages.observacionales}
          alt="Estudios observacionales"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#031D2E]/95 via-[#072A40]/75 to-[#072A40]/25" />
        <div className="absolute inset-0 bg-linear-to-t from-[#031D2E]/80 via-transparent to-transparent" />

        <div className="relative z-10 flex min-h-105 flex-col justify-end p-8 lg:p-14">
          <div className="max-w-xl">
            <h3 className="text-3xl font-light leading-tight tracking-tight text-white lg:text-5xl">
              Estudios{' '}
              <span className="italic font-medium text-[rgb(var(--brand-base))]">
                Observacionales
              </span>
            </h3>
            <p className="mt-4 text-[15px] font-light leading-7 text-white/85">
              Experiencia en seguimiento longitudinal con estándares
              internacionales. Con un equipo altamente especializado y años de
              experiencia en investigación clínica, nuestra área es el espacio
              ideal para desarrollar estudios observacionales.
            </p>

            <Link
              to="/v4/contacto"
              className="group mt-8 flex cursor-pointer items-center gap-0 rounded-full border-none bg-transparent p-0 no-underline transition-all active:scale-95"
            >
              <span className="rounded-full bg-primary px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-500 group-hover:bg-[rgb(var(--brand-base))] group-hover:text-primary-dark">
                Solicitar más información
              </span>
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-primary text-white transition-all duration-500 group-hover:bg-[rgb(var(--brand-base))] group-hover:text-primary-dark">
                <ArrowUpRight className="absolute h-4 w-4 transition-all duration-500 group-hover:translate-x-10 group-hover:-translate-y-10" />
                <ArrowUpRight className="absolute h-4 w-4 -translate-x-10 translate-y-10 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
