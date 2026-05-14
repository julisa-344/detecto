import { motion } from 'framer-motion'
import { SectionEyebrow, SectionTitle } from '../specialty'
import { conductaEsperada } from './data'

export default function ConductaEsperada() {
  return (
    <section className="relative">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow>Estándares</SectionEyebrow>
        <SectionTitle className="mb-3">
          Conducta ética esperada{' '}
          <em className="not-italic font-medium text-[rgb(var(--brand-base))]">
            en Detecta
          </em>
        </SectionTitle>
        <p className="max-w-xl text-[15px] font-light leading-7 text-slate-500">
          Seis estándares institucionales claros y aplicables en el día a día.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {conductaEsperada.map((c, i) => {
          const Icon = c.icon
          return (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex items-center gap-4 rounded-3xl border border-slate-100 bg-white p-5 transition-all hover:-translate-y-1 hover:border-[rgb(var(--brand-base)/0.4)] hover:bg-(--brand-bg-ultra) hover:shadow-[0_15px_30px_-15px_rgb(var(--brand-base)/0.2)]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-(--brand-bg-ultra) text-[rgb(var(--brand-base))] transition-colors group-hover:bg-[rgb(var(--brand-base))] group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-[15px] font-medium leading-snug text-[rgb(var(--brand-dark))]">
                {c.title}
              </h3>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
