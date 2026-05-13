import { motion } from 'framer-motion'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { alcance } from './data'

export default function AlcanceEvaluacion() {
  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Alcance de Evaluación</SectionEyebrow>
        <SectionTitle className="mb-3">
          Tipos de{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            investigación
          </em>{' '}
          que supervisamos
        </SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
          Evaluamos protocolos en todas las modalidades de investigación con
          seres humanos.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {alcance.map((a, i) => {
          const Icon = a.icon
          return (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-center gap-4 rounded-3xl border border-slate-100 bg-white p-5 transition-all hover:-translate-y-1 hover:border-[rgb(var(--brand-base)/0.4)] hover:shadow-[0_15px_30px_-15px_rgb(var(--brand-base)/0.25)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))] transition-colors group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <p className="text-[14px] font-medium leading-snug text-[rgb(var(--brand-dark))]">
                {a.title}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
