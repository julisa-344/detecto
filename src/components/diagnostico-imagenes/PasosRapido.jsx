import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { pasos } from './data'

export default function PasosRapido() {
  return (
    <section className="relative">
      <div className="mb-14 max-w-2xl">
        <SectionEyebrow>Cómo funciona</SectionEyebrow>
        <SectionTitle className="mb-3">
          Rápido, fácil y{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            seguro.
          </em>
        </SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
          Tres pasos sencillos para acceder a tu estudio de diagnóstico por
          imágenes en Detecta Clínica.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-4">
        {pasos.map((p, i) => {
          const Icon = p.icon
          const isLast = i === pasos.length - 1
          return (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Conector entre cards en desktop */}
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 -right-3 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[rgb(var(--brand-base)/0.25)] bg-white text-[rgb(var(--brand-base))] shadow-sm lg:flex"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </span>
              )}

              <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[rgb(var(--brand-base)/0.4)] hover:shadow-[0_25px_45px_-20px_rgb(0,112,165,0.25)] lg:p-7">
                {/* Número gigante de fondo */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-6 select-none font-mono text-[7rem] font-extralight leading-none tracking-tighter text-[rgb(var(--brand-base)/0.06)] transition-colors group-hover:text-[rgb(var(--brand-base)/0.12)]"
                >
                  {p.n}
                </span>

                <div className="relative flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))] transition-colors group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[rgb(var(--brand-base))]">
                      Paso 0{p.n}
                    </p>
                    <h3 className="mt-2 text-[15px] font-medium leading-snug text-[rgb(var(--brand-dark))] lg:text-base">
                      {p.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
