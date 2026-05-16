import { motion } from 'framer-motion'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { compromisos } from './data'

export default function EquipoCompromiso() {
  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Nuestro equipo y compromiso</SectionEyebrow>
        <SectionTitle className="mb-3">
          Laboratorio de primer nivel{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            para el mejor rendimiento.
          </em>
        </SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
          Combinamos tecnología, talento humano y procesos rigurosos para
          ofrecerte resultados confiables en cada análisis.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {compromisos.map((c, i) => {
          const Icon = c.icon
          return (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl bg-white/60 p-7 shadow-[0_25px_55px_-30px_rgb(0,112,165,0.35)] ring-1 ring-white/70 backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgb(0,112,165,0.4)]"
            >
              <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[rgb(var(--brand-base)/0.18)] blur-3xl" />

              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))]">
                  <Icon className="h-5 w-5" />
                </span>

                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-[rgb(var(--brand-base))]">
                  / 0{i + 1}
                </p>
                <h3 className="mt-2 text-xl font-light leading-tight tracking-tight text-[rgb(var(--brand-dark))] lg:text-2xl">
                  {c.title}
                </h3>

                <div className="my-5 h-px w-full bg-linear-to-r from-[rgb(var(--brand-base)/0.4)] via-slate-200 to-transparent" />

                <p className="text-[13.5px] font-light leading-relaxed text-slate-600">
                  {c.desc}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
