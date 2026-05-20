import { motion } from 'framer-motion'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { estudios } from './data'

export default function EstudiosRealizamos() {
  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>¿Qué exámenes realizamos?</SectionEyebrow>
        <SectionTitle className="mb-3">
          Estudios completos para{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            diagnósticos claros y oportunos.
          </em>
        </SectionTitle>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {estudios.map((e, i) => {
          const Icon = e.icon
          return (
            <motion.article
              key={e.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-start gap-4 rounded-3xl border border-slate-100 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-[rgb(var(--brand-base)/0.4)] hover:shadow-[0_18px_38px_-24px_rgba(0,112,165,0.3)] lg:p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))] transition-colors group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>

              <div className="min-w-0">
                <h3 className="text-[15px] font-medium leading-snug text-slate-900 lg:text-base">
                  {e.title}
                </h3>
                <p className="mt-1.5 text-sm font-light leading-relaxed text-slate-500">
                  {e.desc}
                </p>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
