import { motion } from 'framer-motion'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { pasos } from './data'

export default function PasosRapido() {
  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Cómo funciona</SectionEyebrow>
        <SectionTitle className="mb-3">
          Rápido, fácil y{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            seguro
          </em>
        </SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
          Tres pasos sencillos para acceder a tu estudio de diagnóstico por
          imágenes en Detecta Clínica.
        </p>
      </div>

      <div className="relative">
        {/* Línea conectora horizontal en desktop */}
        <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-linear-to-r from-transparent via-[rgb(var(--brand-base)/0.3)] to-transparent lg:block" />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pasos.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[rgb(var(--brand-base))] text-white shadow-[0_8px_20px_-5px_rgb(var(--brand-base)/0.5)]">
                  <Icon className="h-5 w-5" />
                </span>

                <div className="mt-5 rounded-3xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[rgb(var(--brand-base)/0.4)] hover:shadow-[0_15px_30px_-15px_rgb(var(--brand-base)/0.2)]">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[rgb(var(--brand-base))]">
                    Paso {p.n}
                  </p>
                  <h3 className="mt-3 text-[16px] font-medium leading-snug text-[rgb(var(--brand-dark))]">
                    {p.title}
                  </h3>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
